/*
📚 Day 9: Loops (for Loop)
Why do we need loops?

Imagine you have an array:

const players = [
    "Pedri",
    "Yamal",
    "Raphinha",
    "Lewandowski"
];

Without loops, you would write:

console.log(players[0]);
console.log(players[1]);
console.log(players[2]);
console.log(players[3]);

This works...

But what if there are 100 players?

Would you write:

console.log(players[0]);
console.log(players[1]);
console.log(players[2]);
...
console.log(players[99]);

❌ No.

This is why loops exist.

A loop tells JavaScript:

"Repeat this task until I tell you to stop."

Think of a Soldier 🪖

Imagine your commander says:

"Do 20 push-ups."

He doesn't say:

Push-up 1
Push-up 2
Push-up 3
...
Push-up 20
He simply says:
Repeat the push-up 20 times.
That's exactly what a loop does. 
*/

// const treks = ["Annapurna","hampta pass","rupin pass","har ki dun"];

// for(let i = 3; i < treks.length; i++){
//     console.log(treks[i]);
// }

// const projects = [
//     "Desktop Pet",
//     "Pixel Art Website",
//     "A Game using Javascript",
//     "something unbleivable"
// ]

// for(let i=0; i < projects.length; i++){
//     console.log("Project"+(i+1)+": "+projects[i]);
// }


const webSerices = [
    {
        name: "Dexter",
        favouriteCharacter: "Dexter",
        list: "TOP 5"
    },

    {
        name: "Breaking Bad",
        favouriteCharacter: "Walter White",
        list: "TOP 5"

    },

    {
        name: "Better Call Soul",
        favouriteCharacter: "Soul Godman",
        list: "TOP 10"
    },

    {
        name: "The Walking Dead",
        favouriteCharacter: "Rick,Shane and daryl",
        list: "TOP 10"
    }
]


function youGoDdamanRight() {
    for (let i = 0; i < webSerices.length; i++) {
        const w = webSerices[i];
        console.log("My Favorite Web Series: " + w.name);

        
    if(w.list=="TOP 5"){
            console.log(w.list)
        }
    }

}

youGoDdamanRight();



// FILTER()

const numbers = [10, 25, 30, 7, 45, 12, 50];
const result = numbers.filter [25,30,45,50]
console.log(numbers);




