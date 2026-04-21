const API_KEY = "AIzaSyBi1H4_Sx7UlAFjL1_hHQZQ0OIa3jRUtGM";
const URL = `https://generativelanguage.googleapis.com/v1beta/models/gemini-3-flash-preview:generateContent?key=${API_KEY}`;

let userInput = document.getElementById("user-input");
let btn = document.getElementById("send-btn");
let AiText = document.getElementById("AiText");

btn.addEventListener("click", getData);

async function getData() {
    const question = userInput.value; 
    btn.disabled = true;
    
    if (!question) return; 

    AiText.textContent = "Soch raha hoon... 🤔";
    userInput.value = ""; 

    try {
        const response = await fetch(URL, {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({
                contents: [{
                    role: "user",
                    parts: [{
                        text: `You are a helpful and friendly assistant. Answer this question in a very simple ,short and easy way  with real life example in plain text only, no bolding or stars: ${question}`
                    }]
                }]
            })
        });

        const data = await response.json();
        
        const output = data.candidates?.[0]?.content?.parts?.[0]?.text || "Maaf kijiye, mujhe samajh nahi aaya.";

        AiText.textContent = output;

    } catch (error) {
        console.error("Error:", error);
        AiText.textContent = "Network mein kuch gadbad hai ❌";
    }finally {
        btn.disabled = false;
    }
}