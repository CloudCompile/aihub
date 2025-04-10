// Sample dataset for popular AIs
const aiData = [
  {
    name: "FauxGPT",
    description: "A simple AI assistant made by CJ Hauser.",
    url: "chat.html",
    icon: "icons/fauxgpt.png",
    pricing: "Free"
  },
  {
    name: "ChatGPT",
    description: "A conversational AI assistant developed by OpenAI.",
    url: "https://chat.openai.com/",
    icon: "icons/chatgpt.png",
    pricing: "Freemium (Plus: $20/mo)"
  },
  {
    name: "DALL-E",
    description: "Generate images from text descriptions.",
    url: "https://labs.openai.com/",
    icon: "icons/dall-e.png",
    pricing: "Pay-as-you-go (credits)"
  },
  {
    name: "Claude AI",
    description: "Anthropic's safe conversational AI for ethical and responsible dialogue.",
    url: "https://www.anthropic.com/claude",
    icon: "icons/claude.png",
    pricing: "Freemium"
  },
  {
    name: "Google Gemini",
    description: "Google's next-generation AI designed for complex, multi-modal tasks.",
    url: "https://ai.google/gemini/",
    icon: "icons/google-gemini.png",
    pricing: "Freemium (Advanced via Google One)"
  },
  {
    name: "Google Bard",
    description: "A creative conversational AI that blends with Google's ecosystem.",
    url: "https://bard.google.com/",
    icon: "icons/google-bard.png",
    pricing: "Free"
  },
  {
    name: "Midjourney",
    description: "An AI that generates stunning, artistic visuals from text prompts.",
    url: "https://www.midjourney.com/",
    icon: "icons/midjourney.png",
    pricing: "Subscription"
  },
  {
    name: "Stable Diffusion",
    description: "An open-source text-to-image model embraced by a vibrant community of artists.",
    url: "https://stability.ai/",
    icon: "icons/stable-diffusion.png",
    pricing: "Free (self-hosted) / Paid API"
  },
  {
    name: "GitHub Copilot",
    description: "An AI pair programmer that offers code suggestions and enhances development.",
    url: "https://github.com/features/copilot",
    icon: "icons/github-copilot.png",
    pricing: "Subscription ($10/mo or $100/yr)"
  },
  {
    name: "DeepSeek",
    description: "An AI aimed at advanced data analysis and code reasoning capabilities.",
    url: "https://www.deepseek.ai/",
    icon: "icons/deepseek.png",
    pricing: "Free (currently)"
  },
  {
    name: "TextCortex",
    description: "Accelerate creative and content writing tasks with this AI-powered tool.",
    url: "https://textcortex.com/",
    icon: "icons/textcortex.png",
    pricing: "Freemium"
  },
  {
    name: "Runway",
    description: "A platform for AI-powered video editing and dynamic multimedia creation.",
    url: "https://runwayml.com/",
    icon: "icons/runway.png",
    pricing: "Freemium"
  },
  {
    name: "ElevenLabs",
    description: "Realistic text-to-speech and voice synthesis to bring your projects to life.",
    url: "https://elevenlabs.io/",
    icon: "icons/elevenlabs.png",
    pricing: "Freemium"
  },
  {
    name: "Tess AI",
    description: "A meta-platform aggregating several AI models into one cohesive environment.",
    url: "https://tess.ai/",
    icon: "icons/tess.png",
    pricing: "Unknown"
  },
  {
    name: "IBM Watson",
    description: "A comprehensive AI system tailored for enterprise business solutions.",
    url: "https://www.ibm.com/watson",
    icon: "icons/ibm-watson.png",
    pricing: "Enterprise (Custom pricing)"
  },
  {
    name: "Jasper AI",
    description: "An AI assistant focused on content creation and intelligent copywriting.",
    url: "https://www.jasper.ai/",
    icon: "icons/jasper.png",
    pricing: "Subscription"
  },
  {
    name: "Synthesia",
    description: "An innovative platform for creating AI-generated videos with lifelike avatars.",
    url: "https://www.synthesia.io/",
    icon: "icons/synthesia.png",
    pricing: "Paid (starting at $30/mo)"
  },
  {
    name: "Lobe AI",
    description: "A tool to easily build custom machine learning models with no coding required.",
    url: "https://www.lobe.ai/",
    icon: "icons/lobe.png",
    pricing: "Free"
  },
  {
    name: "Hugging Face",
    description: "A platform for open-source machine learning models and datasets, widely used for natural language processing and computer vision tasks.",
    url: "https://huggingface.co/",
    icon: "icons/huggingface.png",
    pricing: "Freemium (paid for hosted inference/API)"
  },
  {
    name: "Open Assistant",
    description: "A community-driven open-source AI assistant aimed at being ethical and transparent.",
    url: "https://open-assistant.io/",
    icon: "icons/open-assistant.png",
    pricing: "Free"
  },
  {
    name: "Perplexity AI",
    description: "An AI-powered search engine designed to provide concise and accurate answers to queries.",
    url: "https://www.perplexity.ai/",
    icon: "icons/perplexity.png",
    pricing: "Freemium"
  },
  {
    name: "Cohere",
    description: "A natural language processing platform offering APIs for text generation and semantic search.",
    url: "https://cohere.ai/",
    icon: "icons/cohere.png",
    pricing: "Pay-as-you-go"
  },
  {
    name: "Replit Ghostwriter",
    description: "An AI-powered code assistant embedded in the Replit IDE for accelerating software development.",
    url: "https://replit.com/ghostwriter",
    icon: "icons/replit-ghostwriter.png",
    pricing: "Subscription (included in Pro plan)"
  },
  {
    name: "Tabnine",
    description: "An AI code completion tool that integrates with popular IDEs to speed up programming.",
    url: "https://www.tabnine.com/",
    icon: "icons/tabnine.png",
    pricing: "Freemium"
  },
  {
    name: "Soundraw",
    description: "An AI music generator allowing users to create royalty-free, customizable tracks.",
    url: "https://soundraw.io/",
    icon: "icons/soundraw.png",
    pricing: "Subscription"
  },
  {
    name: "DeepL Write",
    description: "An AI-driven writing assistant focusing on grammar and style improvements for writers.",
    url: "https://www.deepl.com/write",
    icon: "icons/deepl-write.png",
    pricing: "Free (Pro for DeepL Translator)"
  },
  {
    name: "Ada",
    description: "An AI platform for automating customer support with conversational AI and chatbots.",
    url: "https://www.ada.cx/",
    icon: "icons/ada.png",
    pricing: "Enterprise (Custom pricing)"
  }
];


// Function to generate and display AI cards
function generateAICards(data) {
  const container = document.getElementById('ai-container');
  container.innerHTML = ""; // Clear current content

  data.forEach(ai => {
    const card = document.createElement('div');
    card.className = "card";
    
    card.innerHTML = `
      <img src="${ai.icon}" alt="${ai.name} logo">
      <h2>${ai.name}</h2>
      <h3>${ai.description}</h3>
      <h2>${ai.pricing}</h2>
      <a href="${ai.url}" target="_blank">Visit</a>
    `;
    
    container.appendChild(card);
  });
}

// Initial display of all AI cards
generateAICards(aiData);

// Add a search functionality
const searchInput = document.getElementById('search');
searchInput.addEventListener('input', (event) => {
  const keyword = event.target.value.toLowerCase();
  const filteredData = aiData.filter(ai => ai.name.toLowerCase().includes(keyword));
  generateAICards(filteredData);
});
