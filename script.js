// Sample dataset for popular AIs
const aiData = [
  {
    name: "ChatGPT",
    description: "A conversational AI assistant developed by OpenAI.",
    url: "https://chat.openai.com/",
    icon: "icons/chatgpt.png"  // Ensure you have an icons folder with appropriate images
  },
  {
    name: "DALL-E",
    description: "Generate images from text descriptions.",
    url: "https://labs.openai.com/",
    icon: "icons/dall-e.png"
  },
  // Add more AI entries as needed...
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
      <p>${ai.description}</p>
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
