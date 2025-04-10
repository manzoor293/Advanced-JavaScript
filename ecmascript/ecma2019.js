//* ===========================================
//  ECMASCRIPT FEATURE 2019
//* ===========================================

//? List of new useful features added in ES8
// Array.prototype.{flat, flatMap}
// Object.fromEntries()
// String.prototype.{trimStart, timEnd}
// Symbol.prototype.description
// Optional catch binding

//* ===========================================
//  Array.flat & Array.flatMap
//* ===========================================
//? flat is a new array instance method that can create a one-dimensional array
// from a multidimensional array. (nested array into a single array)

const nestedArray = [1, 2, [3, 4], 5];
const nestedArray1 = [1, [2, [3, 4]], 5];

const flattenedArray = nestedArray.flat();
const flattenedArray1 = nestedArray1.flat(-2);

console.log(flattenedArray);
console.log(flattenedArray1);

//? flatMap() is a new array instance method that combine flat with map(). It's
// useful when calling a function that return an array in the map() callback, but
// you want your resulted array to be flat.
const arr = ["My name", "is manzoor", "ahmad"];

const newArr = arr.flatMap((curVal) => curVal.split(" "));

console.log(newArr);
 