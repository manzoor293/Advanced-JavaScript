//* =================
//* Closure:
//* =================

//? A closure is created when an inner function has access  to the variable of its
// outer function , Even after the outer function has finished executing.

// function outerFunction() {
//   var outerVariable = "I'm  from outer";

//   function innerFunction() {
//     console.log(outerVariable);
//   }

//   return innerFunction;
// }

// var closureFunction = outerFunction();
// // closureFunction();
// console.dir(closureFunction);

// Note:
/* This is where object, closure and other dynamically allocated data are stored.
while the Call Stack manage the flow of execution */

// It might be beneficial to clarify that the call stack is simply the execution order
// and it is not the same thing as computer memory, which is where the variable are
// held. So even though the function was removed from the call stack, its variable are
// stilled maintained in memory until they are no longer needed and  garbage
// collection come and remove them.

// Also one more example:

function multiplier(factor) {
  return function (number) {
    console.log(factor, number);

    return factor * number;
  };
}

const double = multiplier(2);
console.log(double(5));
