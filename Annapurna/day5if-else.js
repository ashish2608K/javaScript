// What is "if" ?
// -if is used to execute some code only when a condition is true
// (If this condition is true, do this)

// What is "else"?
// else runs when the if condition is false.

// Important concept about else if:
// JavaScript checks conditions from top to bottom.
// The moment it finds a condition that is true, it stops checking the remaining conditions.

// Operator	Meaning	Example
//   > greater than 	10 > 5
//   < less than	5 < 10
//   >= greater / equal	18 >= 18
//   <= less / equal	10 <= 20
//   === exactly equal	"JS" === "JS"
//   !== not equal	5 !== 10

// Logical Operators in JavaScript
// There are 3 main logical operators:
// Operator	Name	Meaning
//  &&     	AND	   Both conditions must be true
//  !	      NOT	   Reverses the value
// OR Operator (||) "At least one condition should be true."

const age = 12;

if (age === 20) {
  console.log("you can fight")
}

else {
  console.log("no you can't :(")
}

const userName = "komal";
const passWord = 8587033986;
if (userName==="komal" && passWord===8587033986){
  console.log("Hello",userName)
}

else{
  console.log("check username and password",)
}


