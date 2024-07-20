// var city = prompt("Enter your city name");

// var client = "Welcome to " + city;

// console.log(client);

// var signalcolor = prompt("what is your signal color");

//         switch (signalcolor) {
//             case "red":
//                 message = "Stop! Do not proceed.";
//                 break;
//             case "yellow":
//                 message = "Caution! Prepare to stop or proceed with care.";
//                 break;
//             case "green":
//                 message = "Go! You may proceed.";
//                 break;
//             default:
//                 message = "Invalid input. Please enter either 'red', 'yellow', or 'green'.";
//         }

//         console.log(message)

var a = 4;
if (++a === 5) {
  alert("given condition for variable a is true");
}
var b = 82;
if (b++ === 83) {
  alert("given condition for variable b is true");
}
var c = 12;
if (c++ === 13) {
  alert("condition 1 is true");
}
if (c === 13) {
  alert("condition 2 is true");
}
if (++c < 14) {
  alert("condition 3 is true");
}
if (c === 14) {
  alert("condition 4 is true");
}
var materialCost = 20000;
var laborCost = 2000;
var totalCost = materialCost + laborCost;
if (totalCost === laborCost + materialCost) {
  alert("The cost equals");
}
