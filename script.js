let data;
let currentSortKey = 'accuracy';
let currentSortDirection = 'desc';
let filteredModels = []; // New variable to track filtered models

// Fetch the JSON data
fetch('data.json')
    .then(response => response.json())
    .then(json => {
        data = json;
        initializeLeaderboard();
        populateModelSelection();
    });

// Initialize the leaderboard with the default view
function initializeLeaderboard() {
    const models = Object.keys(data.pairs[0].results);
    filteredModels = models; // Initialize filteredModels with all models
    const results = preprocessData(models);
    populateLeaderboard(results, models);
}

// Preprocess the data to calculate correct and attempted counts
function preprocessData(models, filteredQuestions = null) {
    const results = {};
    for (const model of models) {
        results[model] = { correct: 0, attempted: 0 };
    }

    const questions = filteredQuestions || data.pairs;

    for (const question of questions) {
        for (const model of models) {
            if (question.results[model] !== undefined && question.results[model] !== "no_prediction") {
                results[model].attempted += 1;
                if (question.results[model] === "correct") {
                    results[model].correct += 1;
                }
            }
        }
    }
    return results;
}

// Populate the leaderboard table
function populateLeaderboard(results, models, sortKey = 'accuracy', sortDirection = 'desc') {
    models.sort((a, b) => {
        let valueA, valueB;
        if (sortKey === 'accuracy') {
            valueA = results[a].attempted ? (results[a].correct / results[a].attempted) : 0;
            valueB = results[b].attempted ? (results[b].correct / results[b].attempted) : 0;
        } else if (sortKey === 'model') {
            valueA = a.toLowerCase();
            valueB = b.toLowerCase();
        } else {
            valueA = results[a][sortKey];
            valueB = results[b][sortKey];
        }
        if (valueA < valueB) return sortDirection === 'asc' ? -1 : 1;
        if (valueA > valueB) return sortDirection === 'asc' ? 1 : -1;
        return 0;
    });

    const tbody = document.getElementById('leaderboard').getElementsByTagName('tbody')[0];
    tbody.innerHTML = ''; // Clear previous rows

    for (const model of models) {
        if (!filteredModels.includes(model)) continue; // Skip models not in filteredModels
        const data = results[model];
        const accuracy = data.attempted ? (data.correct / data.attempted * 100).toFixed(2) : 0;
        const row = document.createElement('tr');
        row.innerHTML = `
            <td>${model}</td>
            <td>${accuracy}%</td>
            <td>${data.correct}</td>
            <td>${data.attempted}</td>
        `;
        tbody.appendChild(row);
    }

    updateSortingArrows(sortKey, sortDirection);
}

// Update the sorting arrows
function updateSortingArrows(sortKey, sortDirection) {
    const headers = ['model', 'accuracy', 'correct', 'attempted'];
    headers.forEach(header => {
        const arrow = document.getElementById(`${header}-arrow`);
        if (header === sortKey) {
            arrow.innerHTML = sortDirection === 'asc' ? '\u25B2' : '\u25BC'; // Up or down arrow
        } else {
            arrow.innerHTML = ''; // Clear arrow if not the current sort key
        }
    });
}

// Populate the model selection dropdown
function populateModelSelection() {
    const modelSelection = document.getElementById('model-selection');
    const models = Object.keys(data.pairs[0].results);

    models.forEach(model => {
        const option = document.createElement('option');
        option.value = model;
        option.text = model;
        modelSelection.appendChild(option);
    });

    $('#model-selection').select2({
        placeholder: 'Select models to see their performance on common set of claims for comparison',
        allowClear: true
    }).on('change', filterModels);
}

// Filter the results based on selected models
function filterModels() {
    const selectedModels = $('#model-selection').val();
    const allModelsCheckbox = document.getElementById('all-models-checkbox').checked;

    if (allModelsCheckbox) {
        document.getElementById('closed-source-checkbox').checked = false;
        document.getElementById('open-source-checkbox').checked = false;
        showAllModels();
    } else if (!selectedModels || selectedModels.length === 0) {
        initializeLeaderboard();
    } else {
        filteredModels = selectedModels; // Update the filteredModels

        let filteredQuestions = data.pairs;

        if (selectedModels.length > 1) {
            filteredQuestions = data.pairs.filter(question =>
                selectedModels.every(model => question.results[model] !== undefined && question.results[model] !== "no_prediction")
            );
        }

        const filteredResults = preprocessData(selectedModels, filteredQuestions);
        populateLeaderboard(filteredResults, selectedModels);
    }
}

// Clear all filters and show raw accuracy
function clearFilters() {
    $('#model-selection').val(null).trigger('change');
    document.getElementById('all-models-checkbox').checked = false;
    document.getElementById('closed-source-checkbox').checked = false;
    document.getElementById('open-source-checkbox').checked = false;
    initializeLeaderboard();
}

// Show all models based on common set
function showAllModels() {
    const allModels = Object.keys(data.pairs[0].results);
    filteredModels = allModels;

    let filteredQuestions = data.pairs.filter(question =>
        allModels.every(model => question.results[model] !== undefined && question.results[model] !== "no_prediction")
    );

    const filteredResults = preprocessData(allModels, filteredQuestions);
    populateLeaderboard(filteredResults, allModels);
}

// Handle checkboxes
document.getElementById('closed-source-checkbox').addEventListener('change', function () {
    if (this.checked) {
        document.getElementById('open-source-checkbox').checked = false;
        document.getElementById('all-models-checkbox').checked = false;
        const closedSourceModels = [
            'GPT-4o', 'GPT-4-Turbo', 'Claude-3-Opus', 'Claude-3.5-Sonnet', 'Gemini Pro 1.5', 'Gemini Flash 1.5'
        ];
        filteredModels = closedSourceModels;
        const filteredQuestions = data.pairs.filter(question =>
            closedSourceModels.every(model => question.results[model] !== undefined && question.results[model] !== "no_prediction")
        );
        const filteredResults = preprocessData(closedSourceModels, filteredQuestions);
        populateLeaderboard(filteredResults, closedSourceModels);
    } else {
        initializeLeaderboard();
    }
});

document.getElementById('open-source-checkbox').addEventListener('change', function () {
    if (this.checked) {
        document.getElementById('closed-source-checkbox').checked = false;
        document.getElementById('all-models-checkbox').checked = false;
        const openSourceModels = [
            'Command R+', 'Command R+ (simple)', 'Command R', 'Command R (simple)',
            'LongLLaMA (simple)', 'Phi-3-Mini', 'Phi-3-Mini (simple)', 'Gemma-10M (simple)', 'Gemma-10M'
        ];
        filteredModels = openSourceModels;
        const filteredQuestions = data.pairs.filter(question =>
            openSourceModels.every(model => question.results[model] !== undefined && question.results[model] !== "no_prediction")
        );
        const filteredResults = preprocessData(openSourceModels, filteredQuestions);
        populateLeaderboard(filteredResults, openSourceModels);
    } else {
        initializeLeaderboard();
    }
});

document.getElementById('all-models-checkbox').addEventListener('change', function () {
    if (this.checked) {
        document.getElementById('closed-source-checkbox').checked = false;
        document.getElementById('open-source-checkbox').checked = false;
        showAllModels();
    } else {
        initializeLeaderboard();
    }
});

// Sort table by column
function sortTable(key) {
    if (currentSortKey === key) {
        currentSortDirection = currentSortDirection === 'asc' ? 'desc' : 'asc';
    } else {
        currentSortKey = key;
        currentSortDirection = 'desc';
    }
    const results = preprocessData(filteredModels); // Use filteredModels for sorting
    populateLeaderboard(results, filteredModels, currentSortKey, currentSortDirection);
}
