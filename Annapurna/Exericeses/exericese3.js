/*
🚀 Project: Movie Ticket Price Calculator

🎯 Goal:
Create a function that calculates the ticket price based on age.

Function Name:
calculateTicket(age)

Rules:

If age is less than 12:
Return "Ticket Price: ₹100"

If age is between 12 and 59:
Return "Ticket Price: ₹250"

If age is 60 or above:
Return "Ticket Price: ₹150"

Example:

const result = calculateTicket(20);

console.log(result);

Expected Output:
Ticket Price: ₹250
*/

function calculateTicket(age){
     if (age<12){
         return "Ticket Price: ₹100"
     }

     else if (age>=12 && age<=59){
         return "Ticket Price: ₹200"
    }

    else if (age==60 || age>60){
        return"Ticket price: ₹250"
    }
}

const result = calculateTicket(20);

console.log(result);

function plus(a,b){
  return a+b;

}
const answer = plus(2,5);
console.log(answer);