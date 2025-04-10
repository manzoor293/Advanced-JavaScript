//* ===============================================
//* Objects In JavaScript
//* ===============================================
//? Objects are a fundamental part of javascript, providing a way to group related data
// and function together. In Javascript, an object is a collection of key-value pairs,
// where each key is a string( or a symbol) and each value can be any data type,
// including other objects. Object can have properties and methods, making them
//  versatile for various use cases.

//* ===============================================
//* Creating Objects:
//* ===============================================
//? There are several way to create objects in javaScript.
//  The most common one is using object literals:

// const product = {
//   id: 1,
//   pName: "laptop",
// };

// let person = {
//   name: "Manzoor",
//   age: 19,
//   isStudent: false,
//   // the function in obj is a method
//   greet: function () {
//     console.log("Welcome to my Home!");
//   },
// };

// let person = {
//   name: "Manzoor",
//   age: 19,
//   "is'Student": false,
//   // the function in obj is a method
//   greet: function () {
//     console.log("Welcome to my Home!");
//   },
// };

//* ===============================================
//* Accessing Properties:
//* ===============================================
//? You can Access Object Properties using dot notation or Square bracket notation:

// console.log(person.age);
// console.log(person["name"]);
// console.log(person[`is'Student`]); // should written in string within []

//* ===============================================
//* Adding and Modifying Properties:
//* ===============================================
//? You can add new properties or existing ones:
// person.job = "web dev";
// person.age = 18;
// console.log(person);

//* =========================
//* Methods:
//* =========================
//? Methods in objects are functions associated with object. They can be invoked
// same as properties.
// person.greet();

//* ===============================================
//* We can add dynamic keys in an object:
//* ===============================================
// let idType = "StudentId";
// let idType = "CollegeId";

// let student = {
//   [idType]: "22MDBCS25(manzoor)",
//   sName: "Manzoor Ahmad",
//   sAge: 20,
//   isStudent: true,
//   greet: function () {
//     console.log(
//       `Hey, my ${idType} is ${student[idType]} and my name is ${student.sName}`
//     );
//   },
// };

// student.greet();

//? useCase: when we want to get user name and value in react.

//* ===============================================
//* We can add dynamic keys in an object:
//* ===============================================
//? Data Modeling is the process  of creating a visual representation of either
// a whole information system or part of it to communicate connection between
// data points and structure. The goal is to illustrate the type of data used
// and stored within the system, the relationships among these data types, the
// ways the data can be grouped and organized and its formats and attributes.

// Objects are excellent for modeling real-world entities. For instance, you
// might represent a car, a user or a product with properties like color, brand,
// username etc.

// let car = {
//   brand: "Toyota",
//   model: "camry",
//   year: 2022,
//   start: function () {
//     console.log("Engine Started!");
//   },
// };

//* ===============================================
//* Interview Question:
//* ===============================================

//! Explain the difference between passing objects by reference and by value in JavaScript.
// Provide an example to demonstrate each scenario.

//? SOl: In JavaScript, primitive data types like numbers and strings are passed by
// value while objects are passed by reference.
//? Passing by value: when passing by value, a copy of primitive value is created
// and passed to the function or assigned to a variable. Any change made to the copy
// do not affect the original value.

// let a = 10;
// const modifyValue = (x) => (x = 20);

// console.log(modifyValue(a));
// console.log(a);

//? Passing by reference: when passing by reference, a reference
// to the memory location of the object is passed to the function
// or assigned to a variable. Any changes made to the object through
// this reference will effect the original object.

// let obj = {
//   id: 5,
//   name: "Manzoor",
// };

// let obj1 = obj;   // this is called by reference
// obj1.name = "Faheem";
// console.log(obj1);
// console.log("Original ", obj); // original value also changed

// To avoid this behavior and create a true object. You can use
// method like assign() or the spread operator(...):

//? Object.assign() is used to copy properties from one or more
// source objects to a target object.

// let obj = {
//   id: 5,
//   name: "Manzoor",
// };

// let obj1 = {};
// let newObj = Object.assign(obj1, obj);

// newObj.name = "Faheem";
// console.log(newObj);
// console.log("Original ", obj);

//* ===============================================
//* Comparison by reference:
//* ===============================================

//? Two object are equal if they refer to the same object.
//? Independent objects (even if they look alike) are not equal:

// let obj1 = { name: "Ahmad" };
// let obj2 = { name: "Ahmad" };
// const obj3 = obj1;

// // const isEqual = obj1 == obj2 ? true : false;
// const isEqual = obj1 == obj3 ? true : false;

// console.log(isEqual);

//* ===============================================
//* JSON (Javascript Object Notation):
//* ===============================================
//? JSON is data interchange formate derived from javascript objects.
// Objects can be easily converted to JSON and vice versa.

// let student = {
//   id: 1,
//   sName: "Manzoor Ahmad",
//   sAge: 20,
//   isStudent: true,
//   greet: function () {
//     console.log(`Hey, my id is ${student.id} & my name is ${student.sName}`);
//   },
// };

// let jsonData = JSON.stringify(student);
// console.log(jsonData);
// let parsedObject = JSON.parse(jsonData);
// console.log(parsedObject);

//* =======================================
//* "this" Object:
//* =======================================

//? In Javascript, the this key word refer to an object.

//? Which object depend on how this is being invoked(used or called).

//? The "this" key word refer to different objects depending on how it is used:

// In an object method, this refer to the object.
// Alone, this refer to the global object.
// In a function, this refer to the global object.
// In a function, in strict mode, this is undefined.
// In an Event, this refer to the element that received the event.
// Method like call(), apply() and bind() can refer this to any object.

// Note:
// "this" is not a variable. It is a keyword. You can not change the value of this.
// ("use strict");

// x = 5;
// console.log(x);

// function callme() {
//   console.log(this);
// }
// callme(); // try to run on browser console

// todo Let's check the this keyword values in an object methods

//* Regular Function  Expression:
// const obj = {
//   name: "manzoor",
//   greet: function () {
//     console.log(this);
//   },
// };

// obj.greet();

//* In this example, the greet method is defined using the "Method Shorthand" Syntax.
// It's more a concise way to define methods in object literals.
// const obj = {
//   name: "manzoor",
//   greet() {
//     console.log(this);
//   },
// };

// obj.greet();

//*=======  Fat Arrow  Function:
// const obj = {
//   id: 1,
//   name: "Manzor Ahmad",
//   greet: () => {
//     console.log(this);
//   },
// };

// obj.greet();

// const product = {
//   id: 1,
//   name: "Laptop",
//   category: "Computer",
//   brand: "Examplebrand",
//   price: 999.99,
//   stock: 50,
//   description:
//     "Powerful lalptop with quad-core i5 processor 8GB RAM 256GB SSD and a 14-inch FHD display",
//   image: "Image link will be added during project",
// };

//? 1: Object.keys(): Return an array containing the name of all enumerable own
// properties of object.
// let keys = Object.keys(product);
// console.log(keys);

//? 2: Object.values(): Return an array containing the values of all enumerable own
// properties of an object.
// let values = Object.values(product);
// console.log(values);

//? 3: Object.entries(): Return an array containing the arrays of key-value pair of
// each enumerable own properties of an object.
// let entries = Object.entries(product);
// console.log(entries);

//? 4: Object.hasOwnProperty(): Return a boolean indicating whether the object has
// specified property as an own property.
// console.log(product.hasOwnProperty("name"));
// console.log(product.hasOwnProperty("isStudent"));

// Some javascript Interview Question
// console.log([] + 1);
// console.log([1, 2, 3] + [4, 5, 6]);
// console.log([1] - 1);
// console.log({} + []);
// console.log([] == ![]);
// console.log("5" - "2");
// console.log("0" == "\t");
// console.log("0" == "\n0\n");
// console.log("0" == "\t");
// console.log([] === []);

//? 5: Object.assign(); Copies the value of all enumerable
// own properties form one or more source object to the target object.
// const target = { a: 2, b: 4 };
// const source = { b: 5, c: 6 };
// const mergedObject = Object.assign({}, target, source);
// console.log(mergedObject);

//* =========================================
//* Interview Question Object Manipulation:
//* =========================================

//!  Given an object representing a student, write a function to add new subject
// with its corresponding grade to the student's record. Also check if the grade
// property is present or not?

// let student = {
//   name: "Bob",
//   age: 20,
//   grades: {
//     math: 90,
//     science: 85,
//     history: 80,
//   },
// };

// const addSubjectGrades = (student, subject, marks) => {
//   if (!student.grades) student.grades = {};

//   return (student.grades[subject] = marks);
// };

// addSubjectGrades(student, "computer", 92);
// console.log(student);

//* =========================================
//* Interview Question - Object Comparison:
//* =========================================
// Problem: Write a function that compare two objects that they have the
// same properties and values.

// const areObjectsEqual = (obj1, obj2) => {
//   // Get the keys of both objects
//   let keys1 = Object.keys(obj1);
//   let keys2 = Object.keys(obj2);

//   // Check if the number of keys in both objects are equal
//   if (keys1.length !== keys2.length) {
//     console.log("There keys are not same");
//     return false;
//   }

//   // Check if all the keys and values are the same

//   // for (let key in obj1) {           // use of "in" for object iteration
//   //   if (obj1[key] !== obj2[key]) {
//   //     return false;
//   //   }
//   // }
//   for (let key of keys1) {
//     if (obj1[key] !== obj2[key]) {
//       return false;
//     }
//   }
//   return true;
// };
// let objA = { name: "Manzoor", age: 20, city: "Mardan" };
// let objB = { name: "Manzoor", age: 20, city: "Mardan" };
// let objC = { name: "Barkat", age: 19, city: "Rawalpindi" };

// console.log(areObjectsEqual(objA, objB)); // true
// console.log(areObjectsEqual(objA, objC)); // false

//* =========================================
//* Interview Question Object Transformation:
//* =========================================
// let inputArray = [
//   { id: 1, name: "Alice", city: "lahore" },
//   { id: 2, name: "Bob" },
//   { id: 3, name: "Faheem" },
// ];

// const arrayToObj = (arr) => {
//   let obj = {};
//   // console.log(arr[2]);
//   for (let key of arr) {
//     // console.log(key.id);
//     obj[key.id] = key;
//   }
//   return obj;
// };
// console.log(arrayToObj(inputArray));
