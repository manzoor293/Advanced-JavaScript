//     ECMASCRIPT Feature (2016)

//* =================================================
//* Exponentiation Operator
//* =================================================

//? ES7 introduced a new mathematical operator called exponentiation operator.
// This operator is similar to using Math.pow() method. Exponentiation operator is
// represented by double asterisk (**). The operator can be used only with numeric values.

//* Syntax:
//? base_value**exponent_value

// Basic usage:
let base = 2;
let exponent = 3;

console.log("Using Math.pow() method:", Math.pow(base, exponent));
console.log("Using Exponentiation Operator:", base ** exponent);

//? In Expression:
//! Calculate the area of a circle with radius of 5 units?
let area = Math.PI * 5 ** 2;
console.log("Area of Circle:", area.toFixed(2));
