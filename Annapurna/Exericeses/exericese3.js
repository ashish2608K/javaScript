// const checkEligibility = function (name, age, runningTime) {

//     if (age <= 20 && runningTime <= 15) {
//         return "Candidate: " + name + "\nStatus: Eligible";
//     } else {
//         return "Candidate: " + name + "\nStatus: Not Eligible";
//     }

// };

// const result = checkEligibility("Ashish", 20, 13);

// console.log(result);

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

