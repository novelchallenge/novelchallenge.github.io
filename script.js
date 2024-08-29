let data;
let currentSortKey = 'accuracy';
let currentSortDirection = 'desc';
let filteredModels = []; // New variable to track filtered models
let isUpdating = false; // Guard to prevent infinite loops

// URL mapping for models, update displayName in order to change naming in the table, please do NOT update keys! The able const you want to update! 
const modelMetadata = {
    'GPT-4o 05/13': { 
        displayName: 'GPT-4o (2024-05-13)', 
        category: 'closed-source', 
        url: 'https://platform.openai.com/docs/models/gpt-4o' 
    },
    'GPT-4o 08/06': { 
        displayName: 'GPT-4o (2024-08-06)', 
        category: 'closed-source', 
        url: 'https://platform.openai.com/docs/models/gpt-4o' 
    },
    'GPT-4o-Mini': { 
        displayName: 'GPT-4o-Mini (2024-07-18)', 
        category: 'closed-source', 
        url: 'https://platform.openai.com/docs/models/gpt-4o-mini' 
    },
    'GPT-4-Turbo': { 
        displayName: 'GPT-4-Turbo (2024-04-09)', 
        category: 'closed-source', 
        url: 'https://platform.openai.com/docs/models/gpt-4-turbo-and-gpt-4' 
    },
    'Claude-3-Opus': { 
        displayName: 'Claude-3-Opus (2024-02-29)', 
        category: 'closed-source', 
        url: 'https://www.anthropic.com/news/claude-3-family' 
    },
    'Claude-3.5-Sonnet': { 
        displayName: 'Claude-3.5-Sonnet (2024-06-20)', 
        category: 'closed-source', 
        url: 'https://www.anthropic.com/news/claude-3-family'
    },
    'Gemini Pro 1.5 05/14': { 
        displayName: 'Gemini 1.5 Pro (2024-05-14)', 
        category: 'closed-source', 
        url: 'https://ai.google.dev/gemini-api/docs/models/gemini#gemini-1.5-pro'
    },
    'Gemini Pro 1.5 08/01': { 
        displayName: 'Gemini 1.5 Pro (2024-08-01-exp)', 
        category: 'closed-source', 
        url: 'https://ai.google.dev/gemini-api/docs/models/gemini#gemini-1.5-pro'
    },
    'Gemini Flash 1.5': { 
        displayName: 'Gemini 1.5 Flash (2024-05-14)', 
        category: 'closed-source', 
        url: 'https://console.cloud.google.com/vertex-ai/publishers/google/model-garden/gemini-1.5-flash-001'
    },
    'Gemini Flash 1.5 08/27': { 
        displayName: 'Gemini 1.5 Flash (2024-08-27-exp)', 
        category: 'closed-source', 
        url: 'https://ai.google.dev/gemini-api/docs/models/experimental-models'
    },
    'LLaMA 3.1 405B (Fireworks API)': { 
        displayName: 'LLaMA 3.1 405B (Fireworks API)', 
        category: 'open-source', 
        url: 'https://fireworks.ai/models/fireworks/llama-v3p1-405b-instruct' 
    },
    'LLaMA 3.1 70B (Fireworks API)': { 
        displayName: 'LLaMA 3.1 70B (Fireworks API)', 
        category: 'open-source', 
        url: 'https://fireworks.ai/models/fireworks/llama-v3p1-70b-instruct' 
    },
    'LLaMA 3.1 8B (Fireworks API)': { 
        displayName: 'LLaMA 3.1 8B (Fireworks API)', 
        category: 'open-source', 
        url: 'https://fireworks.ai/models/fireworks/llama-v3p1-8b-instruct' 
    },
    'Jamba 1.5 Large (Vertex API)': { 
        displayName: 'Jamba 1.5 Large (Vertex API)', 
        category: 'open-source', 
        url: 'https://cloud.google.com/blog/products/ai-machine-learning/jamba-1-5-model-family-from-ai21-labs-is-now-available-on-vertex-ai' 
    },
    'Jamba 1.5 Mini (Vertex API)': { 
        displayName: 'Jamba 1.5 Mini (Vertex API)', 
        category: 'open-source', 
        url: 'https://cloud.google.com/blog/products/ai-machine-learning/jamba-1-5-model-family-from-ai21-labs-is-now-available-on-vertex-ai' 
    },
    'Command R+': { 
        displayName: 'Command R+ (Cohere API)', 
        category: 'open-source', 
        url: 'https://docs.cohere.com/docs/command-r-plus' 
    },
    'Command R+ (simple)': { 
        displayName: 'Command R+ (simple)', 
        category: 'open-source', 
        url: 'https://docs.cohere.com/docs/command-r-plus' 
    },
    'Command R': { 
        displayName: 'Command R (Cohere API)', 
        category: 'open-source', 
        url: 'https://docs.cohere.com/docs/command-r' 
    },
    'Command R (simple)': { 
        displayName: 'Command R (simple)', 
        category: 'open-source', 
        url: 'https://docs.cohere.com/docs/command-r' 
    },
    'LongLLaMA (simple)': { 
        displayName: 'LongLLaMA (simple)', 
        category: 'open-source', 
        url: 'https://huggingface.co/syzymon/long_llama_code_7b' 
    },
    'Phi-3-Mini': { 
        displayName: 'Phi-3-Mini', 
        category: 'open-source', 
        url: 'https://huggingface.co/microsoft/Phi-3-mini-128k-instruct' 
    },
    'Phi-3-Mini (simple)': { 
        displayName: 'Phi-3-Mini (simple)', 
        category: 'open-source', 
        url: 'https://huggingface.co/microsoft/Phi-3-mini-128k-instruct' 
    },
    'Gemma-10M (simple)': { 
        displayName: 'Gemma-10M (simple)', 
        category: 'open-source', 
        url: 'https://huggingface.co/mustafaaljadery/gemma-2B-10M' 
    },
    'Gemma-10M': { 
        displayName: 'Gemma-10M', 
        category: 'open-source', 
        url: 'https://huggingface.co/mustafaaljadery/gemma-2B-10M' 
    },
    'Mistral-Nemo (Mistral API)': { 
        displayName: 'Mistral-Nemo (Mistral API)', 
        category: 'open-source', 
        url: 'https://mistral.ai/news/mistral-nemo/' 
    },
    'Mistral-Large 2 (Mistral API)': { 
        displayName: 'Mistral-Large 2 (Mistral API)', 
        category: 'open-source', 
        url: 'https://mistral.ai/news/mistral-large-2407/'
    }
};

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
        const modelLink = modelMetadata[model]?.url || '#'; // Default to '#' if no link is defined
        const displayName = modelMetadata[model]?.displayName || model; // Use displayName if available

        row.innerHTML = `
            <td><a href="${modelLink}" target="_blank">${displayName}</a></td>
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
        option.text = modelMetadata[model]?.displayName || model; // Use displayName if available
        modelSelection.appendChild(option);
    });

    $('#model-selection').select2({
        placeholder: 'Select models to see their performance on common set of claims for comparison',
        allowClear: true
    }).on('select2:unselecting', function() {
        $(this).data('unselecting', true);
    }).on('select2:opening', function(e) {
        if ($(this).data('unselecting')) {
            $(this).removeData('unselecting');
            e.preventDefault();
        }
    }).on('change', function () {
        if (!isUpdating) {
            filterModels();
        }
    });
}



// Filter the results based on selected models
function filterModels() {
    const selectedModels = $('#model-selection').val();

    if (!selectedModels || selectedModels.length === 0) {
        clearFilters();
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

        // Uncheck checkboxes if manual filtering is applied
        if (!isUpdating) {
            document.getElementById('all-models-checkbox').checked = false;
            document.getElementById('closed-source-checkbox').checked = false;
            document.getElementById('open-source-checkbox').checked = false;
        }
    }
}

// Clear all filters and show raw accuracy
function clearFilters() {
    if (!isUpdating) {
        isUpdating = true; // Set guard
        $('#model-selection').val(null).trigger('change');
        document.getElementById('all-models-checkbox').checked = false;
        document.getElementById('closed-source-checkbox').checked = false;
        document.getElementById('open-source-checkbox').checked = false;
        isUpdating = false; // Unset guard
        initializeLeaderboard();
    }
}

// Show all models based on common set
function showAllModels() {
    const allModels = Object.keys(data.pairs[0].results);
    filteredModels = allModels;

    let filteredQuestions = data.pairs.filter(question =>
        allModels.every(model => question.results[model] !== undefined && question.results[model] !== "no_prediction")
    );

    const filteredResults = preprocessData(allModels, filteredQuestions);

    isUpdating = true; // Set guard
    $('#model-selection').val(allModels).trigger('change'); // Populate model selection
    isUpdating = false; // Unset guard

    populateLeaderboard(filteredResults, allModels);
}

// Handle checkboxes
document.getElementById('closed-source-checkbox').addEventListener('change', function () {
    if (this.checked) {
        document.getElementById('open-source-checkbox').checked = false;
        document.getElementById('all-models-checkbox').checked = false;

        // Get closed-source models from metadata
        const closedSourceModels = Object.keys(modelMetadata).filter(model => modelMetadata[model].category === 'closed-source');
        filteredModels = closedSourceModels;

        // Filter questions where all selected models have a prediction
        const filteredQuestions = data.pairs.filter(question =>
            closedSourceModels.every(model => question.results[model] !== undefined && question.results[model] !== "no_prediction")
        );

        const filteredResults = preprocessData(closedSourceModels, filteredQuestions);

        isUpdating = true; // Set guard
        $('#model-selection').val(closedSourceModels).trigger('change'); // Populate model selection
        isUpdating = false; // Unset guard

        populateLeaderboard(filteredResults, closedSourceModels);
    } else {
        clearFilters();
    }
});


document.getElementById('open-source-checkbox').addEventListener('change', function () {
    if (this.checked) {
        document.getElementById('closed-source-checkbox').checked = false;
        document.getElementById('all-models-checkbox').checked = false;

        // Get open-source models from metadata
        const openSourceModels = Object.keys(modelMetadata).filter(model => modelMetadata[model].category === 'open-source');
        filteredModels = openSourceModels;

        // Filter questions where all selected models have a prediction
        const filteredQuestions = data.pairs.filter(question =>
            openSourceModels.every(model => question.results[model] !== undefined && question.results[model] !== "no_prediction")
        );

        const filteredResults = preprocessData(openSourceModels, filteredQuestions);

        isUpdating = true; // Set guard
        $('#model-selection').val(openSourceModels).trigger('change'); // Populate model selection
        isUpdating = false; // Unset guard

        populateLeaderboard(filteredResults, openSourceModels);
    } else {
        clearFilters();
    }
});


document.getElementById('all-models-checkbox').addEventListener('change', function () {
    if (this.checked) {
        document.getElementById('closed-source-checkbox').checked = false;
        document.getElementById('open-source-checkbox').checked = false;
        showAllModels();
    } else {
        clearFilters();
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
