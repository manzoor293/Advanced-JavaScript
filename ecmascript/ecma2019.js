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

// const nestedArray = [1, 2, [3, 4], 5];
// const nestedArray1 = [1, [2, [3, 4]], 5];

// const flattenedArray = nestedArray.flat();
// const flattenedArray1 = nestedArray1.flat(-2);

// console.log(flattenedArray);
// console.log(flattenedArray1);

//? flatMap() is a new array instance method that combine flat with map(). It's
// useful when calling a function that return an array in the map() callback, but
// you want your resulted array to be flat.
// const arr = ["My name", "is manzoor", "ahmad"];

// const newArr = arr.flatMap((curVal) => curVal.split(" "));

// console.log(newArr);

//* ===========================================
//  Object.fromEntries()
//* ===========================================
//? Objects have an entries() method , ES2017
// It return an array containing all the object own properties as
// array of [key, value] pairs.

//? ES2019 introduced a new object.fromEntries() method, which can create a
// a new object from such array of properties.
// const person = { name: "Manzoor", age: 20 };
// const entries = Object.entries(person);
// console.log(entries);

// const newPerson = Object.fromEntries(entries);
// console.log(newPerson);

// console.log(person == newPerson); // false // because objects are compare with reference

//* String.Prototype. {trimStart, trimEnd}
//===========================================//
// trimStart(): Return a new string with removed white spaces from the start of
// the original string.

const str = "  Hello world   ";
console.log(str.trimStart());

// trimEnd(): Return a new string with removed white spaces from the End of
// the original string.

const str1 = "  Hello world   ";
console.log(str.trimEnd());
console.log(str1.trim());

//*  Optional catch binding
//* ==================================
//? In ES2019 (ES10), a new feature called "Optional catch binding" was introduced
// for the try .... Catch statement. This feature allow you to omit the parameter
// in the catch block, making it optional.

//? We previously had to do:
try {
  //...
} catch (e) {
  // handle error
}

//? NOW We omit that Optional parameter:
try {
  5 + 35;
} catch {
  console.log("There is an error");
}
