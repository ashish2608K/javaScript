/*🚀 Project: Smart Shopping Cart Discount System
Goal:
Create a JavaScript program that simulates a simple e-commerce shopping cart.
Your program should store customer information, calculate the cart price,
apply discounts based on conditions, and print the final bill.*/

const customerName = "Komal";
const isPremiumMember = true;

const productName = "Trekking Shoes";
const productPrice = 10000;
const quantity = 2;

const totalPrice = (productPrice*quantity);
let discountPercentage = 0;


if (isPremiumMember===true){
    discountPercentage = 20;
}

else if(isPremiumMember!=true && totalPrice>=5000){
    console.log("Give 10% discont");
}

else{
    console.log("No discount");
}

const discountAmount = totalPrice*(discountPercentage/100);
const finalPrice = totalPrice - discountAmount;

// Bill print
console.log("========== COLUMBIA ==========")
console.log("Customer Name:",customerName);
console.log("Product :",productName);
console.log("Price:",productPrice);
console.log("Quantity:",quantity);
console.log("Cart Total:",totalPrice);
console.log("Primum member:",isPremiumMember);
console.log("Discount:",discountAmount);
console.log("Final Price:",finalPrice);
console.log("Thank you for Shopping")
console.log("=============================")



