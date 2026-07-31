/*What is an Object?
Simple Definition

An object is a collection of related information stored together using key-value pairs.

Think of it like an ID Card.

Your ID card doesn't just have your name.
It has:
Name
Age
Course
University
Roll Number
All these details belong to one person.

Instead of creating many variables:
const name = "Ashish";
const age = 21;
const course = "B.Tech CSE";
const university = "KR Mangalam";

We group them together.
const student = {
    name: "Ashish",
    age: 21,
    course: "B.Tech CSE",
    university: "KR Mangalam"
};

Now student is one object.*/


const trek = {
    name:"Annapurna",
    Country:"Nepal",
    daysToReach:"14-15",
}

console.log(trek);
console.log(trek.name,trek.Country);
console.log(trek.Country);
console.log(trek.daysToReach);


const laptopSpecs = {
    brand: "Hp",
    model: "this laptop have no name it come from future😎",
    ram: "999+GB",
    price: "1000000000000000000000000000000000000000000000000000000000000000000000000000000000000$"
}


console.log(laptopSpecs);
laptopSpecs.ram = "9999+GB";
laptopSpecs.price = "100000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000$"
console.log(laptopSpecs);


const soldier = {
    name:"ashish",
    unit:  "9 PARA SF",
    rank: "Lieutenant"
}

soldier.experience = 5;
soldier.weapon = "Tavor X95";


console.log(soldier);


const footballPlayer = {
    name: "Pedri",
    club: "Barcelona",
    jerseyNumber: 8,
    injured: false
};

console.log(footballPlayer);
delete footballPlayer.injured;
console.log(footballPlayer);


const treksIlove = [
    {
        name:"Annapurna",
        Country:"Nepal",
        days:"14-15"
    },

    {
        name:"Hampta pass",
        Country:"Himachal Pradesh",
        days:"1 week"
    },

    {
        name:"Rupin pass",
        Country:"Uttrakhand-Himachal Pradesh",
        days:"1 week"
    }
]

console.log(treksIlove);
console.log(treksIlove[0].name);
console.log(treksIlove[1].Country);
console.log(treksIlove[2].days);


