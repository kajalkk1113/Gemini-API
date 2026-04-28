// // function greet(name,callback){
// //     setTimeout(()=>{
// //         callback()
// //         console.log("hello",name)
        
// //     },2000)
// // }

// // greet("kajal",()=>console.log("done"))

// //clearInterval,promise.rac,promise.any

// let promise = new Promise((resolve, reject) => {
//     let succes= false;
//     if(succes){
//       resolve("solved") 
//     }else{
//         reject("reject")
//     }
// })

// promise.then((data)=>{
//     console.log(data)
// })

// promise.catch((err)=>{
//     console.log("error : ",err)
// })


const API_KEY ="AIzaSyAdZeUWoQPzOHRZxPllJSI1S4TX2kfDQCA"; 
const URL = `https://generativelanguage.googleapis.com/v1beta/models/gemini-2.5-flash:generateContent?key=${API_KEY}`;
let input = document.getElementById("input")
let btn = document.getElementById("btn");
let result = document.getElementById("result");

btn.addEventListener("click",getData)

async function getData() {
    let question = input.value;
    result.textContent="thinking..."
    try{
        const response =  await fetch(URL,{
            method:"POST",
            headers: { "Content-Type": "application/json" },
            body:JSON.stringify({
                contents:[{
                role:"user",
                parts:[{
                    text:`you are user friendly tell caption to ${question}`
                }]
                }]
            })
        })

        const data = await response.json();
    const output = data.candidates?.[0]?.content?.parts?.[0]?.text || "Error";
        result.textContent=output;
}catch(error){
    console.log("error")
    result.textContent="API error"
}
}