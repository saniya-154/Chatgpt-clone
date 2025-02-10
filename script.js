// script.js
document.getElementById('send-button').addEventListener('click', sendMessage);
document.getElementById('user-input').addEventListener('keypress', function(e) {
    if (e.key === 'Enter') {
        sendMessage();
    }
});

function sendMessage() {
    const userInput = document.getElementById('user-input').value;
    
    if (userInput.trim() !== "") {
        displayMessage(userInput, 'user');
        document.getElementById('user-input').value = "";  // Clear input field
        // Simulate a response from the AI (this can be replaced with API calls)
        simulateAIResponse(userInput);
    }
}

function displayMessage(message, sender) {
    const chatBox = document.getElementById('chat-box');
    const messageDiv = document.createElement('div');
    messageDiv.classList.add(sender === 'user' ? 'user-message' : 'ai-message');
    messageDiv.innerText = message;
    chatBox.appendChild(messageDiv);
    chatBox.scrollTop = chatBox.scrollHeight;  // Auto scroll to the bottom
}

function simulateAIResponse(userInput) {
    const aiResponse = `Chatgpt : ${userInput}`;  // Placeholder AI response
    setTimeout(() => {
        displayMessage(aiResponse, 'ai');
    }, 1000);
}

