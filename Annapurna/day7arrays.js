/*What is an Array?
Simple definition:

An array is a variable that stores multiple values in a single place.

Instead of writing:

const student1 = "Ashish";
const student2 = "Komal";
const student3 = "Rahul";
const student4 = "Priya";

We write:

const students = ["Ashish", "Komal", "Rahul", "Priya"];

Now one variable stores many values.*/

// arrays can store anything

const furits = ["KOMAL", "mango", "watermelon", "strawberrys"];
const numbera = [8448110734];
const answers = [true, false, true];
// const data =[
//     "komal",
//     8,
//     true
// ]

function data() {
    const footballClubs = ["Barcelona", "Barcelona", "Barcelona", "always Barcelona"];
    const programmingLanguages = ["JavaScript", "HTML", "CSS", "React"]
    const trecks = ["Annapurna", "Rupin pass", "Hampta pass"]

    console.log(footballClubs);
    console.log(programmingLanguages);
    console.log(trecks);

}

data();

const footballClubs = ["Barcelona", "Barcelona", "Barcelona", "always Barcelona"];
const programmingLanguages = ["JavaScript", "HTML", "CSS", "React"]
const trecks = ["Annapurna", "Rupin pass", "Hampta pass"]

console.log(footballClubs);
console.log(programmingLanguages);
console.log(trecks);
console.log(footballClubs[3]); // this is what we call Array Indexing 


// 📚 Topic 2: Array Indexing

// This is where arrays become useful.

// What is an Index?
// Simple Definition

// An index is the position of an element inside an array.

// Imagine a row of lockers:

// ┌──────────┬──────────┬──────────┬──────────┐
// │Barcelona │Liverpool │ Arsenal  │ Chelsea  │
// └──────────┴──────────┴──────────┴──────────┘
//      0           1          2          3

// Notice something?

// 👉 JavaScript starts counting from 0, not 1.

// This is called Zero-Based Indexing.


// Example
// const footballClubs = [
//     "Barcelona",
//     "Liverpool",
//     "Arsenal",
//     "Chelsea"
// ];

// The indexes are:

// Value          Index

// Barcelona   →   0
// Liverpool   →   1
// Arsenal     →   2
// Chelsea     →   3

// Accessing Values
// We use:
// arrayName[index]

// Example:
// console.log(footballClubs[0]);

// Output:
// Barcelona
// console.log(footballClubs[1]);

// Output:
// Liverpool

// Arrays can store numbers too
// const marks = [95, 88, 76, 100];

// Indexes:

// 95  → 0
// 88  → 1
// 76  → 2
// 100 → 3
// console.log(marks[2]);

// Output:
// 76


// 📚 Topic 2: Understandiung Array Elements 

/*
const footballClubs = [
    "Barcelona",
    "Liverpool",
    "Arsenal"
];

footballClubs[1] = "Real Madrid";

console.log(footballClubs);

Output:

[
  "Barcelona",
  "Real Madrid",
  "Arsenal"
]

Only the value at index 1 changed.

Another Example
const numbers = [10, 20, 30];

numbers[0] = 100;

console.log(numbers);

Output:

[100, 20, 30]
*/

/*
🎯 Your Practice Challenge

Without looking at the answer, write a program that:

1. Create an array called superheroes.

["Batman", "Superman", "Iron Man", "Spider-Man"]

2. Replace "Iron Man" with "Captain America".

3. Print the whole array.

4. Print only the superhero at index 2.
*/


const superheroes = ["Batman", "Superman", "Iron Man", "Spider-Man"];
superheroes[2] = "Deadpool";
console.log(superheroes);
console.log(superheroes[2]);


/*
Topic: .length

You've already seen it once, but now let's understand it properly.

What is .length?
Definition

.length tells you how many elements are inside an array.

Example:

const fruits = [
    "Apple",
    "Banana",
    "Mango",
    "Orange"
];

console.log(fruits.length);

Output:

4

There are 4 items.

Don't confuse length with the last index.

Example:

const fruits = [
    "Apple",
    "Banana",
    "Mango",
    "Orange"
];
Index	Value
0	Apple
1	Banana
2	Mango
3	Orange
Length = 4
Last Index = 3
Rule to remember
Last Index = length - 1
Example
const movies = [
    "Interstellar",
    "Inception",
    "Batman"
];

console.log(movies.length);

Output:

3

Last index:

3 - 1 = 2

Which is:

movies[2]

↓

Batman */



