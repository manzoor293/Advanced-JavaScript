//* -----------------------------------------
//* First-Class Function - it's just a concept
//* -----------------------------------------
// A language features where function are treated as First-Class citizens.
// Function can be assigned to a variable , passed as argument to other functions
// and return from other functions.

//? "A First-Class function" means that function can be treated as values,
// assigned to variable and passed around as argument.

// Function declaration
// function sayHello(name) {
//   return "Hello " + name + "!";
// }

// var greatFunction = sayHello;

// console.log(greatFunction("Manzoor"));

// -----------------------------
// Higher-Order Function
// -----------------------------

//? Definition: A higher-order function is a function that takes one or more
// functions as arguments or returns a function as a result.

// -----------------------------
// Callback Function
// -----------------------------
//? Definition: A callback function is a function that is passed as an argument to
// another function and is executed after the completion of a task.

// function higherOrderFunction(name, callback) {
//   console.log("User input:", name);
//   callback(name);
// }

// // Function to be used as a callback
// function greet(name) {
//   console.log(`Hi I  am ${name}`);
// }

// higherOrderFunction("Manzoor Mahsood", greet);

// *======================================
//  Interview Question
// *======================================

//! Write a program to perform a mathematical operations using callback function and
// two variable in javascript.

// const mathOperation = (x, y, operation) => {
//   return operation(x, y);
// };

// const add = (x, y) => {
//   return x + y;
// };
// const sub = (x, y) => {
//   return x - y;
// };

// console.log(mathOperation(7, 3, add));

// console.log(mathOperation(7, 3, sub));
