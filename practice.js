


//destructuring
let user = {name:"kajal",age:20};
let {name,age}=user;
console.log(user);

//spread operator
let arr = [1,2]
let arr2 = [...arr ,3,4]
console.log(arr2);


// rest operator
function sum(...nums){
    return nums.reduce((a,b)=>a+b)
}
console.log(sum(1, 2, 3, 4));


// default parameters
function greet(name="guest"){
    console.log(name);
}
greet()


// optional chaining
let User = {};
console.log(User?.address?.city);


// Nullish Coalescing
// let val = null ?? "default";
// console.log(val);


// setTimeout(()=>console.log("hello"),2000)


function greetUser(name, cb){
    let message = "Hello " + name;
    cb(message);
}

greetUser("Kajal", (msg) => {
    console.log(msg);
});

let promise = new Promise((resolve, reject) => {
    let success = true;

    if (success){
        resolve("data succesfull")
    }
    else{
        reject("error")
    }
})

promise.then((data)=>{
    console.log(data);
})

promise.catch((err)=>{
    console.log(err);
    
})

promise.finally(()=>{
    console.log("Done");
})


fetch("https://jsonplaceholder.typicode.com/posts")
    .then(res => res.json())
    .then(data => console.log(data));

    const myPromise = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve("Done after 2 seconds");
    }, 2000);
});

myPromise.then(res => console.log(res));


Promise.resolve(5)
    .then(num => num * 2)
    .then(num => num + 3)
    .then(result => console.log(result));


    //callback 
    function greet(name, callback) {
    setTimeout(() => {
        console.log("Hello " + name);
        callback();
    }, 2000);
}

greet("Kajal", () => console.log("Done"));


const user = {};
console.log(user?.address?.city || "Not Available");


const user = { name: "Kajal", age: 20 };
const { name, age } = user;

console.log(name, age);



const API_KEY = "YOUR_API_KEY";

async function generateText() {
    const res = await fetch(`https://generativelanguage.googleapis.com/v1beta/models/gemini-1.5-flash:generateContent?key=${API_KEY}`, {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify({
            contents: [{
                parts: [{ text: "Write a short joke" }]
            }]
        })
    });

    const data = await res.json();
    console.log(data);
}
generateText();
