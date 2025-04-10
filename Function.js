// Function Expression
// A function exprssion is a way to define function as a part of an expression.
// It can either name or Anonymous. If its named, it become a named function expression

// var result = function sum(a, b) {
//   return a + b;
// };
// console.log(result(10, 30));

//==========================
// Anonymous Function
//==========================
// An Anonymous function is a function without a name. It can be Created by
// // using either a function Expression or function declaration without a specified name;
// var result = function sum(a, b) {
//   return a + b;
// };
// console.log(result(13, 17));

// IIFE- Immediate Invoked Function Expression
// An IIFE is a javascript function that is defined and executed immediately
// after its Creation. It is way to create a Selft-contained block of code that
// does't interfere with surrounded code and executes immediately.

//Syntax
(function () {
  // Code to be Executed
})();

// (function (a, b) {
//   console.log(a + b);
// })(10, 60);

// var result = (function (a, b) {
//   console.log(a + b);
//   return a + b; // when we use function expression then we use return statment
// })(10, 60);
// console.log("The sum of two number is: " + result);

// Let Keyword : The let keyword is used to declare variable with block Scope variable.
// Variable declare with let are mutable, meaning their value are resigned

// let myname = "Manzoor Ahmad";
// if (true) {
//   let myname = "Faheem";
//   console.log(myname);
// }
// // myname = "Shabir Ahmad";
// console.log(myname);  // Because let can be reassigned but it is a block Scope variable

// Const keyword: The Const keyword is used to declare variable with block Scope.
// But Once a value is assigned to a const variable , it can not be reassigned.
// Const variable are immutabel.

// const myname = "Manzoor Ahmad";
// if (true) {
//   const myname = "Faheem";
//   console.log(myname);
// }
// myname = "Shabir Ahmad";
// console.log(myname);

// Template string, also known as template literal. Provide convenient and flexible
// way to create string in JavaScript. The string are enclosed in backticks(``) and
// its syntax is ${firstname}

// let firstname = "Manzoor";
// let lastname = "Ahmad";
// let fullname = `${firstname}  ${lastname}`;
// console.log(fullname);

// String Interpolation: Template String supports string interpolation,
// Allowing you to embed Expression directly within the string. Interpolated
// expression are enclosed in ${}.

let age = 20;

// String Interpolation with variable
// let message = `I am ${age} year old`;
// console.log(message);

//Multiline-string: Template literals make it easy to create multi-line code
// without concatenating or escaping any variable

// let multiLineString = `This is multi-line
// String using Template literals.
// Its much cleaner and easier to read.`;
// console.log(multiLineString);

// // Practise
// let num = 5;
// console.log(`5 * ${num} = ${num * 5}`);

// // Default  Parameter
// function sum(a = 30, b = 23) {
//   return a + b;
// }
// console.log(sum());

// Fat Arrow Function : This is also known as arrow function , where introduced
// a concise way to write Annonymous Function

// const sum = (a, b) => {
//   let result = `The sum of ${a} and ${b} is ${a + b}`;
//   console.log(result);
// };
// sum(8, 5);

//OR also written in one line code //

// const sum = (a, b) =>
//   console.log(`The Multiplication of ${a} and ${b} is ${a * b}.`);
// sum(12, 5);

// // If there is only one parameter , the parenthesis around parameter list can be omited.
// const square = (a) => console.log(`The Square of ${a} is ${a * a}.`);
// square(5);

// // If there is no parameter, use an empty set of parenthesis.
// let great = () => console.log(`Please like me.`);
// great();

// Write a javascript function Calculator that take two numbers and an operator
// as a parameter and return the result of the Operation. The function should
// support the addition, subtraction, multiplication and division.

// function calculator(a, b, operator) {
//   let result;
//   if (operator == "+") {
//     result = a + b;
//   }
//   if (operator == "-") {
//     result = a - b;
//   }
//   if (operator == "*") {
//     result = a * b;
//   }
//   if(operator == '/'){
//     result = a/b;
//   }
//   return result;
// }
// console.log(calculator(5, 6, "+"));
// console.log(calculator(5, 6, "-"));
// console.log(calculator(5, 6, "*"));
// console.log(calculator(5, 6, "/"));

// Do the same result with a Switch case
// let result;
// const calculator = (a, b, operator) => {
//   switch (operator) {
//     case "+":
//       result = a + b;
//       break;

//     case "-":
//       result = a - b;
//       break;

//     case "*":
//       result = a * b;
//       break;
//     case "/":
//       if (b == 0) {
//         return "Zero is not allowed";
//       } else {
//         result = a / b;
//         return result;
//       }
//       break;

//     case "%":
//       result = a % b;
//       break;

//     default:
//       result = "No Operator match";
//       break;
//   }
//   return result;
// };
// console.log(calculator(8, 9, "%"));
// console.log(calculator(6, 7, "*"));
// console.log(calculator(29, 49, "+"));

// Reverse String:
// Write a programe to reverse a given string

function isreverse(str) {
  let reverse = "";
  for (let char = str.length - 1; char >= 0; char--) {
    reverse = reverse + str[char];
  }
  return reverse;
}
console.log(isreverse("Manzoor Ahmad"));

// Palindrome Check:
// Create a function to check the given string is a Palindrome (read same
// backward as forward)

const isPalindrome = (str) => {
  let reverse = "";
  for (let char = str.length - 1; char >= 0; char--) {
    reverse = reverse + str[char];
  }
  if (str == reverse) {
    return true;
  } else {
    return false;
  }
};
console.log(isPalindrome("level"));
