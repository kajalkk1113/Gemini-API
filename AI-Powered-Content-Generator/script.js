const API_KEY = import.meta.env.VITE_API_KEY;
const URL = `https://generativelanguage.googleapis.com/v1/models/gemini-2.5-flash:generateContent?key=${API_KEY}`;
console.log(import.meta.env);
console.log(import.meta.env.VITE_API_KEY);


//Ask me anything
document.getElementById("askBtn").addEventListener("click", async function () {

let input = document.getElementById("askInput").value;
let result = document.getElementById("askResult");

result.textContent = "Thinking...";

try {
    const response = await fetch(URL, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
            contents: [{
                parts: [{
                    text: `Answer this question in simple way in short with example in plain text only not using bold or stars:\n${input}`
                }]
            }]
        })
    });

    const data = await response.json();
    const output = data.candidates?.[0]?.content?.parts?.[0]?.text || "Error";

    result.textContent = output;

} catch (error) {
    result.textContent = "Network Error";
}

});


//summarizer
document.getElementById("sumBtn").addEventListener("click", async function () {

let input = document.getElementById("sumInput").value;
let result = document.getElementById("sumResult");

result.textContent = "Thinking...";

try {
    const response = await fetch(URL, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
            contents: [{
                parts: [{
                    text: `Summarize this text in short:\n${input}`
                }]
            }]
        })
    });

    const data = await response.json();
    const output = data.candidates?.[0]?.content?.parts?.[0]?.text || "Error";

    result.textContent = output;

} catch (error) {
    result.textContent = "Network Error";
}

});


//idea generator
document.getElementById("ideaBtn").addEventListener("click", async function () {

let input = document.getElementById("ideaInput").value;
let result = document.getElementById("ideaResult");

result.textContent = "Thinking...";

try {
    const response = await fetch(URL, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
            contents: [{
                parts: [{
                    text: `Give 3 creative ideas in short with in plain text only not using bold or stars:\n${input}`
                }]
            }]
        })
    });

    const data = await response.json();
    const output = data.candidates?.[0]?.content?.parts?.[0]?.text || "Error";

    result.textContent = output;

} catch (error) {
    result.textContent = "Network Error";
}

});


//definition finder
document.getElementById("defBtn").addEventListener("click", async function () {


let input = document.getElementById("defInput").value;
let result = document.getElementById("defResult");

result.textContent = "Thinking...";

try {
    const response = await fetch(URL, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
            contents: [{
                parts: [{
                    text: `Define this in short, simple words with example in short with example in plain text only not using bold or stars:\n${input}`
                }]
            }]
        })
    });

    const data = await response.json();
    const output = data.candidates?.[0]?.content?.parts?.[0]?.text || "Error";

    result.textContent = output;

} catch (error) {
    result.textContent = "Network Error";
}

});