// console.log("I am an external JS file");
// console.log("Welcome to world best JS Course");
// var my1Email = "manzoor@gamil.com";
// console.log(my1Email);
// var favNum = "10";
// console.log(favNum);
// console.log(typeof favNum);
// console.log(typeof +favNum);
// console.log(typeof Number(favNum));

// var num = 5;
// console.log(num);
// console.log(typeof String(num));
// console.log(typeof (num + ""));

// USE of NaN (not a number)
// console.log(parseInt("&234"));
// console.log(parseInt("xyz"));
// console.log(parseInt("45"));

// console.log(isNaN("4"));
// console.log(isNaN("RRR"));

// console.log(parseInt("xyz"));
// console.log(parseInt("@&%"));
// if ((NaN = NaN)) {
//   console.log("Both are equal");
// } else {
//   console.log("not are equal");
// }

// // Section 2
// console.log("vinode" - "Manzoor");
// console.log(true + true);

// result = 0.1 + 0.2;
// console.log(result.toFixed(2));

// console.log(5 < "fdfs");
// console.log(5 <= 5);

// USe of == and ===
// let num1 = 1;
// let num2 = "1";

// if (num1 === num2) {
//   console.log("They are equal");
// } else {
//   console.log("Not Eqaual");
// }

// var a = 10;
// var b = 0;
// if (a < 0 || b > a) {
//   console.log("true");
// } else {
//   console.log("False");
// }

// Write a programe that determines if a person is eligibe to drive based on their
// greater than or eaqual to 18 and having a valid driver's License
// var age = 19;
// var license = "Nvalid";

// if (age >= 18 && license == "Valid") {
//   console.log("Yes that person is Eligible to drive");
// } else {
//   console.log("Not Eligible for drive");
// }

// Use of Ternary Operator
// age = 14;
// let result = age >= 18 ? "Yes" : "No";
// console.log(result);

// var studenScore = 53;
// var result = studenScore >= 60 ? "Pass" : "Fail";
// console.log(result);

// Evalutio start from left to right
// console.log(10 + 10 + "20");
// console.log("20" + 10 + 10);

// let age = 13;
// let iscitizenShip = true;
// let isregister = true;
// if (age >= 18 && iscitizenShip && isregister) {
//   console.log("Yes they are Eligible to Vote");
// } else if (age >= 18 && !iscitizenShip && !isregister) {
//   console.log("Not Eligible to vote");
// } else if (age >= 18 && !iscitizenShip) {
//   console.log("They are not Eligible due to Citizenship Status");
// } else if (age >= 18 && iscitizenShip && !isregister) {
//   console.log("They are not Eligible due to Registration Status");
// } else {
//   console.log("They are not Eligible Because they not Fullfil the Condition");
// }

// // write a programe to check if a number is even or odd
// var num = 13467883457;
// if (num % 2 == 0) {
//   console.log("Number is Even and its value is: " + num);
// } else {
//   console.log("Ohh Number is odd and its value is: " + num);
// }

// // write a programe to check if a number is prime
// // var numb = -7;
// // if (numb === 0) {
// //   console.log("Number is zero");
// // } else if (numb > 0) {
// //   console.log("Number is Positive");
// //   if (numb % 1 == 0 && numb % numb == 0) {
// //     console.log("Yes the  Number is Prime and value is: " + numb);
// //   } else {
// //     console.log("But Not a Prime number");
// //   }
// // } else {
// //   console.log("Number is Negative");
// //   if (numb % 1 == 0 && numb % numb == 0) {
// //     console.log("Yes the  Number is Prime and value is: " + numb);
// //   } else {
// //     console.log("But Not a Prime number");
// //   }
// // }

// // Use of Switch
// // var day = "friday";
// // switch (day) {
// //   case "Monday":
// //     console.log("Today is Monday");
// //     break;
// //   case "Tuesday":
// //     console.log("Today is Thusday");
// //     break;
// //   case "Wensday":
// //     console.log("Today is Seminar!");
// //     break;
// //   case "Thursday":
// //     console.log("Today is Thursday");
// //     break;
// //   case "Friday":
// //     console.log("Today have a party day");
// //     break;
// //   case "Saturday":
// //     console.log("Today is no classes");
// //     break;
// //   case "Sunday":
// //     console.log("Lets go to movie");
// //     break;
// //   default:
// //     console.log("There is no case match");
// // }

// // Find the Area of Shapes
// var areaofShape = "square";
// var a = 5,
//   b = 10;
// var area;
// switch (areaofShape) {
//   case "rectangle":
//     var area = (a * b) / 2;
//     console.log("Area of Rectangle is " + area);
//     break;
//   case "square":
//     area = a * b;
//     console.log("Area of Square is " + area);
//     break;
//   case "circle":
//     var r = 5;
//     area = 3.14 * (r * r);
//     console.log("Area of Circle is " + area);
//     break;
//   default:
//     console.log("There is no case match");
// }

// Use while loop to count 1 to 10
// var num = 1;
// while (num <= 10) {
//   console.log(num);
//   num++;
// }

// Use while loop to count 1 to 10
// var num = 1;
// do {
//   result = num * 5;
//   console.log("5 x " + num + " = " + result);
//   num++;
// } while (num <= 15);

// use of do while loop also take input from users
// let userInput;
// let positivNumber;
// do {
//   userInput = prompt("Enter a Positive Number");
//   positivNumber = parseFloat(userInput);
// } while (isNaN(positivNumber) || positivNumber < 0);
// console.log("You Entered a Valid Positive Number " + positivNumber);

//  Infinite For loop
// for (;;) {
//   console.log("It is a infinite loop ");
//   break;
// }

// Caluculate the sum of 1 to 10 using for loop
// let sum = 0;
// debugger;         // Debugger use to exeute each step of loop or code
// for (var a = 1; a <= 10; a++) {
//   sum += a;
// }
// console.log("Sum of 1 to 10 is: " + sum);

// Find Pime number
// var num = 5;
// var isprime = true;
// for (var i = 2; i <= num; i++) {
//   if (num % i === 0) {
//     isprime = false;
//     break;
//   }
// }
// if (isprime) {
//   console.log("Number is Prime");
// } else {
//   console.log("Not a Prime Number");
// }

// var num = 3;
// var isPrime = true;

// if (num <= 1) {
//   isPrime = false; // Numbers <= 1 are not prime
// } else {
//   for (var i = 2; i <= Math.sqrt(num); i++) {
//     // Check divisors up to the square root of num
//     if (num % i === 0) {
//       isPrime = false;
//       break;
//     }
//   }
// }

// if (isPrime) {
//   console.log("Number is Prime");
// } else {
//   console.log("Not a Prime Number");
// }

// let year = 2020;
// if ((year % 4 === 0 && year % 100 !== 0) || year % 400 === 0) {
//   console.log("Yes " + year + " is leap year");
// } else {
//   console.log("Not a leap year");
// }

for (var i = 1; i <= 5; i++) {
  var pattern = "";
  for (var j = 1; j <= i; j++) {
    pattern = pattern + " *";
  }
  console.log(pattern);
}

// Function in Javascript
function sum(a, b) {
  return a + b;
}
console.log(sum(15, 10));
console.log(sum(25, 35));
console.log(sum(10, 20));

//
function great(name) {
  console.log(
    "Hello [" + name + "] Welcome to Thapa Technical javascript Course!"
  );
}
great("Manzoor Ahmad");
great("Faheem Mahsood");
