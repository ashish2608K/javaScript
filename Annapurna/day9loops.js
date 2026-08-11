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


        if (w.list == "TOP 5") {
            console.log(w.list)
        }
    }

}

youGoDdamanRight();



// FILTER() 🧠 Remember array.filter(item => condition)

const ages = [12, 18, 25, 16, 30, 14, 22];
const result = ages.filter(ages => ages >= 18);
console.log(result);

const products = [
    { name: "Keyboard", price: 2500 },
    { name: "Mouse", price: 800 },
    { name: "Monitor", price: 150400 },
    { name: "Headphones", price: 3000 }
];

const expensiveProducts = products.filter(products => products.price >= 3000)
console.log(expensiveProducts);

/* 
Next, we'll learn find().

The difference is very important:

filter() → give me ALL matching items
find()   → give me the FIRST matching item

For example:

filter → "Give me all products over ₹3000"
find   → "Find me the product named Monitor"
*/

// filter() → select items
// find()   → find ONE item
// map()    → transform EVERY item

// find()

const players = [
    {
        name: "Pedri",
        club: "Barcelona",
        number: 8
    },
    {
        name: "Yamal",
        club: "Barcelona",
        number: 19
    },
    {
        name: "Raphinha",
        club: "Barcelona",
        number: 11
    },
    {
        name: "Haaland",
        club: "Manchester City",
        number: 9
    }
];

// find()
const jerseyNumber = players.find(players => players.number === 9);
console.log(jerseyNumber.name);
console.log(jerseyNumber.number);

// map()
const playersName = players.map(player => player.name + " plays for " + player.club);
console.log(playersName);

const computerProducts = [
    { name: "Keyboard", price: 2500 },
    { name: "Mouse", price: 800 },
    { name: "Monitor", price: 15000 },
    { name: "Headphones", price: 3000 }
];

const discountedProducts = computerProducts.map(product => ({
    name: product.name,
    price: product.price,
    discountedPrice: product.price - (product.price * 0.10)
}));

console.log(discountedProducts);





for ( let i = 1; i <=3000; i++ ){
    console.log("I love you komu ",i);
}

