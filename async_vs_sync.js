//*======================================
// Synchronous code execute line by line, blocking further execution
// until each line completed.while Asynchronous code allow other code
// to continue executing while it waits for asynchronous operation
// to complete.

// const fun2 = () => {
//   console.log("fun2 start and ends");
// };
// const fun1 = () => {
//   console.log("fun1 start");
//   fun2();
//   console.log("fun1 end");
// };
// fun1();

const fun2 = () => {
  setTimeout(() => {
    console.log("fun2 start and ends");
  }, 2000);
};
const fun1 = () => {
  console.log("fun1 start");
  fun2();
  console.log("fun1 end");
};
fun1();
