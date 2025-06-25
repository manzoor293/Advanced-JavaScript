//* ===========================================
//*  ECMASCRIPT FEATURE (2023)
//* ===========================================

// List of new useful features added in ES8👇
// Array.findLast()
// Array.findLastIndex()
// Array.prototype.toReversed()
// Array.prototype.toSorted(compareFn)
// Array.prototype.toSpliced(start, deleteCount, ....items)
// Array.prototype.with(index, value)

//* ===========================================
//*  Array.findLast() & Array.findLastIndex()
//* ===========================================

//? This function will allow us to find element from the last to first of the array
// based on a condition.
const array = [1, 2, 3, 4, 5, 6, 4];
console.log(array.findLast((elem) => elem));
console.log(array.findLastIndex((elem) => elem));

//* ===========================================
//*  New Array.prototype Functions
//* ===========================================

const myNames = ["Manzoor Ahmad", "Fawad", "Essa Raza", "Shabir Ahmad"];

//? Array.prototype.toReversed()
const reversedNum = myNames.toReversed();
console.log("Original", myNames);
console.log("Reversed", reversedNum);
// Note if it's not working run in browser

//? Array.prototype.toSorted(compareFn)
const sortedArr = myNames.toSorted();
console.log("Original", myNames);
console.log("Reversed", sortedArr);

//? Array.prototype.toSpliced(start, deleteCount, ....items)
const splicedArr = myNames.toSpliced(1, 1, "Developer");
console.log("Original", myNames);
console.log("Reversed", splicedArr);

//? Array.prototype.with(index, value);
/* The with() method in javascript is used to change the value of an element at a
specific index in an array. It take to argument : The index of the element to 
be changed and the new value. It return a new array wth the changed element 
leaving the original array unchanged.*/
const replaceWith = myNames.with(0, "Pashteen saib");
console.log("Original", myNames);
console.log("Replaced", replaceWith);
