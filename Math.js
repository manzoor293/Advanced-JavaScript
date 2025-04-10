//* ====================================================
//* Math Object in JavScript
//* =====================================================

//* Math: The Math namespace object contains static properties and methods
// for mathematical constants and functions.
//* Math works with the Number type. It doesn't work with BigInt.

//? 1: Constants:
//- Math.PI: Represents the mathematical constant Pi ().
// const piValue = Math.PI;
// console.log(piValue);

//* ====================================================
//* 2. Basic Operations:
//* =====================================================

//? Math.abs(): The Math.abs()static method retuns the absolute vaue of a number.
// 0r In Simple, how far the number is from 0. It will be always positive.

// console.log(Math.abs(5));
// console.log(Math.abs(-115));

//? Math.round(x): Round a number to the nearest integer.
// const roundValue = Math.round(3.7);
// console.log(roundValue);

//? Math.ciel(x): Returns the value of x rounded up to its nearest integer:
// const ceilValue = Math.ceil(3.001);
// console.log(ceilValue);

//? Math.floor(x): Returns the value of x rounded down to ties nearest integer:
// const floorValue = Math.floor(3.999);
// const floorValue = Math.floor(3.01);
// console.log(floorValue);

//? Math.trunc(x): Returns the integer par tof x:
// const truncValue = Math.trunc(3.7);
// console.log(truncValue);

// todo  Marth.truc() and Math.sign() were added to JavaScript  2015 - ES6.
// const truncVaue = Math.trunc(-3.7);
// const floorVaue = Math.floor(-3.7);
// console.log(truncVaue);
// console.log(floorVaue);

// todo Notes:
/* No matter how many chars are there after decimal, they will always
return only number before the deimal. */
//  round rounds to the nearest integer.
// floor always rounds down.
// ceil always rounds up.

//* ========================================================
//*  3. Exponential and Logarithemic Functions:
//* ========================================================

//? Math.pow(x, y): Retuns the value of x to the power of y.
// console.log(Math.pow(2, 5));
// OR using ES6:
// console.log(2 ** 5);

//? Math.sqrt(): Math.sqrt(x) returns the suare root of x:
// let squareRoot = Math.sqrt(25);
// console.log(squareRoot);

//? Math.log(x): Returns the natural logarithm of x.
// let logResult = Math.log(1);
// let logResult = Math.log(2);
// console.log(logResult);

//? Math.log2(x): Returns the base 2 logarithm of x.
// let logResult = Math.log2(1);
// let logResult = Math.log2(8);
// console.log(logResult);

//* ========================================================
//* Interview Questions:
//* ========================================================

/*//? Math.random(): Math.random() returns a random number between
0 (inclusive), and 1 (exclusive).*/

console.log(Math.random());
console.log(Math.random() * 100);
console.log((Math.random() * 100).toFixed(3));
