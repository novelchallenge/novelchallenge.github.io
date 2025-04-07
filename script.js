
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
        modelCheckpoints: 'gpt-4o-2024-05-13',
        notes: '',
        testedOnNewClaims: false
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
        modelCheckpoints: 'gpt-4o-2024-08-06',
        notes: '',
        testedOnNewClaims: true 
    },
    'o1-preview 09/12': { 
        displayName: 'o1-preview [09/12]', 
        category: 'closed-source', 
        url: 'https://openai.com/o1/',
        precision: 'unknown', 
        testedEnvironment: 'OpenAI API',
        modelDeveloper: 'OpenAI', 
        contextSize: '128k',
        modelSize: 'unknown',
        modelCheckpoints: 'o1-preview-2024-09-12',
        notes: 'OpenAI\'s API enforces top-p=1.0 and temperature=1.0 for this checkpoint. Some calls didn\'t pass due to "server errors", while others failed due to "too many tokens" even though they should have passed as per tiktoken counts. Additionally, some calls returned more tokens than our specified threshold of max_completion_tokens=6K, resulting in empty responses that were omitted from the reported accuracy. Overall, this model is hard to work with for lengths of 115K-117K or more, which ultimately excluded NoCha\'s longest books from the analysis.',
        testedOnNewClaims: true
    },
    'o1 12/17': { 
        displayName: 'o1-high [12/17]', 
        category: 'closed-source', 
        url: 'https://openai.com/o1/',
        precision: 'unknown', 
        testedEnvironment: 'OpenAI API',
        modelDeveloper: 'OpenAI', 
        contextSize: '200k',
        modelSize: 'unknown',
        modelCheckpoints: 'o1-2024-12-17',
        notes: 'OpenAI\'s API enforces top-p=1.0 and temperature=1.0 for this checkpoint. The model was run with reasoning_effort set to "high." We also had to adjust the prompt wording as the API was returning as "invalid prompt" error. More specifically, we changed the "provide an explanation of your decision-making process" to "provide an explanation of your answer". This reduced the refusal rate but a few calls still resulted in an error, likely due to the book/claim content.',
        testedOnNewClaims: true
    },
    'o1-mini 09/12': { 
        displayName: 'o1-mini [09/12]', 
        category: 'closed-source', 
        url: 'https://openai.com/o1/',
        precision: 'unknown', 
        testedEnvironment: 'OpenAI API',
        modelDeveloper: 'OpenAI', 
        contextSize: '128k',
        modelSize: 'unknown',
        modelCheckpoints: 'o1-mini-2024-09-12',
        notes: 'OpenAI\'s API enforces top-p=1.0 and temperature=1.0 for this checkpoint. Some calls didn\'t pass due to "server errors", while others failed due to "too many tokens" even though they should have passed as per tiktoken counts. Additionally, some calls returned more tokens than our specified threshold of max_completion_tokens=6K, resulting in empty responses that were omitted from the reported accuracy. Overall, this model is hard to work with for lengths of 115K-117K or more, which ultimately excluded NoCha\'s longest books from the analysis.',
        testedOnNewClaims: true 
    },
    'GPT-4o-Mini 7/18': { 
        displayName: 'GPT-4o-Mini [07/18]', 
        category: 'closed-source', 
        url: 'https://platform.openai.com/docs/models/gpt-4o-mini',
        precision: 'unknown', 
        testedEnvironment: 'OpenAI API', 
        modelDeveloper: 'OpenAI', 
        contextSize: '128k',
        modelSize: 'unknown',
        modelCheckpoints: 'gpt-4o-mini-2024-07-18',
        notes: '',
        testedOnNewClaims: true  
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
        modelCheckpoints: 'gpt-4-turbo-2024-04-09',
        notes: '',
        testedOnNewClaims: true 
    },
    'Claude-3-Opus 2/29': { 
        displayName: 'Claude-3-Opus [02/29]', 
        category: 'closed-source', 
        url: 'https://www.anthropic.com/news/claude-3-family',
        precision: 'unknown', 
        testedEnvironment: 'Anthropic API & VertexAI API', 
        modelDeveloper: 'Anthropic', 
        contextSize: '200k',
        modelSize: 'unknown',
        modelCheckpoints: 'claude-3-opus@20240229',
        notes: '',
        testedOnNewClaims: true  
    },
    'Claude-3.5-Sonnet 6/22': { 
        displayName: 'Claude-3.5-Sonnet [06/20]', 
        category: 'closed-source', 
        url: 'https://www.anthropic.com/news/claude-3-family',
        precision: 'unknown', 
        testedEnvironment: 'VertexAI API', 
        modelDeveloper: 'Anthropic', 
        contextSize: '200k',
        modelSize: 'unknown',
        modelCheckpoints: 'claude-3-5-sonnet@20240620',
        notes: '',
        testedOnNewClaims: true 
    },
    'Claude-3.5-Sonnet (v2) 10/22': { 
        displayName: 'Claude-3.5-Sonnet v2 [10/22]', 
        category: 'closed-source', 
        url: 'https://www.anthropic.com/news/3-5-models-and-computer-use',
        precision: 'unknown', 
        testedEnvironment: 'VertexAI API', 
        modelDeveloper: 'Anthropic', 
        contextSize: '200k',
        modelSize: 'unknown',
        modelCheckpoints: 'claude-3-5-sonnet-v2@20241022',
        notes: '',
        testedOnNewClaims: true
    },
    'Claude-3.5-Haiku 10/22': { 
        displayName: 'Claude-3.5-Haiku [10/22]', 
        category: 'closed-source', 
        url: 'https://www.anthropic.com/news/3-5-models-and-computer-use',
        precision: 'unknown', 
        testedEnvironment: 'VertexAI API', 
        modelDeveloper: 'Anthropic', 
        contextSize: '200k',
        modelSize: 'unknown',
        modelCheckpoints: 'claude-3-5-haiku@20241022',
        notes: '',
        testedOnNewClaims: false
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
        modelCheckpoints: 'gemini-1.5-pro-preview-0514',
        notes: '',
        testedOnNewClaims: false
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
        modelCheckpoints: 'gemini-1.5-pro-exp-0801',
        notes: '',
        testedOnNewClaims: false
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
        modelCheckpoints: 'gemini-1.5-pro-exp-0827',
        notes: '',
        testedOnNewClaims: true
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
        modelCheckpoints: 'gemini-1.5-flash-preview-0514',
        notes: '',
        testedOnNewClaims: false
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
        modelCheckpoints: 'gemini-1.5-flash-exp-0827',
        notes: '',
        testedOnNewClaims: true
    },
    'Gemini Flash 2.0 exp (Dec 2024)': { 
        displayName: 'Gemini Flash 2.0 exp', 
        category: 'closed-source', 
        url: 'https://ai.google.dev/gemini-api/docs/models/gemini?_gl=1*qqom7t*_up*MQ..&gclid=Cj0KCQiA7NO7BhDsARIsADg_hIZT2iOmE2GKW82m_Fi6oTU2WfDBXDc1goycd5DR6KZZjv19CrMAqwEaAg0CEALw_wcB#gemini-2.0-flash',
        precision: 'unknown', 
        testedEnvironment: 'GoogleAI API', 
        modelDeveloper: 'Google', 
        contextSize: '1m',
        modelSize: 'unknown',
        modelCheckpoints: 'gemini-2.0-flash-exp',
        notes: 'December version (2024) of Gemini Flash',
        testedOnNewClaims: true
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
        modelCheckpoints: 'gemini-1.5-flash-8b-exp-0827',
        notes: '',
        testedOnNewClaims: true
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
        modelCheckpoints: 'llama-v3p1-405b-instruct',
        notes: '',
        testedOnNewClaims: true 
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
        modelCheckpoints: 'llama-v3p1-70b-instruct',
        notes: '',
        testedOnNewClaims: true  
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
        modelCheckpoints: 'llama-v3p1-8b-instruct',
        notes: '',
        testedOnNewClaims: false 
    },
    'Llama-3.3-70B-Instruct': { 
        displayName: 'LLaMA 3.3 70B', 
        category: 'open-source', 
        url: 'https://huggingface.co/meta-llama/Llama-3.3-70B-Instruct',
        precision: 'fp16', 
        testedEnvironment: '4xA100', 
        modelDeveloper: 'Meta', 
        contextSize: '128k',
        modelSize: '70B',
        modelCheckpoints: 'meta-llama/Llama-3.3-70B-Instruct',
        notes: 'run with vllms',
        testedOnNewClaims: true 
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
        modelCheckpoints: 'princeton-nlp/Llama-3-8B-ProLong-512k-Instruct',
        notes: '',
        testedOnNewClaims: false 
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
        modelCheckpoints: 'jamba-1.5-large@001',
        notes: '',
        testedOnNewClaims: true 
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
        modelCheckpoints: 'jamba-1.5-mini@001',
        notes: '',
        testedOnNewClaims: true 
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
        modelCheckpoints: 'command-r-plus-04-2024',
        notes: '',
        testedOnNewClaims: false 
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
        modelCheckpoints: 'command-r-plus-04-2024',
        notes: '',
        testedOnNewClaims: false 
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
        modelCheckpoints: 'command-r-03-2024',
        notes: '',
        testedOnNewClaims: false  
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
        modelCheckpoints: 'command-r-03-2024',
        notes: '',
        testedOnNewClaims: false 
    },
    'LongLLaMA (simple)': { 
        displayName: 'LongLLaMA (simple)', 
        category: 'open-source', 
        url: 'https://huggingface.co/syzymon/long_llama_3b_instruct',
        precision: '...', 
        testedEnvironment: '2xA100s', 
        modelDeveloper: 'Szymon Tworkowski, Konrad Staniszewski, Mikołaj Pacek, Yuhuai Wu, Henryk Michalewski, Piotr Miłoś (extended LLaMA)', 
        contextSize: '128k',
        modelSize: '3B',
        modelCheckpoints: 'syzymon/long_llama_3b_instruct',
        notes: '',
        testedOnNewClaims: false  
    },
    'Phi-3-Mini': { 
        displayName: 'Phi 3 Mini', 
        category: 'open-source', 
        url: 'https://huggingface.co/microsoft/Phi-3-mini-128k-instruct',
        precision: '...', 
        testedEnvironment: '3xA100s', 
        modelDeveloper: 'Microsoft', 
        contextSize: '128k',
        modelSize: '3.8B',
        modelCheckpoints: 'microsoft/Phi-3-mini-128k-instruct',
        notes: '',
        testedOnNewClaims: false  
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
        modelCheckpoints: 'microsoft/Phi-3-mini-128k-instruct',
        notes: '',
        testedOnNewClaims: false 
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
        modelCheckpoints: 'mustafaaljadery/gemma-2B-10M',
        notes: '',
        testedOnNewClaims: false  
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
        modelCheckpoints: 'mustafaaljadery/gemma-2B-10M',
        notes: '',
        testedOnNewClaims: false  
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
        modelCheckpoints: 'open-mistral-nemo-2407 (via open-mistral-nemo)',
        notes: '',
        testedOnNewClaims: false  
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
        modelCheckpoints: 'mistral-large-2407 (via mistral-large-latest)',
        notes: '',
        testedOnNewClaims: false  
    },
    'MegaBeam-Mistral-7B-512k': { 
        displayName: 'MegaBeam-Mistral-7B-512k', 
        category: 'open-source', 
        url: 'https://huggingface.co/aws-prototyping/MegaBeam-Mistral-7B-512k',
        precision: '...', 
        testedEnvironment: '3xA100s', 
        modelDeveloper: 'AWS', 
        contextSize: '512k (currently tested up to 300k)',
        modelSize: '7B',
        modelCheckpoints: 'aws-prototyping/MegaBeam-Mistral-7B-512k',
        notes: '',
        testedOnNewClaims: false  
    },
    'Qwen 2.5 7B': { 
        displayName: 'Qwen 2.5 7B', 
        category: 'open-source', 
        url: 'https://huggingface.co/Qwen/Qwen2-7B-Instruct',
        precision: '...', 
        testedEnvironment: '1xA100s', 
        modelDeveloper: 'Alibaba Cloud', 
        contextSize: '128k',
        modelSize: '7B',
        modelCheckpoints: 'Qwen/Qwen2-7B-Instruct',
        notes: 'run with vllms (context extended with yarn)',
        testedOnNewClaims: false
    },
    'Qwen 2.5 72B': { 
        displayName: 'Qwen 2.5 72B', 
        category: 'open-source', 
        url: 'https://huggingface.co/Qwen/Qwen2-72B-Instruct',
        precision: '16-bit', 
        testedEnvironment: '4xA100s', 
        modelDeveloper: 'Alibaba Cloud', 
        contextSize: '128k',
        modelSize: '7B',
        modelCheckpoints: 'Qwen/Qwen2-72B-Instruct',
        notes: 'run with vllms (context extended with yarn)',
        testedOnNewClaims: false  
    },
    'GLM4 9B 1M': { 
        displayName: 'GLM4 9B 1M', 
        category: 'open-source', 
        url: 'https://huggingface.co/THUDM/glm-4-9b-chat-1m',
        precision: '16-bit', 
        testedEnvironment: '3xA100s', 
        modelDeveloper: 'Tsinghua University', 
        contextSize: '1M',
        modelSize: '9B',
        modelCheckpoints: 'THUDM/glm-4-9b-chat-1m',
        notes: 'run with vllms',
        testedOnNewClaims: false  
    },
    'LLaMA 3 8B (GradientAI)': { 
        displayName: 'LLaMA-3 8B 1M (GradientAI)', 
        category: 'open-source', 
        url: 'https://huggingface.co/gradientai/Llama-3-8B-Instruct-Gradient-1048k',
        precision: '...', 
        testedEnvironment: '2xA100s', 
        modelDeveloper: 'GradientAI', 
        contextSize: '1M',
        modelSize: '8B',
        modelCheckpoints: 'gradientai/Llama-3-8B-Instruct-Gradient-1048k',
        notes: 'run with vllms',
        testedOnNewClaims: false  
    },
    'LLaMA 3 70B (GradientAI)': { 
        displayName: 'LLaMA-3 70B 1M (GradientAI)', 
        category: 'open-source', 
        url: 'https://huggingface.co/gradientai/Llama-3-70B-Instruct-Gradient-1048k',
        precision: '...', 
        testedEnvironment: '4xA100s', 
        modelDeveloper: 'GradientAI', 
        contextSize: '1M',
        modelSize: '70B',
        modelCheckpoints: 'gradientai/Llama-3-70B-Instruct-Gradient-1048k',
        notes: 'run with vllms',
        testedOnNewClaims: false  
    },
    'LLaMA 3.2 3B': { 
        displayName: 'LLaMA 3.2 3B', 
        category: 'open-source', 
        url: 'https://huggingface.co/meta-llama/Llama-3.2-3B-Instruct',
        precision: '16-bits', 
        testedEnvironment: '1xA100s', 
        modelDeveloper: 'Meta', 
        contextSize: '128K',
        modelSize: '3B',
        modelCheckpoints: 'meta-llama/Llama-3.2-3B-Instruct',
        notes: 'run with vllms',
        testedOnNewClaims: false  
    },
    'Qwen 2.5 14B': { 
        displayName: 'Qwen 2.5 14B', 
        category: 'open-source', 
        url: 'https://huggingface.co/Qwen/Qwen2.5-14B-Instruct',
        precision: '16-bit', 
        testedEnvironment: '2xA100s', 
        modelDeveloper: 'Alibaba Cloud', 
        contextSize: '128k',
        modelSize: '14B',
        modelCheckpoints: 'Qwen/Qwen2.5-14B-Instruct',
        notes: 'run with vllms (context extended with yarn)',
        testedOnNewClaims: false  
    },
    'Qwen 2 72B': { 
        displayName: 'Qwen 2 72B', 
        category: 'open-source', 
        url: 'https://huggingface.co/Qwen/Qwen2-72B-Instruct',
        precision: '16-bit', 
        testedEnvironment: '4xA100s', 
        modelDeveloper: 'Alibaba Cloud', 
        contextSize: '128k',
        modelSize: '72B',
        modelCheckpoints: 'Qwen/Qwen2-72B-Instruct',
        notes: 'run with vllms (context extended with yarn)',
        testedOnNewClaims: false  
    },
    'LLaMA 3.2 1B': { 
        displayName: 'LLaMA 3.2 1B', 
        category: 'open-source', 
        url: 'https://huggingface.co/meta-llama/Llama-3.2-1B-Instruct',
        precision: '16-bits', 
        testedEnvironment: '1xA100s', 
        modelDeveloper: 'Meta', 
        contextSize: '128K',
        modelSize: '1B',
        modelCheckpoints: 'meta-llama/Llama-3.2-1B-Instruct',
        notes: 'run with vllms',
        testedOnNewClaims: false  
    },
    'Phi 3.5 Mini': { 
        displayName: 'Phi 3.5 Mini', 
        category: 'open-source', 
        url: 'https://huggingface.co/microsoft/Phi-3.5-mini-instruct',
        precision: '...', 
        testedEnvironment: '1xA100s', 
        modelDeveloper: 'Microsoft', 
        contextSize: '128k',
        modelSize: '3.8B',
        modelCheckpoints: 'microsoft/Phi-3.5-mini-instruct',
        notes: 'run with vllms',
        testedOnNewClaims: false  
    },
    'Phi 3 Medium': { 
        displayName: 'Phi 3 Medium', 
        category: 'open-source', 
        url: 'https://huggingface.co/microsoft/Phi-3-medium-128k-instruct',
        precision: '...', 
        testedEnvironment: '2xA100s', 
        modelDeveloper: 'Microsoft', 
        contextSize: '128k',
        modelSize: '14B',
        modelCheckpoints: 'microsoft/Phi-3-medium-128k-instruct',
        notes: 'run with vllms',
        testedOnNewClaims: false  
    },
    'Qwen 2.5 3B': { 
        displayName: 'Qwen 2.5 3B', 
        category: 'open-source', 
        url: 'https://huggingface.co/Qwen/Qwen2.5-3B-Instruct',
        precision: '16-bit', 
        testedEnvironment: '1xA100s', 
        modelDeveloper: 'Alibaba Cloud', 
        contextSize: '128k',
        modelSize: '3B',
        modelCheckpoints: 'Qwen/Qwen2.5-3B-Instruct',
        notes: 'run with vllms (context extended with yarn)',
        testedOnNewClaims: false  
    },
    'Qwen 2.5 1.5B': { 
        displayName: 'Qwen 2.5 1.5B', 
        category: 'open-source', 
        url: 'https://huggingface.co/Qwen/Qwen2.5-1.5B-Instruct',
        precision: '16-bit', 
        testedEnvironment: '1xA100s', 
        modelDeveloper: 'Alibaba Cloud', 
        contextSize: '128k',
        modelSize: '1.5B',
        modelCheckpoints: 'Qwen/Qwen2.5-1.5B-Instruct',
        notes: 'run with vllms (context extended with yarn)',
        testedOnNewClaims: false  
    },
    'Qwen 2.5 0.5B': { 
        displayName: 'Qwen 2.5 0.5B', 
        category: 'open-source', 
        url: 'https://huggingface.co/Qwen/Qwen2.5-0.5B-Instruct',
        precision: '16-bit', 
        testedEnvironment: '1xA100s', 
        modelDeveloper: 'Alibaba Cloud', 
        contextSize: '128k',
        modelSize: '0.5B',
        modelCheckpoints: 'Qwen/Qwen2.5-0.5B-Instruct',
        notes: 'run with vllms (context extended with yarn)',
        testedOnNewClaims: false  
    },
    'MiniMax-Text-01': { 
        displayName: 'MiniMax-Text-01', 
        category: 'open-source', 
        url: 'https://github.com/MiniMax-AI/MiniMax-01',
        precision: 'unclear, likely 8-bit', 
        testedEnvironment: 'Official API', 
        modelDeveloper: '', 
        contextSize: '4M',
        modelSize: '',
        modelCheckpoints: 'MiniMax-Text-01',
        notes: 'two claims resulted in error messages',
        testedOnNewClaims: true  
    },
    'DeepSeek-R1-Distill-Qwen-14B': { 
        displayName: 'DeepSeek-R1-Distill-Qwen-14B', 
        category: 'open-source', 
        url: '',
        precision: '', 
        testedEnvironment: '2xA100', 
        modelDeveloper: '', 
        contextSize: '',
        modelSize: '',
        modelCheckpoints: 'deepseek-ai/DeepSeek-R1-Distill-Qwen-14B',
        notes: '',
        testedOnNewClaims: true  
    },
    'DeepSeek-R1-Distill-Qwen-32B': { 
        displayName: 'DeepSeek-R1-Distill-Qwen-32B', 
        category: 'open-source', 
        url: '',
        precision: '', 
        testedEnvironment: '2xA100', 
        modelDeveloper: '', 
        contextSize: '',
        modelSize: '',
        modelCheckpoints: 'deepseek-ai/DeepSeek-R1-Distill-Qwen-32B',
        notes: '',
        testedOnNewClaims: true  
    },
    'Qwen2.5-7B-Instruct-1M': { 
        displayName: 'Qwen2.5-7B-Instruct-1M', 
        category: 'open-source', 
        url: '',
        precision: '', 
        testedEnvironment: 'A100', 
        modelDeveloper: '', 
        contextSize: '',
        modelSize: '',
        modelCheckpoints: 'Qwen/Qwen2.5-7B-Instruct-1M',
        notes: '',
        testedOnNewClaims: true  
    },
    'Qwen2.5-14B-Instruct-1M': { 
        displayName: 'Qwen2.5-14B-Instruct-1M', 
        category: 'open-source', 
        url: '',
        precision: '', 
        testedEnvironment: '2xA100', 
        modelDeveloper: '', 
        contextSize: '',
        modelSize: '',
        modelCheckpoints: 'Qwen/Qwen2.5-14B-Instruct-1M',
        notes: '',
        testedOnNewClaims: true  
    },
    'gemini-2.5-pro-exp-03-25': { 
        displayName: 'Gemini 2.5 Pro [03/25-exp]', 
        category: 'closed-source', 
        url: 'https://blog.google/technology/google-deepmind/gemini-model-thinking-updates-march-2025/',
        precision: 'unknown', 
        testedEnvironment: '2xA100', 
        modelDeveloper: 'Google', 
        contextSize: '1M',
        modelSize: 'unknown',
        modelCheckpoints: 'gemini-2.5-pro-exp-03-25',
        notes: 'Model run with 6k tokens set for generation and temp=0.0. While most entires have been processed, three claims errored likely due to the content.',
        testedOnNewClaims: true  
    },
    'meta-llama/Llama-4-Scout-17B-16E-Instruct': { 
        displayName: 'Llama 4 Scout 17B MoE', 
        category: 'open-source', 
        url: 'https://ai.meta.com/blog/llama-4-multimodal-intelligence/',
        precision: 'bf16', 
        testedEnvironment: 'TogetherAI API', 
        modelDeveloper: 'META', 
        contextSize: '10M',
        modelSize: '17B x 16E',
        modelCheckpoints: 'meta-llama/Llama-4-Scout-17B-16E-Instruct',
        notes: 'Even though the model\'s context window is 10M, TogetherAI API limits the context legth to 300k. This led to some books being omitted from the evaluation as they exceeded 300k.',
        testedOnNewClaims: true  
    },
};


let data;
let currentSortKey = 'accuracy';
let currentSortDirection = 'desc';
let filteredModels = []; // Variable to track filtered models
let filteredQuestions = []; // Variable to track filtered questions
let isUpdating = false; // Guard to prevent infinite loops
let globalRankings = {}; // To store the global rank of each model

// [Your existing modelMetadata as before]

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
    const models = Object.keys(data.pairs[0].results).filter(model => model !== 'bm25-gpt4o-top25');
    filteredModels = models; // Initialize filteredModels with all models
    filteredQuestions = data.pairs.slice(); // Initialize with all questions
    const results = preprocessData(models, filteredQuestions);
    calculateGlobalRankings(results, models);
    populateLeaderboard(results, models);
}

// Preprocess the data to calculate correct and attempted counts
function preprocessData(models, questions) {
    const results = {};
    for (const model of models) {
        results[model] = { correct: 0, attempted: 0 };
    }

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

// Compute global rankings based on accuracy
function calculateGlobalRankings(results, models) {
    // Sort models by accuracy (this will be used to assign global ranks)
    const sortedModels = [...models].sort((a, b) => {
        const accuracyA = results[a].attempted ? (results[a].correct / results[a].attempted) : 0;
        const accuracyB = results[b].attempted ? (results[b].correct / results[b].attempted) : 0;
        return accuracyB - accuracyA; // Sort in descending order of accuracy
    });

    // Assign global rank to each model
    sortedModels.forEach((model, index) => {
        globalRankings[model] = index + 1; // Global rank starts from 1
    });
}

// Populate the leaderboard table
function populateLeaderboard(results, models, sortKey = 'accuracy', sortDirection = 'desc') {
    // Sort the models based on the current sort key
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

    // Loop through the sorted models and generate the rows
    models.forEach(model => {
        if (!filteredModels.includes(model)) return; // Skip models not in filteredModels

        const data = results[model];
        const accuracy = data.attempted ? (data.correct / data.attempted * 100).toFixed(2) : 0;
        const modelLink = modelMetadata[model]?.url || '#'; // Default to '#' if no link is defined
        let displayName = modelMetadata[model]?.displayName || model; // Use displayName if available

            // If this model was tested on new claims, add a diamond mark
        if (modelMetadata[model]?.testedOnNewClaims) {
            displayName = '<span style="color:#ba53ff;">&#x2605;</span> ' + displayName;

        }

        const globalRank = globalRankings[model]; // Get the global rank

        // Table row for the model
        const row = document.createElement('tr');
        row.innerHTML = `
            <td>${globalRank}</td>
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
            <td colspan="5"> <!-- Adjusted colspan to 5 for the new rank column -->
                <div><strong>developer:</strong> ${modelMetadata[model]?.modelDeveloper || 'N/A'}</div>
                <div><strong>tested environment:</strong> ${modelMetadata[model]?.testedEnvironment || 'N/A'}</div>
                <div><strong>context length:</strong> ${modelMetadata[model]?.contextSize || 'N/A'}</div>
                <div><strong>model size:</strong> ${modelMetadata[model]?.modelSize || 'N/A'}</div>
                <div><strong>precision:</strong> ${modelMetadata[model]?.precision || 'N/A'}</div>
                <div><strong>checkpoints:</strong> ${modelMetadata[model]?.modelCheckpoints || 'N/A'}</div>
                <div><strong>notes:</strong> ${modelMetadata[model]?.notes || 'N/A'}</div>
            </td>
        `;
        tbody.appendChild(metadataRow);
    });

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
    const models = Object.keys(data.pairs[0].results).filter(model => model !== 'bm25-gpt4o-top25');

    models.forEach(model => {
        const option = document.createElement('option');
        option.value = model;
        option.text = modelMetadata[model]?.displayName || model; // Use displayName if available
        modelSelection.appendChild(option);
    });

    $('#model-selection').select2({
        placeholder: 'Select models to see their performance on common set of claims for comparison',
        allowClear: true
    }).on('select2:unselecting', function () {
        $(this).data('unselecting', true);
    }).on('select2:opening', function (e) {
        if ($(this).data('unselecting')) {
            $(this).removeData('unselecting');
            e.preventDefault();
        }
    }).on('change', function () {
        if (!isUpdating) {
            applyFilters();
        }
    });
}

// Centralized function to apply all filters
function applyFilters() {
    const allModels = Object.keys(data.pairs[0].results).filter(model => model !== 'bm25-gpt4o-top25');

    // Start with all questions
    let questions = data.pairs.slice(); // Copy of all questions

    // Apply difficulty filter
    const hardChecked = document.getElementById('hard-set-checkbox').checked;
    const easyChecked = document.getElementById('easy-set-checkbox').checked;

    if (hardChecked || easyChecked) {
        questions = questions.filter(question => {
            const bm25Result = question.results['bm25-gpt4o-top25'];
            if (bm25Result === undefined || bm25Result === 'no_prediction') {
                return false; // Exclude if bm25-gpt4o-top25 has no result
            }
            if (hardChecked) {
                return bm25Result !== 'correct';
            }
            if (easyChecked) {
                return bm25Result === 'correct';
            }
            return true;
        });
    }

    // Apply model selection filter
    const selectedModels = $('#model-selection').val();
    if (selectedModels && selectedModels.length > 0) {
        filteredModels = selectedModels.filter(model => model !== 'bm25-gpt4o-top25');
    } else {
        filteredModels = allModels;
    }

    // Apply category filters
    const closedSourceChecked = document.getElementById('closed-source-checkbox').checked;
    const openSourceChecked = document.getElementById('open-source-checkbox').checked;
    const allModelsChecked = document.getElementById('all-models-checkbox').checked;

    if (closedSourceChecked || openSourceChecked || allModelsChecked) {
        let categoryModels = [];
        if (closedSourceChecked) {
            categoryModels = Object.keys(modelMetadata).filter(model => modelMetadata[model].category === 'closed-source');
        } else if (openSourceChecked) {
            categoryModels = Object.keys(modelMetadata).filter(model => modelMetadata[model].category === 'open-source');
        } else if (allModelsChecked) {
            categoryModels = Object.keys(modelMetadata);
        }

        filteredModels = categoryModels.filter(model => model !== 'bm25-gpt4o-top25');

        // Update the model selection dropdown
        isUpdating = true; // Set guard
        $('#model-selection').val(filteredModels).trigger('change'); // Populate model selection
        isUpdating = false; // Unset guard
    } else {
        // No category filters are checked
        // If no models are selected in the model selection dropdown, reset filteredModels to allModels
        if (!selectedModels || selectedModels.length === 0) {
            filteredModels = allModels;

            // Clear the model selection dropdown
            isUpdating = true;
            $('#model-selection').val(null).trigger('change');
            isUpdating = false;
        }
    }

    // Apply common set filter if applicable
    if (filteredModels.length > 1 && (closedSourceChecked || openSourceChecked || allModelsChecked || (selectedModels && selectedModels.length > 0))) {
        questions = questions.filter(question =>
            filteredModels.every(model => question.results[model] !== undefined && question.results[model] !== "no_prediction")
        );
    }

    // Update filteredQuestions
    filteredQuestions = questions;

    // Proceed to calculate results and populate leaderboard
    const results = preprocessData(filteredModels, filteredQuestions);
    calculateGlobalRankings(results, filteredModels);
    populateLeaderboard(results, filteredModels, currentSortKey, currentSortDirection);
}

// Event Listeners for Filters

// Model selection change
$('#model-selection').on('change', function () {
    if (!isUpdating) {
        isUpdating = true;
        applyFilters();
        isUpdating = false;
    }
});

// Difficulty filters
document.getElementById('hard-set-checkbox').addEventListener('change', function () {
    if (!isUpdating) {
        isUpdating = true;
        if (this.checked) {
            document.getElementById('easy-set-checkbox').checked = false;
        }
        applyFilters();
        isUpdating = false;
    }
});

document.getElementById('easy-set-checkbox').addEventListener('change', function () {
    if (!isUpdating) {
        isUpdating = true;
        if (this.checked) {
            document.getElementById('hard-set-checkbox').checked = false;
        }
        applyFilters();
        isUpdating = false;
    }
});

// Category filters
document.getElementById('closed-source-checkbox').addEventListener('change', function () {
    if (!isUpdating) {
        isUpdating = true;
        if (this.checked) {
            document.getElementById('open-source-checkbox').checked = false;
            document.getElementById('all-models-checkbox').checked = false;
        } else {
            // If unchecked and no other common set checkbox is checked, clear model selection
            if (!document.getElementById('open-source-checkbox').checked && !document.getElementById('all-models-checkbox').checked) {
                isUpdating = true;
                $('#model-selection').val(null).trigger('change');
                isUpdating = false;
            }
        }
        applyFilters();
        isUpdating = false;
    }
});

document.getElementById('open-source-checkbox').addEventListener('change', function () {
    if (!isUpdating) {
        isUpdating = true;
        if (this.checked) {
            document.getElementById('closed-source-checkbox').checked = false;
            document.getElementById('all-models-checkbox').checked = false;
        } else {
            // If unchecked and no other common set checkbox is checked, clear model selection
            if (!document.getElementById('closed-source-checkbox').checked && !document.getElementById('all-models-checkbox').checked) {
                isUpdating = true;
                $('#model-selection').val(null).trigger('change');
                isUpdating = false;
            }
        }
        applyFilters();
        isUpdating = false;
    }
});

document.getElementById('all-models-checkbox').addEventListener('change', function () {
    if (!isUpdating) {
        isUpdating = true;
        if (this.checked) {
            document.getElementById('closed-source-checkbox').checked = false;
            document.getElementById('open-source-checkbox').checked = false;
        } else {
            // If unchecked, clear model selection
            isUpdating = true;
            $('#model-selection').val(null).trigger('change');
            isUpdating = false;
        }
        applyFilters();
        isUpdating = false;
    }
});

// Clear all filters and reset leaderboard
function clearFilters() {
    if (!isUpdating) {
        isUpdating = true; // Set guard to prevent loop
        $('#model-selection').val(null).trigger('change'); // Clear selection in dropdown
        clearCheckboxFilters(); // Clear all checkboxes
        filteredModels = Object.keys(data.pairs[0].results).filter(model => model !== 'bm25-gpt4o-top25');
        filteredQuestions = data.pairs.slice(); // Reset to all questions
        applyFilters();
        isUpdating = false; // Unset guard
    }
}

// Function to clear all checkbox filters
function clearCheckboxFilters() {
    document.getElementById('all-models-checkbox').checked = false;
    document.getElementById('closed-source-checkbox').checked = false;
    document.getElementById('open-source-checkbox').checked = false;
    document.getElementById('hard-set-checkbox').checked = false;
    document.getElementById('easy-set-checkbox').checked = false;
}

// Sort table by column
function sortTable(key) {
    if (currentSortKey === key) {
        currentSortDirection = currentSortDirection === 'asc' ? 'desc' : 'asc';
    } else {
        currentSortKey = key;
        currentSortDirection = 'desc';
    }
    const results = preprocessData(filteredModels, filteredQuestions); // Use filteredModels and filteredQuestions
    calculateGlobalRankings(results, filteredModels); // Update global rankings
    populateLeaderboard(results, filteredModels, currentSortKey, currentSortDirection);
}
