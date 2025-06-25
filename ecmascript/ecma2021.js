//* ===========================================
//  ECMASCRIPT FEATURE 2021
//* ===========================================

//? Replacing multiple spaces with a single space
// const text = "This  has    extra   spaces.";
// const normalizedText = text.replaceAll(/\s+/g, " ");
// console.log(normalizedText); // "This ha extra spaces."

//* ===============================================
//  Logical Assignment Operator (||== , &&= , ??=)
//* ===============================================

//? Logical OR-Assignment (||==) : This operator assign the value of its right hand side
// operand to its left-hand operand if the left-hand operand evaluate to a falsy
// value ( false , null, undefined, 0, '', NaN). Otherwise it leaves the left-hand Operand
// unchanged.
// let x = false;
// x = x || true;
// console.log(x);

// let y = 10;
// y ||= 20;
// console.log(y);

//? Logical OR-Assignment (||==) : This operator assign the value of its right hand side
// operand to its left-hand operand if the left-hand operand evaluate to a truthy
// value. Otherwise it leaves the left-hand Operand unchanged.
// let x = true;
// x &&= false;
// console.log(x);

// let y = 10;
// y &&= 20;
// console.log(y);

//* ================================
// Numeric Separator
//* ================================
// This feature allows underscore to be used as separators with numeric literals
// to improve readability
const bigNumeric = 1_000_000;
console.log(bigNumeric);
