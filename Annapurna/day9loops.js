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

const treks = ["Annapurna","hampta pass","rupin pass","har ki dun"];

for(let i = 3; i < treks.length; i++){
    console.log(treks[i]);
}

const projects = [
    "Desktop Pet",
    "Pixel Art Website",
    "A Game using Javascript",
    "something unbleivable"
]

for(let i=0; i < projects.length; i++){
    console.log("Project"+(i+1)+": "+projects[i]);
}