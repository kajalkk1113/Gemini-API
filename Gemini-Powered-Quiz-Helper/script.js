const API_KEY = "AIzaSyBi1H4_Sx7UlAFjL1_hHQZQ0OIa3jRUtGM";
const URL = `https://generativelanguage.googleapis.com/v1beta/models/gemini-3-flash-preview:generateContent?key=${API_KEY}`;

let userInput = document.getElementById("input");
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
text: `You are a helpful and friendly assistant.

Create 5 quiz questions based on the topic given by the user.

Rules:
- Each question must be simple and clear
- Give answer immediately below each question
- Do NOT write everything in one paragraph
- Use proper line breaks
- Do NOT use bold, stars, or markdown

Format exactly like this:

Q1: Your question here
Answer: Your answer here

Q2: Your question here
Answer: Your answer here

Q3: Your question here
Answer: Your answer here

Q4: Your question here
Answer: Your answer here

Q5: Your question here
Answer: Your answer here

Topic: ${question}`                    }]
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