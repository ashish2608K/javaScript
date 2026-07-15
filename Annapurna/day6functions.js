/* What is a Function?
Simple definition:

A function is a reusable block of code that performs a specific task.

Think of a function as a machine.

You give it input → it does some work → it may give output.

Example:
Input
  ↓
Function
  ↓
Output
Real website examples 🌐

You click a button:

Click Login Button
        ↓
loginUser() function runs
        ↓
Checks username/password
        ↓
Shows dashboard*/

// function interoduction(){
//     console.log("i am ashish")
//     console.log("i am a Poor progarmmer")
//     console.log("i want to join paraSH");
    
// }

// interoduction();

function blahbalh(name,age,profession){
    console.log("My Name is " + name);
    console.log("I am " + age + " years Old")
    console.log("I am a " + profession);
}

blahbalh("komal",29,"Anthropologist")

// What is return?
// Simple definition:
// return sends a value back from a function to the place where the function was called.


// Function Expressions & Arrow Functions
/* 1. Function Expression

Normal function:

function add(a,b){
    return a+b;
}

Function expression:
const add = function(a,b){
    return a+b;
};
Both do the same thing.
The difference is that now the function is stored inside a variable.*/


/*2. Arrow Function (Very important 🔥)

Modern style:

const add = (a,b) => {
    return a+b;
};

Same as:

function add(a,b){
    return a+b;
}
Why frontend developers use arrow functions?

Because in React you will write things like:

const Button = () => {
}
or:
const handleClick = () => {
    console.log("Button clicked");
}*/
