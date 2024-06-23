let data;

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
    const models = ["model1", "model2", "model3", "model4", "model5", 
                    "model6", "model7", "model8", "model9", "model10"];
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
function populateLeaderboard(results, models) {
    models.sort((a, b) => {
        const accuracyA = results[a].attempted ? (results[a].correct / results[a].attempted) : 0;
        const accuracyB = results[b].attempted ? (results[b].correct / results[b].attempted) : 0;
        return accuracyB - accuracyA;
    });

    const tbody = document.getElementById('leaderboard').getElementsByTagName('tbody')[0];
    tbody.innerHTML = ''; // Clear previous rows

    for (const model of models) {
        const data = results[model];
        const row = document.createElement('tr');
        row.innerHTML = `
            <td>${model}</td>
            <td>${data.attempted ? (data.correct / data.attempted * 100).toFixed(2) : 0}%</td>
            <td>${data.correct}</td>
            <td>${data.attempted}</td>
        `;
        tbody.appendChild(row);
    }
}

// Populate the model selection dropdown
function populateModelSelection() {
    const modelSelection = document.getElementById('model-selection');
    const models = ["model1", "model2", "model3", "model4", "model5", 
                    "model6", "model7", "model8", "model9", "model10"];

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

    if (selectedModels.length === 1) {
        const filteredResults = preprocessData(selectedModels);
        populateLeaderboard(filteredResults, selectedModels);
        return;
    }

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
