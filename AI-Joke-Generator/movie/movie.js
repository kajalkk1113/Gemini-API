const API_KEY = "AIzaSyBi1H4_Sx7UlAFjL1_hHQZQ0OIa3jRUtGM";
const URL = `https://generativelanguage.googleapis.com/v1beta/models/gemini-3-flash-preview:generateContent?key=${API_KEY}`;

let userInput = document.getElementById("user-input");
let btn = document.getElementById("btn");
let result = document.getElementById("result");

btn.addEventListener("click", getData);

async function getData() {
    const question = userInput.value; 
    
    result.textContent = "Thinking...";
    userInput.value = ""; 

    try {
        const response = await fetch(URL, {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({
                contents: [{
                    role: "user",
                    parts: [{
                        text: `You are a helpful and friendly assistant. summarize the movie in plain text only, no bolding or stars: ${question}`
                    }]
                }]
            })
        });

        const data = await response.json();
        
        const output = data.candidates?.[0]?.content?.parts?.[0]?.text || "I didn't understand.";

        result.textContent = output;

    } catch (error) {
        console.error("Error:", error);
        result.textContent = "Network Failed";
    }
}