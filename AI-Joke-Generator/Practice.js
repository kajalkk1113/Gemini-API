// let a = [1, 2];
// let b = [3, 4];

// let result = [...a,...b]
// console.log(result);


// function greet(name="guest"){
//     return `hello,${name}`
// }
// console.log(greet());



// let user = {};

// console.log(user?.address?.city);


// let userInput = null;

// console.log(userInput??"Default value");

// setTimeout(()=>{
//     console.log("hello after 2 second");
    
// },2000)


// let promise = new Promise((resolve, reject)=>{
//     setTimeout(()=>{
//         resolve("Done")
//     },2000)
// })

// promise.then(res=>console.log(res))


// Promise.resolve(1)
// .then(num =>{
//     console.log(num);
//     return num+1
// })
// .then(num=>{
//     console.log(num);
//     return num+1
    
// })
// .then(num=>console.log(num));


// async function run(){
//     let res = await Promise.resolve("hello")
//     console.log(res);   
// }
// run()

// fetch("https://jsonplaceholder.typicode.com/users")
// .then(res => res.json())
// .then(data=>{
//     data.forEach(user=>console.log(user.name))
// })


// fetch ("https://jsonplaceholder.typicode.com/users")
// .then(res =>{
//     if(!res.ok){
//         throw new Error("Error")
//     }
//     return res.json();
// })
// .then(data => console.log(data))
// .then(err=> console.log(err))


// let obj = {name:"kajal"};
// let json = JSON.stringify(obj);
// console.log(json);
// let back = JSON.parse(json);
// console.log(back);

// fetch("https://jsonplaceholder.typicode.com/posts", {
//   method: "POST",
//   headers: {
//     "Content-Type": "application/json"
//   },
//   body: JSON.stringify({
//     title: "Hello",
//     body: "World"
//   })
// })
// .then(res => res.json())
// .then(data => console.log(data));


// async function getData(params) {
//     const question = input.value;

//    try{
//     const response = await fetch(URL,{
//         method:"POST",
//         headers:{"Content-Type":"application/json"},
//         body:JSON.stringify({
//             contents:[{
//                 role:"user",
//                 parts:[{
//                     text:"you are user friendly give answer in easy"
//                 }]
//             }]
//         })
//     })

//     const data = await response.json();
//     const output = data.candidates?.[0]?.content?.parts?.[0]?.text ||"failed"

//    } catch(error){
//     console.error("error")
//    }
// }

// setTimeout(()=>{
//     console.log("hello world")
// },3000)



