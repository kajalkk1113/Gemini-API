const API_KEY = import.meta.env.VITE_API_KEY;
const URL = `https://generativelanguage.googleapis.com/v1beta/models/gemini-2.5-flash:generateContent?key=${API_KEY}`;
let btn = document.getElementById("jokeBtn");
let jokeText = document.getElementById("jokeText");

btn.addEventListener("click", getJoke);

async function getJoke() {
  jokeText.textContent = "Generating... 😂";

  const styles = [
    "coding joke", "dad joke", "animal joke", 
    "space joke", "food joke", "knock-knock joke",
    "short pun", "dark humor joke"
  ];
  
  const randomStyle = styles[Math.floor(Math.random() * styles.length)];

  try {
    const response = await fetch(URL, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        contents: [{
          role: "user",
          parts: [{
            text: `Tell me a unique short ${randomStyle}. Do not repeat common jokes.`
          }]
        }]
      })
    });
    
    const data = await response.json();

    const output =
      data.candidates?.[0]?.content?.parts?.[0]?.text ||
      "No joke found 😅";

    jokeText.textContent = output;

  } catch (error) {
    console.error("Error:", error);
    jokeText.textContent = "API error ";
  }
}








 
  
