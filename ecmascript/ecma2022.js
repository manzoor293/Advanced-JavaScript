//* ===========================================
//*  ECMASCRIPT FEATURE 2022
//* ===========================================

// Lists of new useful features added in ES8👇
// .at() function for indexing
// object.hasOwn(obj, propKey)

//* ===========
//*  .at()
//* ===========

/* The .at() method introduced in ES2022 has simplified this process. In case of 
positive indexing, .at() work the same as the square bracket. But for negative indexing, 
the .at() method allow starting the iteration from the end */

// const array = [1, 2, 3, 4, 5, 6, 7];
// console.log(array[array.length - 1]);
// console.log(array[-1]); // undefined
// console.log(array.at(-1));

// Todo Note DataType supporting this function
// Array
// String
// All types array classes : Uint8Array etc.

//* ===========================================
//  Object.hasOwn(obj, propKey)
//* ===========================================

//? Object.hasOwn is the intended alternative method for the
// object.prototype.hasOwnProperty method. Although Object.prototype.hasOwnProperty
// has been in javascript specification for quite time, it has some drawbacks.

// const book = {
//   name: "Js world best course",
//   author: "Manzoor Ahmad",
// };

// console.log(book.hasOwnProperty("name"));
// console.log(book.hasOwnProperty("price"));

// USING Object.hasOwn method
// console.log(Object.hasOwn(book, "name"));

//! Issues with hasOwnProperty
//? Issue 01: Doesn't work for object created using
// Object.create(null);

const student = Object.create(null);
console.log(typeof student);
student.name = "Manzoor";
// console.log(student.hasOwnProperty("name"));
console.log(Object.hasOwn(student, "name"));
