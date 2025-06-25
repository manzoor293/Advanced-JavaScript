// *==================================
//  Callback hell
// *==================================
// Callback hell, also known as pyramid of Doom refer to a situation in asynchronous
// javascript programming where multiple nested callback are used to handle
// asynchronous operations. This often result in code that is difficult to read,
// understand, and maintain due to its deeply nested structure.

// Example:
const getStudentData = () => {
  setTimeout(() => {
    console.log("Hi, My name is Manzoor");
    setTimeout(() => {
      console.log("Hi, My middle name is Ahmad");
      setTimeout(() => {
        console.log("Hi, I am born in Waziristan");
        setTimeout(() => {
          console.log("Hi, I live in D.I.Khan");
          setTimeout(() => {
            console.log("Hi, I like coding");
            setTimeout(() => {
              console.log("Hi, I fall in love");
              setTimeout(() => {
                console.log("Hi, I want to learn new Tech");
                setTimeout(() => {
                  console.log("Hi, Now I am so Excited ");
                }, 1000);
              }, 1000);
            }, 1000);
          }, 1000);
        }, 1000);
      }, 1000);
    }, 1000);
  }, 1000);
};
getStudentData();
