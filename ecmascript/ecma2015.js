//! =======================================
// Part 2 of Modern Javascript
//! =======================================

//* =======================================
//* Object Properties -Modern Javascript
//* =======================================

// const name = "Manzoor";
// const age = 19;

// traditional way
// const person = { name: name, age: age };

// using shorthand notation for object property
// const person = { name, age };
// console.log(person);
// Instead of specifying name: name and age, you can use simply name and age directly
// within the object literals, thanks to ES6 to shorthand property notation.

//* Destructuring Arrays:
/* Destructuring is a javascript expression that make it possible to unpake value 
from arrays or properties from objects, into distinct variables.
That is, we can extract data from arrays and objects and assign them to variable.*/

//? Extracting Specific Elements:
// const numbers = [10, 20, 30];
// const first = numbers[0]; // Traditional way
// const [first, second, third] = numbers;
// console.log(second);

//? Also can Ignore the Elements
// const [, , third] = numbers;
// console.log(third);

// Interview Question:
//! Write a program to swap two number without using 3rd variable?

// a = 10;
// b = 30;
// Mostly will do using 3rd variable
// let c = b; // c=30
// b = a; // b=10
// a = c; // a=30

// console.log(a, b);

// swap Without using 3rd variable
// [a, b] = [b, a];
// console.log(a, b);

//* Destructing Objects:
// const user = { name: "Manzoor", age: 19 };

//? Extracting properties
// const myName = user.name;
// console.log(myName);

// const { name, age } = user;
// console.log(name, age);

//* Renaming Properties:
// const { name: fullName, age } = user;

// Rename "name" to "fullName"
// console.log(fullName);

//* =======================================
//* Spread Operator -Modern Javascript
//* =======================================
// Javascript ES6 introduced spread operator. The syntax is three dot(...) followed
// by array or iterable.

//? 1. Coping an Array:
// const fruits = ["Apple", "Mango", "Orange", "banana"];
// let newFruits = [...fruits];
// console.log(newFruits);

//? 2. Concatenating Array / Combining Array:
// const numbers1 = [1, 2, 3, 4];
// const numbers2 = [4, 5, 6];
// const newNumbers = [...numbers1, ...numbers2];
// console.log(newNumbers);

//? 3. Adding Elements to Existing Array:
// const fruits = ["Apple", "Mango", "Orange", "Banana"];
// fruits.push("guava", "grapes"); // Traditional way
// fruits.push(...["guava", "grapes"]); // give same result
// console.log(fruits);

//! One more UseCase
//? In Javascript, When you spread the string using the spread syntax (...), It
// convert it into an array of its individuals characters.

//? Traditional way
// const country = "PAKISTAN";
// console.log(country.split(""));

//? New way of doing it
// const country = "PAKISTAN";
// console.log([...country]);

//* =======================================
//* Rest Parameter -Modern Javascript
//* =======================================

//? The rest parameter syntax allows a function to accept an indefinite number of
// arguments as an array. Providing a more flexible way to work with functions
// that can accept varying numbers of arguments.

//? Traditional way of doing it
// const sum = (a, b, c) => {
//   return a + b + c;
// };

//? With rest parameter:
// const sum = (a, b, ...numbers) => {
//   console.log(typeof numbers);
//   return numbers.reduce((accum, curVal) => (accum = accum + curVal), 0);
// };
// console.log(sum(1, 2, 3, 4, 5, 6, 7, 8, 9, 10)); //6

// TODO NOTE:
// A Function definition can only hav one parameter, and the rest parameter must
// be the last parameter in the function definition.
// function wrong1(...one, ...wrong){}
// function wrong2(...wrong, arg2, arg3){}
