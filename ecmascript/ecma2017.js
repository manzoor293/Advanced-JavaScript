//* ================================================
// ECMAScript Feature  (2017)
//* ================================================

//? List of new useful features added in ES8
// string padding
// Object.values()
// Object.entries()
// Trailing commas in function parameter lists and calls
// async functions

//* =====================================
// String Padding:
//* =====================================

//? String padding in Javascript is a way to add extra characters (like spaces)
//  to a string to make it a specific length.

//? Using padStart() to pad from the beginning:
// const companyName = "Devpash";
// const paddedName = companyName.padStart(5);
// console.log(paddedName);
// console.log(paddedName.length);

//? Using padEnd() to pad from the end:
// const companyName = "Devpash";
// const paddedName = companyName.padEnd(15, "***");
// console.log(paddedName);

// todo Key Points:
// Both padStart() and padEnd() create a new padded string without modifying the original one.

//* =====================================
// Trailing Commas:
//* =====================================
//? This feature allows have to trailing commas in function declaration,
// function calls, array literals & Object literals.
function greet(name, age) {
  console.log(`Hello ${name} you are ${age} years old`);
}

greet("Manzoor", 19);
