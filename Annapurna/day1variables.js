// const accountId = 8587033985;
// let accountEmail = "Komal@hacker.com";
// var accountPassword = "komal";
// let accountCountry = "switzerland"

// accountCountry="Finland"
// const ashishId =  "i love you komal ❤️☺️"

// console.table([accountId,accountEmail,accountPassword,accountCountry]); 
// console.log(ashishId);


// // accountId = 8587033986 not Allowed 
// /*perfer not to use VAR 
// becoz of the issue in block scope and in functional scope*/

let score = "47"
console.log(typeof(score));


let valueInNumber = Number(score)
console.log(typeof(valueInNumber));


// "33" -> 33
// "33wasd" => NaN
// true -> 1; false => 0 





// What is a Variable?
// A variable is a container (box) used to store data so 
// we can use it later in our program.
// Think of it like a labeled box.
// 📦 name → "Ashish"
// 📦 age → 20
// 📦 isStudent → true

// Types of varibales
//1 let is used to create a variable whose value can be changed later
// .Use let when the value may change.

/* 2. const is used to create a variable whose 
value cannot be changed after it is assigned.*/

/*var is the old way of creating variables in JavaScript.var is functional scope
 It can be changed, but it has scope issues, so modern JavaScript developers
 usually avoid using it.var window mai add krtha hai and functions scoped hotha hai*/

/*Easy Memory Trick 🧠
📦 Variable = A box that stores data.
🔒 const = Locked box (can't change)
✏️ let = Editable box (can change)
📦⚠️ var = Old box (works, but avoid using it in modern JavaScript)*/



// Scope ( Global , Block, functional)


// 1. Global
let name = "ashish";

console.log(name);

if (true) {
    console.log(name);
}

function greet(){
    console.log(name);
}

greet();

// 2.function scope
function greet() {
    let message = "Hello";

    console.log(message);
}

greet(); 