//* ==================================
//  Promises In Javascript
//* ==================================

//? A promises in javascript is an object that represent eventual completion or failure
// of an asynchronous operation. It allow you to handle asynchronous operations more
// cleanly and easily by providing a way to write a asynchronous code that looks synchronous.

//👉 In simple term, A promise is like a placeholder for the result of an asynchronous
// operation. or A container for the future result or value.

// It can be in one of three states:
//? Pending: Initial State, neither fulfill nor rejected.
//? Fullfil(Resolved): The operation completed successful.
//? Rejected: The operation fail or encountered an error.

//? Promise have built-In method like then and catch to handle the result of
// asynchronous operations when they complete or encounter error, making it easier
// to write asynchronous code that is more readable and maintainable compare to
// traditional callback-based approaches.

//* ========================================
//  Using the Promises Constructor(class):
//* ========================================
//? You can create a promise using the Promise constructor. This involves creating
// a new instance of the promise class, which take a function as an argument.
// This function, often referred to as the 'executor function,' take two parameters:
// resolved and reject. You call resolve when the asynchronous operation successful
// and reject when encounter error.

//* ========================================
//  Using a function (Promise Wrapper):
//* ========================================
//? You can also create a promise by defining a function that returns a promise.
// This function usually encapsulate some asynchronous operation. Inside this function
// you manually create a promise and resolved or reject it based on the result of the
// asynchronous operation.

// Syntax
// function myPromiseFunction() {
//   return new promise((resolve, reject) => {
//     // asynchronous operation here
//     // if successful, call resolve(value)
//     // if there an error, call reject(error)
//   });
// }

// const pr = new Promise((resolve, reject) => {
//   setTimeout(() => {
//     console.log("Hi I miss you");
//   }, 2000);
// });

// pr.then((res) => {
//   console.log(res);
// })
//   .catch((error) => {
//     console.log(error);
//   })
//   .finally(() => {
//     console.log("Don't worry, we all miss you and keep smiling");
//   });

// Another Example
// const studentName = "Manzoor";

// const enrollStudent = (studentName) => {
//   return new Promise((resolve, reject) => {
//     setTimeout(() => {
//       const isSuccessful = Math.random() > 0.4;
//       if (isSuccessful) {
//         resolve(`Enrollment successful for ${studentName}`);
//       } else {
//         reject(`Enrollment fail for ${studentName}. Please try again.`);
//       }
//     }, 2000);
//   });
// };

// enrollStudent(studentName)
//   .then((res) => {
//     console.log(res);
//   })
//   .catch((error) => {
//     console.log(error);
//   })
//   .finally(() => {
//     console.log("Enrollment process completed.");
//   });

//* ========================================
//   Promise method:
//* ========================================

//? Promise.all is used when you want to wait for all promises to complete
// successfully. Reject state will through an error.

//? Promise.allSettled is used when you want to wait for all promises to complete,
// regardless of success or failure and get information about their outcomes.

//? Promise.race is used when you are interested in the result of the first promise
// that completes, regardless of success or failure.

// Example of Promise.all Method:
const promise1 = new Promise((resolve) => {
  setTimeout(() => resolve("First"), 2000);
});

// const promise2 = new Promise((resolve) => {
//   setTimeout(() => {
//     resolve("Second");
//   }, 3000);
// });

const promise2 = new Promise((resolve, reject) => {
  setTimeout(() => {
    reject("Failed");
  }, 3000);
});

const promise3 = new Promise((resolve) => {
  setTimeout(() => resolve("Third"), 1000);
});

// Promise.all([promise1, promise3, promise2])
//   .then((values) => {
//     console.log(values);
//   })
//   .catch((error) => {
//     console.error(error);
//   });

//** Promise.allSettled Method

// Promise.allSettled([promise1, promise3, promise2])
//   .then((values) => {
//     console.log(values);
//   })
//   .catch((error) => {
//     console.error(error);
//   });

//*** Promise.race Method

Promise.race([promise1, promise3, promise2])
  .then((values) => {
    console.log(values);
  })
  .catch((error) => {
    console.error(error);
  });
