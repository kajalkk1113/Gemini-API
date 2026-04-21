const API_KEY = "AIzaSyCVGfTHQO7lkrrRj_sDBWWtLsIPLjUzvX4";

const URL = `https://generativelanguage.googleapis.com/v1beta/models/gemini-3-flash-preview:generateContent?key=${API_KEY}`;

async function getAffirmation() {
  box.textContent = "Generating...";

  try {
    const response = await fetch(URL, {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        contents: [
          {
            parts: [
              {
                text: "Give me a short unique positive affirmation in plain text only and no bolding or stars"
              }
            ]
          }
        ]
      })
    });

    const data = await response.json();
    console.log(data); 

    const output =
      data.candidates?.[0]?.content?.parts?.[0]?.text ??
      "No affirmation found";

    box.textContent = output;

  } catch (error) {
    console.error(error);
    box.textContent = "API error";
  }
}


document.addEventListener("DOMContentLoaded", getAffirmation);
