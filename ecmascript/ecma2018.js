//* ===========================================
//* ECMAscript Features (2018)
//* ===========================================

//? List of new useful features added in ES8
// Rest/Spread properties
// Promise.prototype.finally()

//* ===========================================
//  Rest/Spread properties
//* ===========================================

//? ES6 Introduce the concept of rest element when working with array destructing.
// const number = [1, 2, 3.4, 5, 6, 7, 8];
// const [first, second, ...third] = number;
// console.log(third);

// ES2018 introduced same but for objects

//? Object and Rest operator
// const student = {
//   age: 19,
//   name: "fazal",
//   isStudent: true,
// };

// const { age, ...others } = student;
// console.log(others);

//? Object and Spread operator
const obj1 = { a: 10, b: 20, c: 50 };
const obj2 = { c: 30, d: 40 };

const newObject = { ...obj1, ...obj2 };
console.log(newObject);
