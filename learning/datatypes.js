// //Datatype conversion confusion

// let value = 22;
 
// console.log(typeof value);

// let checkNumber = Number(value);

// console.log(typeof checkNumber);

// console.log(checkNumber);


// let isLoggedIn = "1";

// let checkValue = Boolean(isLoggedIn);

// console.log(checkValue);


// let userName = 33;

// let checkValue1 = String(userName);

// console.log(checkValue1);
// console.log(typeof checkValue1)

// const id = Symbol("123");

// const anotherID = Symbol ("123");

// console.log(id == anotherID);


//Primitive Data types

// 7types : String, Number, Boolean, Null, Undefined, Symbol, BigInt

// Reference type (Non Primitive)

// Array, Objects, Functions


// const bigNumber = 232342342343423n;

// console.log(BigInt)


// let myArray = ['Abid','Ali','MAlik','Umar'];

// console.table(myArray);

// let myObj = {
//     userName: 'Abid Malik',
//     gmail: 'malikabidzz0306@GMAIL.COM',
//     age: 19
// }

// console.table(myObj)

// const myFunction = function(){
//     console.log('Hello World');
// }

// myFunction()

// Stack (Primitive) Heap (Non-Primitive)

let myYotubeMain = "codewithBot";

let anotherName = myYotubeMain;

anotherName = "codewithBot2";

console.log(anotherName);
console.log(myYotubeMain);

let userOne = {
    Name: "Abid Malik",
    Age: 19,
    class: "12th",

}

let userTwo = userOne;

userTwo.Name = "Ali";

console.log(userTwo);
console.log(userOne);
