/*🚀 Project: Student Information & Grade Calculator
🎯 Goal
Create a program that stores a student's information, 
calculates their total marks, average, percentage, and checks whether
they passed*/

let moniter = "ashish";
const age = 19;
const course = "Anthropology";
const isStudentActive = true;

const math = 100;
const english = 100;
const science = 100;
const javaScript = 100;
const hTML = 100;

const total = math + english + science + javaScript + hTML;
const average = total/5;
const percentage = (total/500)*100;

console.log("moniter Name:", moniter);
console.log("Age:", age);
console.log("Course:", course);


if (percentage >= 40) {
    console.log("Pass");
} else {
    console.log("Fail");
}

console.log("Maths :",math)
console.log("English :",english)
console.log("Science :",science)
console.log("javaScript :",javaScript)
console.log("HTML:",hTML)

console.log("Total:", total);
console.log("Average:", average);
console.log("Percentage:", percentage + "%");