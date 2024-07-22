const userId = 13123;
let userName = "Abid Malik";
var userEmail = "malikabid@gmail.com";
userCity = "Lahore";
let userState;

//update values and print
// userId = 13000; Not Allowed change const value
userName = "Ali Malik";
var userEmail = "Ali@gmail.com";
userCity = "Islamabad";

console.log("userID:", userId);
console.log("userName:", userName);
console.log("userEmail:", userEmail);
console.log("userCity:", userCity);

console.table([userId,userName, userEmail, userCity,userState]);
