// Iterable: Object where you can use the for-of loop
//! Array like-object - Any object with length property and use indexes to access item.

// Array as object: Array in Javascript are specific type of object that have
// numeric key (indices) and length property. The indices are automatically maintained
// and the length property are automatically updated when we add or remove items from array.

// Typeof operator: The typeof operator in Javascript return "Object" for both
// array and regular object.

// =============================
// Creating Array
//==============================
// Using Array Constructor
// let fruit = new Array("Apple", "Banana", "Orange", "Mango");
// console.log(fruit);

// Using Array literal
// let fruits = ["Apple", "Banana", "Orange", "Mango"];
// console.log(fruits);

// // We can create an Empty array
// let arr = [];
// console.log(typeof arr);

// Accessing Elements :
// Accessing Elements: Array elements are accessed using Zero-based indices.
// let familymember = ["Manzoor", "Saqib", "Zakir ullah", "Uzair khan"];
// console.log(familymember[3]);

// Modify Array :
// let familymember = ["Manzoor", "Saqib", "Zakir ullah", "Uzair khan"];
// familymember[2] = "Faheem";
// console.log(familymember);

//1: for of loop known as iterable
// for ... of loop : The for of loop is useed to iterate over the value of an
// iterable object. Such as array string or other types of object.

// let student = ["Manzoor Ahmad", "Shabir Ahmad", "Bilal Ahmad", "Essa Raza"];
// for (let item of student) {
//   console.log(item);
// }
//  Similarly now iterate the array using loop
// let student = ["Manzoor Ahmad", "Shabir Ahmad", "Bilal Ahmad", "Essa Raza"];
// for (let i = 0; i < student.length; i++) {
//   console.log(student[i]);
// }
// console.log("  ");
// for (let i = student.length - 1; i >= 0; i--) {
//   console.log(student[i]);
// }

// for in loop:
// for ... in loop: The for in loop is used to iterate over the properties
//(including indices) of an object.

// for (let item in student) {
//   console.log(item);
// }

// =============== foreach Method:=================

// The arr.forEach() method calls the provided function once for each element of
// the array. The provide function may perform any type of operation on the elements
// of the given array.
// Syntax:
// array_name.forEach((item_name, index_name, any_variable) => {
//   console.log(
//     "You can display array value (using item_name) and index of array and get complete array"
//   );
// });

// fruits = ["Apple", "Orange", "Mango", "Grapes", "Banana"];
// fruits.forEach((curE, ind, my_array) => {
//   console.log(`${curE} ${ind}`);
//   console.log(my_array);
// });

//    ==== if return using forEach method we can not access its ===

let fruits = ["Apple", "Orange", "Mango", "Grapes", "Banana"];
const my_fruit = fruits.forEach((curE, ind, my_array) => {
  console.log(`${curE} ${ind}`);
  // console.log(my_array);
  // return `${curE} ${ind}`;
}); // Perform an action of each elements
// console.log(my_fruit);

// =========   Map Function:================

// fruits.map((currentElm, index, array) => {
//   console.log(`${currentElm} ${index}`);
// });
//============= we can easly return its using Map method
// bannu_fruit = ["Apple", "Orange", "Mango", "Grapes", "Banana"];
// const my_fruits = bannu_fruit.map((curE, ind, myarray) => {
//   return `${curE} ${ind}`;
// }); // Create a new array with transformed elements
// console.log(my_fruits);

// ! return value :
// forEach : it doesn't return a value. The forEach method is used for iterating
// over the elements of an array and perform a side effect, such a modifying the array
// or performing a task for each elements

//? map: it return a new array containing the result of applying a function
// on each element in the original array. The original array remain unchanged.

// ! Chaining :
// forEach : It does't return a value, so it cannot directly chained with other array method.

// map : Since it return a new array, you can chain other array method after using map.

// USE Case : Used when you want to iterate over the array elements and perform an action
// on each element but you don't need a new array.

// ========================
// 👉How to Insert, Add, Replace and Delete Elements in array (-P-1).
// ========================

//? 1 : Push(): Method that add one or more elements to the end of the array.

// let fruit = ["apple", "mango", "banana", "orange"];
// fruit.push("Stabery");
// console.log(fruit);
// console.log(fruit.push("Stabery"));

// //? 2 : POP(): Method that remove an element from an array.
// fruit.pop();
// console.log(fruit.pop());
// console.log(fruit);

//? 3 : unshift(): Method that add one or more elements to the beginning  of an array.
// let fruit = ["apple", "mango", "banana", "orange"];
// fruit.unshift("Caconote", "Grapes"); // use to add new element to the start of the array
// console.log(fruit);

// //? 4 : shift(): Method that remove first elements from an array.
// fruit.shift(); // remove element from the start of the array
// console.log(fruit);

// let size = fruit.length;
// console.log(size);

//=============================================
// what if we want to add or remove anywhere in an elements -p2
//=============================================
//? Splice() : Method of Array instances changes the contents of an array by
// removing or replacing existing elements and/or adding new element in place

// Syntax::
// splice(start, deleteCount, item1, item2,....*/....itemN)
// let fruit = ["apple", "mango", "banana", "orange"];

// console.log(fruit.splice()); // provide new empty array
// console.log(fruit.splice(1, 2, "stabery", "Garlic"));
// console.log(fruit);

// //! what if you want to add element at the end
// fruit.splice(-1, 0, "Grapes"); // -1 start to add at the 2nd last element to array
// console.log(fruit);
// fruit.splice(fruit.length, 0, "grapes");
// console.log(fruit);

//===================================
// Searching in Array
//===================================
//👉Searching and Filter in Array

//? For Search we have -indexof, lastIndexof, and include
// const number = [1, 2, 3, 6, 5, 6, 7, 8, 9];

//1 Indexof Method(): The indexof Method return the first index at which the given
// element can be found in the array, or -1 if it is not present
// Syntax"::
// indexof(searchElement, fromIndex);
// console.log(number.indexOf(6, 7));

// /*?2 lastindexof(): The lastindexof Method of Array instances returns the last index
// at which the given element can be found in the Array. or -1 if it is not present
// The Array Searched backward starting at fromIndex.*/
// const result = number.indexOf(6, 6);
// console.log(result);
// const result1 = number.lastIndexOf(6, 3); // start searching from backward
// console.log(result1);

/*Include Method(): The includes method checks whether an array includes a certain
element, Return true or False.
Syntax::
includes(searchElement, fromIndex);*/
// const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
// const result = numbers.includes(16);
// console.log(result);

// (Questions) todo Challenge time
//? 1: Add Dec at the end of Array
//? 2: What is the return value of splice method
//? 3: Update march to March(update);
//? 4: Delete June from Array

// Answer::
// 1
// const month = ["Jan", "Feb", "march", "April", "June", "July"];
// month.push("December");
// month.splice(month.length, 0, "December");
// console.log(month);

// 2 when used to add an element to the array , the splice method return an empty array
// console.log(month.splice(-1, 0, "November"));

// 3
// const indexToUpdate = month.indexOf("march");
// month.splice(indexToUpdate, 1, "March");
// console.log(month);

// 4
// const indexToDelete = month.indexOf("June");
// console.log(indexToDelete);
// month.splice(indexToDelete, 1);
// console.log(month);

//* =========================================
//   Filter in Array
//* =========================================
//? Search + Filter
const number = [1, 2, 3, 4, 5, 6, 7, 8, 9];

/*//? 1 find Method : The find method is used to find the first Element in an Array
that satisfies the first testing function. It returns the first matching element or
undefined if no element is found.*/
const result = number.find((curElm) => {
  return curElm > 6;
});
console.log(result);

/*//? 2 findIndex Method(): The findIndex() Method of TypedArray intances return the
index of the first element in a typed array that Satisfies the provided testing 
function. If no element satisfies the testing function, -1 is returned.*/
// const number = [1, 2, 3, 4, 5, 6, 7, 8, 9];

// const result = number.map((curElement) => {
//   return curElement * 5;
// });
// console.log(number);
// console.log(result);
// const result1 = result.findIndex((curElement) => {
//   return curElement > 15;
// });
// console.log(result1);

/*//? 3 filter Method(): The filter Method create a new Array with all element that 
pass the test implemented by the provided function.
// Syntax ::
// filter(callbackFn)
// filter(callbackFn, thisArg)*/
// const number = [1, 2, 3, 4, 5, 6, 7, 8, 9];
// const result = number.filter((curElement) => {
//   return curElement > 4;
// });
// console.log(result);

/*// UseCase: In E-ecomerce website when we want to remove or delete any product
from AddToCart page.*/

//! Let say User want to delete value 6.
// let value = 6;
// const number = [1, 2, 3, 4, 5, 6, 7, 8, 9];

// let updateCart = number.filter((curElement) => {
//   return curElement != value;
// });
// console.log(updateCart);

// Practise time
//
// !Example 2 Filtering product by price
// const products = [
//   { name: "Laptop", price: 1200 },
//   { name: "Phoe", price: 800 },
//   { name: "Tablet", price: 300 },
//   { name: "Smarwatch", price: 150 },
// ];
// // Filter product with price less than or equal to 500
// const filterProducts = products.filter((currElement) => {
//   return currElement.price <= 500;
// });
// console.log(filterProducts);

// Filter unique value
// const number = [1, 2, 3, 4, 6, 5, 6, 7, 8, 9];
// let uniqueValue = number.filter((curElement, index, arr) => {
//   // console.log(index);
//   // console.log(arr.indexOf(curElement));
//   return arr.indexOf(curElement) == index;
// });
// console.log(uniqueValue);
// console.log(new Set(number));
// console.log([...new Set(number)]); // ... indicate spread operator

//* ==========================================================
//* How to Sort and Compare an Array
//* ==========================================================
// How to Sort and Compare an array
// //? Sorting an Array: The Sort Method Sorts the elements of an array in place and
// return the Sorted Array. By default it sorts element as String.

// const fruits = ["Banana", "Apple", "Orange", "Mango"];
// const numbers = [1, 2, 7, 3, 4, 5, 4, 6, 7, 8, 9];

// fruits.sort();
// numbers.sort();
// console.log(`[${fruits}]  [${numbers}]`);

//? Compare Callback Function
// Syntax:
// const sortedNumbers=numbers.sort((a,b)=>{
//   if(a>b) return 1; // Switch the order
//   if(b>a) return -1;  // Keep the order
// });
// numbers.sort((a, b) => {
//   if (a > b) return 1;
//   if (b > a) return -1;
// });
// console.log(numbers);

//* ==========================================
// * Very Importan Array Method
//============================================
//? Map() , Filter() and Reduce()
// map(): Create a new array from calling a funtion for every array elements
// Does not execute the function for empty element
// Does not change the original array.

// Uing map to square each number and create a new array
// const numb = [1, 2, 3, 4, 5];
// const numbSquare = numb.map((curElement) => {
//   return curElement * curElement;
// });
// console.log(numbSquare);

//===============================================
// Interview Question -- Array Filter
//==============================================
/*
//? 1: Using the map method, write a function that take an array of strings and 
return a new array where each string is capitalize(uppercase letter).*/
// const names = ["manzoor Ahmad", "saqib ul-Hassan", "Zakir ullah", "M.uzair"];
// const upperCase = names.map((curelement) => {
//   return curelement.toUpperCase();
//   return curelement.toLowerCase();

// });
// console.log(upperCase);

/*//? 2: Using the map method, write a function that takes an array of numbers and 
return a new array where each numbers is squared, but only if it's an even number*/
// const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9];
// const numberSquare = numbers
//   .map((curelement, index, arr) => {
//     if (curelement % 2 == 0) {
//       return curelement * curelement;
//     }
//   })
//   .filter((curelement) => curelement != undefined);
// console.log(numberSquare);

/*//? 3: Using the map method, write a function that take an array of names and
return a new array where each names is prifexed with "Mr".*/
// const names = ["Manzoor Ahmad", "Raheel", "Faheem"];
// const prefixNames = names.map((currelement) => {
//   return `Mr.${currelement}`;
// });
// console.log(prefixNames);

//? Reduced Method()

/* The reduced method in javascript is used to accumulate or reduce an array to 
single value. It iterate over the elements of an array and applies a callback function
to each element, updating an accumulator value with a result. The reduce method takes
a callback function as its first arguament and an optional initial value for the accumulator
as the second argument.
// Syntax
// array.reduce(function callback(accumulator, currentElement, index, array){
}, initialValue);*/

// Interview Questions --Array Reduced
/* Write a javascript function that calculates the total price of items in a shopping
cart. The function should take an array of item prices as input and return the total 
price.*/
// const productPrice = [200, 300, 400, 500, 600];
// const totalPrice = productPrice.reduce(
//   (accumulator, currentelement, index, array) => {
//     return accumulator + currentelement;
//   },
//
// );
// console.log(totalPrice);
