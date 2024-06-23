let data;
let currentSortKey = 'accuracy';
let currentSortDirection = 'desc';
let filteredModels = [];

// Fetch the JSON data
fetch('data.json')
    .then(response => response.json())
    .then(json => {
        data = json;
        initializeLeaderboard();
        populateModelSelection();
    })
    .catch(error => console.error('Error fetching data:', error));

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
        results[model] = { correct: 0, attempted: 0, accuracy: 0 };
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

    // Calculate accuracy
    for (const model of models) {
        results[model].accuracy = results[model].attempted ? (results[model].correct / results[model].attempted * 100).toFixed(2) : 0;
    }

    return results;
}

// Populate the leaderboard table
function populateLeaderboard(results, models) {
    const tbody = document.getElementById('leaderboard').getElementsByTagName('tbody')[0];
    tbody.innerHTML = ''; // Clear previous rows

    models.sort((a, b) => {
        let valueA = results[a][currentSortKey];
        let valueB = results[b][currentSortKey];

        if (currentSortKey === 'model') {
            valueA = a.toLowerCase();
            valueB = b.toLowerCase();
        } else {
            valueA = parseFloat(valueA);
            valueB = parseFloat(valueB);
        }

        if (valueA < valueB) return currentSortDirection === 'asc' ? -1 : 1;
        if (valueA > valueB) return currentSortDirection === 'asc' ? 1 : -1;
        return 0;
    });

    for (const model of models) {
        if (!filteredModels.includes(model)) continue; // Skip models not in filteredModels
        const data = results[model];
        const row = document.createElement('tr');
        row.innerHTML = `
            <td>${model}</td>
            <td>${data.accuracy}%</td>
            <td>${data.correct}</td>
            <td>${data.attempted}</td>
        `;
        tbody.appendChild(row);
    }

    updateSortingArrows();
}

// Update the sorting arrows
function updateSortingArrows() {
    const headers = ['model', 'accuracy', 'correct', 'attempted'];
    headers.forEach(header => {
        const arrow = document.getElementById(`${header}-arrow`);
        if (arrow) {
            if (header === currentSortKey) {
                arrow.innerHTML = currentSortDirection === 'asc' ? '\u25B2' : '\u25BC';
            } else {
                arrow.innerHTML = '';
            }
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
        placeholder: 'Select models for comparison',
        allowClear: true
    }).on('change', filterModels);
}

// Filter the results based on selected models
function filterModels() {
    const selectedModels = $('#model-selection').val();

    if (!selectedModels || selectedModels.length === 0) {
        initializeLeaderboard();
        return;
    }

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

// Clear all filters and show raw accuracy
function clearFilters() {
    $('#model-selection').val(null).trigger('change');
    initializeLeaderboard();
}

// Sort table by column
function sortTable(key) {
    if (currentSortKey === key) {
        currentSortDirection = currentSortDirection === 'asc' ? 'desc' : 'asc';
    } else {
        currentSortKey = key;
        currentSortDirection = 'desc'; // Start with highest first
    }
    const results = preprocessData(filteredModels);
    populateLeaderboard(results, filteredModels);
}
