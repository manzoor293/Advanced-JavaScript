//* =====================================
//    Date & Time Object in JavaScript
//* =====================================

/*//? Date Constructor(): The Date Constructor create date Objects.
when called as a function, it returns the string representing the 
current time.*/

//? Creating the Date Objects:
// You can create a new Date Object using the new keyword. It can be done
//in several ways.

// todo there are 9 way to create new Date Object:

// Syntax:
// new Date()
// new Date(date string)
// new Date(year, month)
// new Date(year, month,day)
// new Date(year, monthe, day, hours)
// new Date(year, month, day, hours, minutes)
// new Date(year, month, day, hours, minutes, seconds)
// new Date(year, month, day, hours, minutes, sedonds, ms)

// new Date(milliseconds)

//?  Current Date & Time
// new Date(): Creates a new Date object representing the current date and time.
// const currentTime = new Date(2025, 2);
// console.log(currentTime);

/*todo This is the ISO 8601 format whsis the standard for representing date and 
time. In this formate the date and time are represented together, Seperated by "T".
The "Z" at the end indicate that the time is in (Coordinated Universal Time) UTC. */

// But the same when you rur on browser it will return more human readible formate.

// const date1 = new Date("2024-1-5");
// console.log(date1);

// const date2 = new Date("Feb 28, 2025");
// console.log(date2);

//====================================================
// In JavaScript Get Date Method  / Getting Components
//====================================================
// You can get various component of Date using the component of the date object.
// const currentDate = new Date();
// // In a date object , the time is static
// const year = currentDate.getFullYear();
// const month = currentDate.getMonth();
// const day = currentDate.getDay(); // getDay() method return the day of the week
// const day = currentDate.getDate(); // if your want the month of the day
// console.log(day);

// In JavaScript the first day of the week (day 0) is Sunday
// day of the week (0 sunday, 1 Monday......6 saturday)

//====================================================
// In JavaScript Set Date Method  / Setting Components
//====================================================

// const date = new Date();
// SetFullYear(yearValue [,monthValue [,dayValue]]):
// Set the full Year for a Specified date according to local time.
// console.log(date);
// date.setFullYear(2026);
// console.log(date); // Date Object with the year set to 2026

//SetMonth(monthValue [, dayValue]):
// Set the month for a specified date according to local time.
// date.setMonth(5); //june (month are zero based)
// console.log(date);

//SetDay(dayValue):
// Sets the day of the month for a specified date according to local time.
// date.setDate(15); // Date object with day of the month set to 15
// console.log(date);

//====================================================
// JavaScript Get Time Method  / Getting Components
//====================================================
// const currentTime = new Date();

// const hours = currentTime.getHours();
// const minutes = currentTime.getMinutes();
// const seconds = currentTime.getSeconds();
// const time = currentTime.getTime(); // getTime() method give time in milliseconds
// console.log(time);

//====================================================
//  JavaScript Set Time Method / Setting components
//====================================================
// const date = new Date();
// console.log(date);

// date.setHours(4);
// date.setMinutes(45);
// date.setSeconds(34);
// date.setTime(1740787074459); // getTime() method give time in milliseconds
// console.log(date);

//========================================================
//  A few useful Methods of the date object in JavaScript
//========================================================

//? 1: toLocalSting(): Return a String representing the date and time portion of
// a date object using the locale's conventions.
// const date = new Date();
// const localString = date.toLocaleString();
// console.log(localString);

//? 2: toLocalDateSting(): Return a String representing the date portion of
// a date object using the locale's conventions.
// const date2 = new Date();
// const localDateString = date2.toLocaleDateString();
// console.log(localDateString);

//? 3: toLocalTimeSting(): Return a String representing the time portion of
// a date object using the locale's conventions.
// const date3 = new Date();
// const localTimeString = date3.toLocaleTimeString();
// console.log(localTimeString);

//? 5: parse(): parses a string representation of date and return the number
// of milliseconds since January 1, 1970 00: 00: 00 UTC
// const dateString = "3/1/2025, 12:23:53 PM";
// const parseDate = Date.parse(dateString);
// console.log(parseDate);

// =====================
// Bonus
// =====================
// let newDate = new Date();
// console.log(Date.now());
// console.log(newDate.getTime()); // Both method have same output

//? Date.now() is a Static method of the Date object
//? Use Date.now() If you want the timestamp right this seconds.
//? It return the current timestamp (number of milliseconds) representing
// current moment.

// ===============================================================
// Interview Question
// ===============================================================

//! 1: write a function to add a specified number of days to a given date.
// const addDaysToDate = (date, extraDay) => {
//   console.log(date);
//   // console.log(date.getDay());
//   // console.log(date.setDate(date.getDate() + extraDay));
//   // console.log(new Date(1711584000000));
//   let updatedDate = date.setDate(date.getDate() + extraDay);
//   updatedDate = new Date(updatedDate);
//   return updatedDate;
// };
// const date = new Date("2024-03-21");
// const newDate = addDaysToDate(date, 7);
// console.log(newDate);

// Question : Write a function to calculate the difference in days between two dates.
const getDaysDifference = (date1, date2) => {
  let oneDay = 24 * 60 * 60 * 1000;
  console.log(oneDay);
  let diff = Math.abs(date1 - date2);
  return Math.round(diff / oneDay);
};
const date1 = new Date("2024-02-20");
const date2 = new Date("2024-03-10");
console.log(getDaysDifference(date1, date2));
