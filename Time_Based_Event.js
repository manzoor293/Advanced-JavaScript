//*===============================================
// Timing Based Events In JavaScript
//*===============================================

// 1: setTimeout():
//? The setTimeout function is used to execute a function or code of block after
// a specified delay in milliseconds.

// function delayFunction(x) {
//   console.log("This function was delayed by 2000 milliseconds (2 seconds)", x);
// }
// setTimeout(delayFunction, 2000);
// setTimeout(() => delayFunction(5), 2000);

//* 2: setInterval():
//? The setInterval function is used to repeatedly execute a function or code block
// after a specified interval in milliseconds.

//? ex- mind game of counting seconds on mind and after every second 5secs we need to
// to draw a straight line on paper.
// and it will continue till I told you to stop

// function repeatedFunction() {
//   console.log(
//     "Thi Function will be repeated every 1000 milliseconds (1 second)"
//   );
// }
// setInterval(repeatedFunction, 1000);

//* 3 Clearing Timeout with clearTimeout:
//? If you want to clear a schedule timeout before it occurs, you can use the
// clearTimeout function.

//? The global clearTimeout() method cancel a timeout previously established by
// calling the setTimeout().

// Syntax:
// clearTimeout(timeoutID)

// function delayFunction() {
//   console.log("This function was delayed by 2000 milliseconds (2 seconds");
// }
// const myWork = setTimeout(delayFunction, 2000);
// clearTimeout(myWork);

// todo cancel the timeout before it occurs

//* 4. Clear Interval with clearInterval:
// If you want to cancel a schedule Interval before it occurs , You can use
// the clearInterval function.

//? The global clearInterval() method cancel a timeout previously established
// by calling a setInterval().

// function repeatedFunction() {
//   console.log(
//     "Thi Function will be repeated every 1000 milliseconds (1 second)"
//   );
// }
// const intervalID = setInterval(repeatedFunction, 1000);
// clearInterval(intervalID);

// todo cancel the Interval

// ==================================================
//    Challenge Time
// ==================================================
/* Write a javascript program to define a function called repeatedFunction.
 This function should log the message "Thi Function will be repeated every
  1000 milliseconds (1 second)" to the console. Then setup and interval using 
  setInterval() to call repeatedFunction every 1000 milliseconds. Additionally
  after 5 second have elapsed, use setTimeout() to clear the interval previously
  set up. Make sure to log the message. "Interval cleared after 5 seconds" 
  When the interval is cleared.*/
function repeatedFunction() {
  console.log(
    "Thi Function will be repeated every 1000 milliseconds (1 second)"
  );
}

repeatedFunction();

const intervalID = setInterval(repeatedFunction, 1000);

setTimeout(() => {
  clearInterval(intervalID);
}, 5000);
