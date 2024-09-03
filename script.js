let data;
let currentSortKey = 'accuracy';
let currentSortDirection = 'desc';
let filteredModels = []; // New variable to track filtered models
let isUpdating = false; // Guard to prevent infinite loops

// URL mapping for models, update displayName in order to change naming in the table, please do NOT update keys! The able const you want to update! 
const modelMetadata = {
    'GPT-4o 05/13': { 
        displayName: 'GPT-4o [05/13]', 
        category: 'closed-source', 
        url: 'https://platform.openai.com/docs/models/gpt-4o',
        precision: 'unknown', 
        testedEnvironment: 'OpenAI API', 
        modelDeveloper: 'OpenAI', 
        contextSize: '128k',
        modelSize: 'unknown',
        modelCheckpoints: 'gpt-4o-2024-05-13'
    },
    'GPT-4o 08/06': { 
        displayName: 'GPT-4o [08/06]', 
        category: 'closed-source', 
        url: 'https://platform.openai.com/docs/models/gpt-4o',
        precision: 'unknown', 
        testedEnvironment: 'OpenAI API', 
        modelDeveloper: 'OpenAI', 
        contextSize: '128k',
        modelSize: 'unknown',
        modelCheckpoints: 'gpt-4o-2024-08-06' 
    },
    'GPT-4o-Mini': { 
        displayName: 'GPT-4o-Mini [07/18]', 
        category: 'closed-source', 
        url: 'https://platform.openai.com/docs/models/gpt-4o-mini',
        precision: 'unknown', 
        testedEnvironment: 'OpenAI API', 
        modelDeveloper: 'OpenAI', 
        contextSize: '128k',
        modelSize: 'unknown',
        modelCheckpoints: 'gpt-4o-mini-2024-07-18' 
    },
    'GPT-4-Turbo': { 
        displayName: 'GPT-4-Turbo [04/09]', 
        category: 'closed-source', 
        url: 'https://platform.openai.com/docs/models/gpt-4-turbo-and-gpt-4',
        precision: 'unknown', 
        testedEnvironment: 'OpenAI API', 
        modelDeveloper: 'OpenAI', 
        contextSize: '128k',
        modelSize: 'unknown',
        modelCheckpoints: 'gpt-4-turbo-2024-04-09' 
    },
    'Claude-3-Opus': { 
        displayName: 'Claude-3-Opus [02/29]', 
        category: 'closed-source', 
        url: 'https://www.anthropic.com/news/claude-3-family',
        precision: 'unknown', 
        testedEnvironment: 'Anthropic API & VertexAI API', 
        modelDeveloper: 'Anthropic', 
        contextSize: '200k',
        modelSize: 'unknown',
        modelCheckpoints: 'claude-3-opus@20240229' 
    },
    'Claude-3.5-Sonnet': { 
        displayName: 'Claude-3.5-Sonnet [06/20]', 
        category: 'closed-source', 
        url: 'https://www.anthropic.com/news/claude-3-family',
        precision: 'unknown', 
        testedEnvironment: 'VertexAI API', 
        modelDeveloper: 'Anthropic', 
        contextSize: '200k',
        modelSize: 'unknown',
        modelCheckpoints: 'claude-3-5-sonnet@20240620'
    },
    'Gemini Pro 1.5 05/14': { 
        displayName: 'Gemini 1.5 Pro [05/14]', 
        category: 'closed-source', 
        url: 'https://ai.google.dev/gemini-api/docs/models/gemini#gemini-1.5-pro',
        precision: 'unknown', 
        testedEnvironment: 'VertexAI API', 
        modelDeveloper: 'Google', 
        contextSize: '1m',
        modelSize: 'unknown',
        modelCheckpoints: 'gemini-1.5-pro-preview-0514'
    },
    'Gemini Pro 1.5 08/01': { 
        displayName: 'Gemini 1.5 Pro [08/01-exp]', 
        category: 'closed-source', 
        url: 'https://ai.google.dev/gemini-api/docs/models/experimental-models',
        precision: 'unknown', 
        testedEnvironment: 'GoogleAI API', 
        modelDeveloper: 'Google', 
        contextSize: '1m',
        modelSize: 'unknown',
        modelCheckpoints: 'gemini-1.5-pro-exp-0801'
    },
    'Gemini Pro 1.5 08/27': { 
        displayName: 'Gemini 1.5 Pro [08/27-exp]', 
        category: 'closed-source', 
        url: 'https://ai.google.dev/gemini-api/docs/models/experimental-models',
        precision: 'unknown', 
        testedEnvironment: 'GoogleAI API', 
        modelDeveloper: 'Google', 
        contextSize: '2m',
        modelSize: 'unknown',
        modelCheckpoints: 'gemini-1.5-pro-exp-0827'
    },
    'Gemini Flash 1.5': { 
        displayName: 'Gemini 1.5 Flash [05/14]', 
        category: 'closed-source', 
        url: 'https://console.cloud.google.com/vertex-ai/publishers/google/model-garden/gemini-1.5-flash-001',
        precision: 'unknown', 
        testedEnvironment: 'VertexAI API', 
        modelDeveloper: 'Google', 
        contextSize: '1m',
        modelSize: 'unknown',
        modelCheckpoints: 'gemini-1.5-flash-preview-0514'
    },
    'Gemini Flash 1.5 08/27': { 
        displayName: 'Gemini 1.5 Flash [08/27-exp]', 
        category: 'closed-source', 
        url: 'https://ai.google.dev/gemini-api/docs/models/experimental-models',
        precision: 'unknown', 
        testedEnvironment: 'GoogleAI API', 
        modelDeveloper: 'Google', 
        contextSize: '2m',
        modelSize: 'unknown',
        modelCheckpoints: 'gemini-1.5-flash-exp-0827'
    },
    'Gemini Flash 1.5 8B 08/27': { 
        displayName: 'Gemini 1.5 Flash 8B [08/27-exp]', 
        category: 'closed-source', 
        url: 'https://ai.google.dev/gemini-api/docs/models/experimental-models',
        precision: 'unknown', 
        testedEnvironment: 'GoogleAI API', 
        modelDeveloper: 'Google', 
        contextSize: '2m',
        modelSize: '8B',
        modelCheckpoints: 'gemini-1.5-flash-8b-exp-0827'
    },
    'LLaMA 3.1 405B (Fireworks API)': { 
        displayName: 'LLaMA 3.1 405B', 
        category: 'open-source', 
        url: 'https://fireworks.ai/models/fireworks/llama-v3p1-405b-instruct',
        precision: 'fp8', 
        testedEnvironment: 'Fireworks API', 
        modelDeveloper: 'Meta', 
        contextSize: '128k',
        modelSize: '405B',
        modelCheckpoints: 'llama-v3p1-405b-instruct' 
    },
    'LLaMA 3.1 70B (Fireworks API)': { 
        displayName: 'LLaMA 3.1 70B', 
        category: 'open-source', 
        url: 'https://fireworks.ai/models/fireworks/llama-v3p1-70b-instruct',
        precision: 'fp8', 
        testedEnvironment: 'Fireworks API', 
        modelDeveloper: 'Meta', 
        contextSize: '128k',
        modelSize: '70B',
        modelCheckpoints: 'llama-v3p1-70b-instruct'  
    },
    'LLaMA 3.1 8B (Fireworks API)': { 
        displayName: 'LLaMA 3.1 8B', 
        category: 'open-source', 
        url: 'https://fireworks.ai/models/fireworks/llama-v3p1-8b-instruct',
        precision: 'fp8', 
        testedEnvironment: 'Fireworks API', 
        modelDeveloper: 'Meta', 
        contextSize: '128k',
        modelSize: '8B',
        modelCheckpoints: 'llama-v3p1-8b-instruct' 
    },
    'Llama 3 8B ProLong-512k-Instruct': { 
        displayName: 'Llama 3 8B ProLong-512k-Instruct', 
        category: 'open-source', 
        url: 'https://huggingface.co/princeton-nlp/Llama-3-8B-ProLong-512k-Instruct',
        precision: 'fp16', 
        testedEnvironment: '4xA100s', 
        modelDeveloper: 'Princeton (extended LLaMA 3)', 
        contextSize: '512k',
        modelSize: '8B',
        modelCheckpoints: 'princeton-nlp/Llama-3-8B-ProLong-512k-Instruct' 
    },
    'Jamba 1.5 Large (Vertex API)': { 
        displayName: 'Jamba 1.5 Large', 
        category: 'open-source', 
        url: 'https://cloud.google.com/blog/products/ai-machine-learning/jamba-1-5-model-family-from-ai21-labs-is-now-available-on-vertex-ai',
        precision: '...', 
        testedEnvironment: 'VertexAI API', 
        modelDeveloper: 'AI21', 
        contextSize: '256k',
        modelSize: '94B/398B',
        modelCheckpoints: 'jamba-1.5-large@001' 
    },
    'Jamba 1.5 Mini (Vertex API)': { 
        displayName: 'Jamba 1.5 Mini', 
        category: 'open-source', 
        url: 'https://cloud.google.com/blog/products/ai-machine-learning/jamba-1-5-model-family-from-ai21-labs-is-now-available-on-vertex-ai',
        precision: '...', 
        testedEnvironment: 'VertexAI API', 
        modelDeveloper: 'AI21', 
        contextSize: '256k',
        modelSize: '12B/52B',
        modelCheckpoints: 'jamba-1.5-mini@001' 
    },
    'Command R+': { 
        displayName: 'Command R+', 
        category: 'open-source', 
        url: 'https://docs.cohere.com/docs/command-r-plus',
        precision: '...', 
        testedEnvironment: 'Cohere API', 
        modelDeveloper: 'Cohere', 
        contextSize: '128k',
        modelSize: '104B',
        modelCheckpoints: 'command-r-plus-04-2024' 
    },
    'Command R+ (simple)': { 
        displayName: 'Command R+ (simple)', 
        category: 'open-source', 
        url: 'https://docs.cohere.com/docs/command-r-plus',
        precision: '...', 
        testedEnvironment: 'Cohere API (simplified prompt)', 
        modelDeveloper: 'Cohere', 
        contextSize: '128k',
        modelSize: '104B',
        modelCheckpoints: 'command-r-plus-04-2024' 
    },
    'Command R': { 
        displayName: 'Command R', 
        category: 'open-source', 
        url: 'https://docs.cohere.com/docs/command-r',
        precision: '...', 
        testedEnvironment: 'Cohere API', 
        modelDeveloper: 'Cohere', 
        contextSize: '128k',
        modelSize: '35B',
        modelCheckpoints: 'command-r-03-2024'  
    },
    'Command R (simple)': { 
        displayName: 'Command R (simple)', 
        category: 'open-source', 
        url: 'https://docs.cohere.com/docs/command-r',
        precision: '...', 
        testedEnvironment: 'Cohere API (simplified prompt)', 
        modelDeveloper: 'Cohere', 
        contextSize: '128k',
        modelSize: '35B',
        modelCheckpoints: 'command-r-03-2024' 
    },
    'LongLLaMA (simple)': { 
        displayName: 'LongLLaMA (simple)', 
        category: 'open-source', 
        url: 'https://huggingface.co/syzymon/long_llama_3b_instruct',
        precision: '...', 
        testedEnvironment: '2xA100s', 
        modelDeveloper: 'Szymon Tworkowski (extended LLaMA)', 
        contextSize: '128k',
        modelSize: '3B',
        modelCheckpoints: 'syzymon/long_llama_3b_instruct'  
    },
    'Phi-3-Mini': { 
        displayName: 'Phi-3-Mini', 
        category: 'open-source', 
        url: 'https://huggingface.co/microsoft/Phi-3-mini-128k-instruct',
        precision: '...', 
        testedEnvironment: '3xA100s', 
        modelDeveloper: 'Microsoft', 
        contextSize: '128k',
        modelSize: '3.8B',
        modelCheckpoints: 'microsoft/Phi-3-mini-128k-instruct'  
    },
    'Phi-3-Mini (simple)': { 
        displayName: 'Phi-3-Mini (simple)', 
        category: 'open-source', 
        url: 'https://huggingface.co/microsoft/Phi-3-mini-128k-instruct',
        precision: '...', 
        testedEnvironment: '3xA100s (simplified prompt)', 
        modelDeveloper: 'Microsoft', 
        contextSize: '128k',
        modelSize: '3.8B',
        modelCheckpoints: 'microsoft/Phi-3-mini-128k-instruct' 
    },
    'Gemma-10M (simple)': { 
        displayName: 'Gemma-10M (simple)', 
        category: 'open-source', 
        url: 'https://huggingface.co/mustafaaljadery/gemma-2B-10M',
        precision: '...', 
        testedEnvironment: '1xA100s (simplified prompt)', 
        modelDeveloper: 'Mustafa Aljadery, Siddharth Sharma, Aksh Garg (extended Gemma)', 
        contextSize: '10M',
        modelSize: '2.51B',
        modelCheckpoints: 'mustafaaljadery/gemma-2B-10M'  
    },
    'Gemma-10M': { 
        displayName: 'Gemma-10M', 
        category: 'open-source', 
        url: 'https://huggingface.co/mustafaaljadery/gemma-2B-10M',
        precision: '...', 
        testedEnvironment: '1xA100s', 
        modelDeveloper: 'Mustafa Aljadery, Siddharth Sharma, Aksh Garg (extended Gemma)', 
        contextSize: '10M',
        modelSize: '2.51B',
        modelCheckpoints: 'mustafaaljadery/gemma-2B-10M'  
    },
    'Mistral-Nemo (Mistral API)': { 
        displayName: 'Mistral-Nemo', 
        category: 'open-source', 
        url: 'https://mistral.ai/news/mistral-nemo/',
        precision: '...', 
        testedEnvironment: 'Mistral API', 
        modelDeveloper: 'MistralAI', 
        contextSize: '128k',
        modelSize: '12B',
        modelCheckpoints: 'open-mistral-nemo-2407 (via open-mistral-nemo)'  
    },
    'Mistral-Large 2 (Mistral API)': { 
        displayName: 'Mistral-Large 2', 
        category: 'open-source', 
        url: 'https://mistral.ai/news/mistral-large-2407/',
        precision: '...', 
        testedEnvironment: 'Mistral API', 
        modelDeveloper: 'MistralAI', 
        contextSize: '128k',
        modelSize: '123B',
        modelCheckpoints: 'mistral-large-2407 (via mistral-large-latest)'  
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
        const accuracy = data.attempted ? (results[model].correct / results[model].attempted * 100).toFixed(2) : 0;
        const modelLink = modelMetadata[model]?.url || '#'; // Default to '#' if no link is defined
        const displayName = modelMetadata[model]?.displayName || model; // Use displayName if available

        // Table row for the model
        const row = document.createElement('tr');
        row.innerHTML = `
            <td>
                <span class="toggle-icon" onclick="toggleMetadata('${model}', this)">&#9654;</span>
                <a href="${modelLink}" target="_blank" style="margin-left: 5px;">${displayName}</a>
            </td>
            <td>${accuracy}%</td>
            <td>${data.correct}</td>
            <td>${data.attempted}</td>
        `;
        tbody.appendChild(row);

        // Metadata row
        const metadataRow = document.createElement('tr');
        metadataRow.id = `metadata-${model}`;
        metadataRow.style.display = 'none'; // Hidden by default
        metadataRow.innerHTML = `
            <td colspan="4">
                
                <div><strong>developer:</strong> ${modelMetadata[model]?.modelDeveloper || 'N/A'}</div>
                <div><strong>tested environment:</strong> ${modelMetadata[model]?.testedEnvironment || 'N/A'}</div>
                <div><strong>context length:</strong> ${modelMetadata[model]?.contextSize || 'N/A'}</div>
                <div><strong>model size:</strong> ${modelMetadata[model]?.modelSize || 'N/A'}</div>
                <div><strong>precision:</strong> ${modelMetadata[model]?.precision || 'N/A'}</div>
                <div><strong>checkpoints:</strong> ${modelMetadata[model]?.modelCheckpoints || 'N/A'}</div>
            </td>
        `;
        tbody.appendChild(metadataRow);
    }

    updateSortingArrows(sortKey, sortDirection);
}

// Function to toggle metadata row visibility and the triangle icon direction
function toggleMetadata(model, iconElement) {
    const metadataRow = document.getElementById(`metadata-${model}`);
    if (metadataRow.style.display === 'none') {
        metadataRow.style.display = 'table-row';
        iconElement.classList.add('expanded'); // Add the class to rotate the icon
    } else {
        metadataRow.style.display = 'none';
        iconElement.classList.remove('expanded'); // Remove the class to rotate back
    }
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
