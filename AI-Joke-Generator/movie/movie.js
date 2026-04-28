const API_KEY = "AIzaSyAdZeUWoQPzOHRZxPllJSI1S4TX2kfDQCA";
const URL = `https://generativelanguage.googleapis.com/v1beta/models/gemini-3-flash-preview:generateContent?key=${API_KEY}`;

let userInput = document.getElementById("user-input");
let btn = document.getElementById("btn");
let result = document.getElementById("result");

btn.addEventListener("click", getData);

// ... your existing API code ...

async function getData() {
    const question = userInput.value.trim();
    
    if (!question) return;
    
    const resultEl = document.getElementById("result");
    resultEl.textContent = "🔮 Generating magic...";
    resultEl.classList.remove('show', 'typing');
    
    userInput.value = "";
    
    try {
        const response = await fetch(URL, {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({
                contents: [{
                    role: "user",
                    parts: [{
                        text: `You are a helpful and friendly assistant. Summarize the movie "${question}" in 2-3 sentences in plain text only, no formatting:`
                    }]
                }]
            })
        });

        const data = await response.json();
        const output = data.candidates?.[0]?.content?.parts?.[0]?.text || "No summary found 😅";

        // Typing effect
        resultEl.classList.add('typing');
        resultEl.textContent = '';
        
        let i = 0;
        const typeSpeed = 50;
        
        const typeWriter = () => {
            if (i < output.length) {
                resultEl.textContent += output.charAt(i);
                i++;
                setTimeout(typeWriter, typeSpeed);
            } else {
                resultEl.classList.remove('typing');
                resultEl.classList.add('show');
            }
        };
        
        setTimeout(typeWriter, 500);

    } catch (error) {
        resultEl.classList.remove('typing');
        resultEl.textContent = "🌐 Network error. Please try again!";
        resultEl.classList.add('show');
    }
}

// Enter key support
userInput.addEventListener('keypress', (e) => {
    if (e.key === 'Enter') getData();
});
