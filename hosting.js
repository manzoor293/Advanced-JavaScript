//* Hosting is a JavaScript mechanism where variables and functions
// are moved to the top of their scope before code execution.
// This means that no matter where functions and variables are declared,
// They are moved to the top of their scope regardless of where their
// scope is global or local.

// todo when a function declaration is hoisted, its entire
// definition is hoisted, (including the function body) is moved
// to the top of its containing scope during the creation phase.
// This means that you can call a function before it's actually
// declared in the code and it will still work as expected.

// console.log(myvar);
// greet();

// let myvar = 10;
// // var myvar = 10;
// function greet() {
//   console.log(
//     "Welcome if you are reading this, Do not forget you are awesome!"
//   );
// }

// console.log(myvar);
// greet();

//* ===============
//* Lexical Scoping:
//* ===============
//? Lexical scoping is a way of managing variable access in javascript
// based on the physical structure of the code.

// key Concept: The scope of a variable is determined by its
// position in the source code, specifically where it is declared.

// Lexical scoping in javascript is like a set of rules that
// determined where a variable can be used in your code. It follow
// the physical structure of your code. So if a variable is declared
// inside a function or bock, it can usually be used only within in
// that function or block.

// var a = 5;
// var b = 10;
// What will be the value of a?

//* ========================
//* Scope Chaining:
//* ========================
//? Definition: Scope chaining is the process by which javascript,
// when looking for the value of a variable, check the current scope and then look
// in the outer scopes until it find the variable or reach  the global scope.

// Local vs Global variable
// const globalVariable = "I am a global variable";

// function myFunction() {
//   // function scope
//   const functionVariable = "I am a function variable";

//   // block scope
//   if (true) {
//     const blockVariable = "I am a block variable";
//     console.log(blockVariable);
//     console.log(functionVariable);
//     console.log(globalVariable);
//   }

//   console.log(blockVariable);
// }
// myFunction();


