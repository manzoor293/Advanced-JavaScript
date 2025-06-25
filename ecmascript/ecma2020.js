//* ===========================================
//  ECMASCRIPT FEATURE 2020
//* ===========================================

//? List of new useful features added in ES8
// BIgInt
// Nullish coalescing operator ??
// Optional chaining operator ?
// Promise.allSettled

//* ==================
//* BigInt
//*==================
//? BigInt : BigInt in javascript is a data type used to represent and
// perform operations on large integers that exceed the limit of regular
// numbers.

//? Creating BigInt
// Using thee 'n' suffix:

// Using the BigInt() constructor:
// const anotherLargeNumber = BigInt("123456789012345678901234567890");
// console.log(anotherLargeNumber);
// console.log(typeof anotherLargeNumber); // bigint

// let maxNumber = Number.MAX_SAFE_INTEGER;
// maxNumber = BigInt(maxNumber);
// // console.log(maxNumber + 10); // give wrong result
// let num = maxNumber + 10n;
// console.log(num);

//* ===========================================
//  Nullish coalescing Operator (??)
//* ===========================================

/* In javascript, the Nullish coalescing operator (??) is a logical operator 
that provides a concise way to handle nullish (Null or undefined) values. It returns 
its right-hand operand when its left-hand operand is null or undefined , 
otherwise it return the left-hand operand. */

// let favNum = 0; // falsy
// // userFavNum = favNum || 40;
// userFavNum = favNum ?? 40;

// console.log(userFavNum);

//* ===========================================
//  Optional Chaining Operator (?.)
//* ===========================================
/* It provide a concise way to access properties of an object 
without worrying about the existence of intermediate properties. Its particularly 
useful when working with nested objects or accessing properties of objects that 
may be null or undefined */

const person = {
  name: "Manzoor",
  address: {
    city: 0,
    zipCode: "23200",
  },
};

// Accessing nested properties without optional chaining
// const city = person.address;
// const city = person.address ? person.address.city : "City is not present";
// console.log(city);

// With optional chaining
const city = person.address?.city ?? "City is not present";
console.log(city);
