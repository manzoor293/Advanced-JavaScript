//============================================
//        CONCEPT ABOUT STRING
//============================================
// String Property:
// Length: Property that return the length of the string
// const words = "Hellow, Worlds";
// console.log(words.length);

//=======================
//* Escape Character:
// ======================
// Escape Character: In Javascript the backslash "\" is used as a Escape character.
// it allow your to include speceial character in a string.

//   Code      Result         Description
//1    \'          '           Single quotes
//2    \"          "           Double quotes
//3    \\          \           Backslash

// let text = "My name is 'Manzoor Ahmad' & I am a Full Stack web developer";
// console.log(text);

// (OR)   To include Special charcters in a string

// let text = 'My name is "Manzoor Ahmad" & I am a Full Stack web developer';
// console.log(text);

// Another Method to include both single and double quote in a String

// let text = "My name is \"Manzoor Ahmad\" & I am a 'Full Stack' web developer";
// console.log(text);
// let text1 = "My name is \"Manzoor Ahmad\" &\nI am a 'Full Stack' web developer";
// console.log(text1);
// let text2 =
//   "My name is \"Manzoor Ahmad\" & \\ I am a 'Full Stack' web developer";
// console.log(text2);

//* ====================================
//*  Sring Search Method
//* ====================================

//*2 String Search Method
//? a: Indexof(): The indexof() Method return the index (position) of the first occuranc
// of a string, or it return -1 if the string is not found
// Syntax
// indexof(searchString)
// indexof(searchString, position)

// let text = "Manzoor Ahmad";
// console.log(text.indexOf("Ahmad"));
// The Indexof() method is case sensitive.

// ===========  Converting string into Array ========
// Example and also find the index of of it charactre or element
// let text = "Raheela Mahsood";
// let strArray = Array.from(text);
// console.log(strArray);
// let strmap = strArray.map((currElem, index) => `${currElem} - ${index}`);
// console.log(strmap);

//? b: lastIndexof(); The lastindexof() method returns the index of the last occurance
// of a specified text in a string:
// Syntax:
// lastindexof(searchString)
// lastindexof(searchString, position)

// let text = "Hello Javascript, welcome to our world best Javascript course";
// // let index = text.lastIndexOf("Javascript");
// // let index = text.indexOf("Javascript");
// let index = text.lastIndexOf("Javascript", 40); // becaue of backword serach
// console.log(index);

//? c: Search(): The search() method searches a string for a string
// (or a regular expresion) and returns the position of the match.
//* Return the index number where the first match is found, return -1 if
// no match is found.
// let text = "Hello JavaScript, welcome to our world best JavaScript course";
// // let result = text.search("Javascript");
// let result = text.search(/Javascript/i); // i ignore the case Sensitivity
// console.log(result);

//* Important Tips:
// The search() method cannot  take a second start position argument.
// The indexof() method cannot take powerful result values (regular Expressions).
// They accept the same arguments (parameter), and return the same value

//=================== match() Method =================
//? match(): Return an array of the matched values or null if no match is found.

// let text = "Hello JavaScript, welcome to our world best JavaScript course";
// let result = text.match("Javascript");
// let result = text.match("JavaScript");
/*// todo here the js converts the normal text into regular expression
text.match(/Javascript/); without the global flag */
// let result = text.match(/JavaScript/gi);
// console.log(result);

/*//? matchAll() : Return an iterator of all matches, providing detailed information about each 
match. Returns an empty iterator if no match is found.*/
// let text = "Hello JavaScript, welcome to our world best JavaScript course";
// let matchresult = text.matchAll("JavaScript");
// let matchresult = text.matchAll("JavaScript");
/*// todo here the js converts the normal text into regular expression
text.matchAll(/JavaScript/g); also adds the g flag at the end.*/

// console.log(...matchresult); // (...) spread opretor
// OR
// for (let item of matchresult) {
//   // console.log(item);
//   console.log(item[0]);
// }

//? includes(): Returns true if the string contians the specified
// value, and false otherwise.
// let goal = "I want to become a world best Full Stack web developer ";
// let includegoal = goal.includes(/wan/);
// let includegoal = goal.includes("wan");
// console.log(includegoal);

// Note : includes() is case sensitive. includes() is an ES6 feature.

//? startWith(): The startsWith() method returns true if a string begins with a specified value.Otherwise it returns false:
// let text = "Hello JavaScript, welcome to our world best JavaScript course";
// let result = text.startsWith("Hello");
// console.log(result);

//* Start position for the search can be specified
// let result = text.startsWith("welcome", 17);
// let result = text.startsWith("welcom, 18");
// console.log(result);

//? endsWith: The endsWith() method returns if a string ends
// with a specified value. Otherwise it returns false
// let result = text.startsWith("welcome");
// let result = text.endsWith("course");
// console.log(result);

//===============================================
// Extracting String Parts:
//===============================================
//! Extracting String Parts:

//?/* String.prototype.substr() it is deprecated ❌

//? a: slice() extracts a part of a string and returns the extracted part in a new string.
// 1: JavaScript counts position from zero.
// 2: slice() extracts up to but not including indexEnd.
// Syntax:
// slice(start,end);
// let string = "Manzoor Ahmad Pashteen";
// // let extracString = string.slice(8, 13);
// let extracString = string.slice(8);
// console.log(extracString);

//? a: substring: Extracts a portion of the string based on starting and ending indices.
//* camelCase is used to separate words, substring is not to be intended as Sub String but as Substring
// Syntax:
// substring(indexStart) // index start with 0
// substring(indexStart, indexEnd)

// ======== Difference b/w substring() & slice() =============
//* substring() is similar to slice(). The difference is that start and end values
// less than 0 are treated as 0 in substring().
// let text = "Hello JavaScript, welcome to our world best JavaScript course";
// // let subtext = text.substring(-6);
// let subtext = text.slice(-6);
// console.log(subtext);

//! Homework
// let text = "Hello JavaScript, welcome to our world best JavaScript course";
// let subtext = text.substring(0);
// let subtext = text.substring(1);
// let subtext = text.substring(-5);
// console.log(subtext);

//! Similarities
/* todo In both the slice() and substring() methods, the end
parameter indicates the ending index up to which the extraction
occurs, but the character at the end index is excluded from the 
extracted substring.*/

//* ================================================
//*  Interview Question
//* ================================================
//! what is the output for the following code?

// let text = "Hello JavaScript, welcome to our world best JavaScript course";
// let result = text.slice(1);
// let result = text.replace("H", "");
// let result = text.replaceAll("JavaScript", "");
// let result = text.substring(1);
//? Optional
// let result= text.replace("JavaScript","Manzoor Ahmad");
// let result = text.replaceAll("JavaScrip","Manzoor Ahmad");
// console.log(result);

//* ===================================
//* Extracting String Characters
//* ===================================
//! Extracting String Characters
// There are 3 methods for extracting string characters:

//? The charAt(position) Method
//? The charCodeAt(position) Method
//? The at(positon) Method

//* ====================================
//? The at(position) Method

//? charAt(): The charAt() method returns the character at a specified index (position) in a string
// let text = "Hello JavaScript, welcome to our world best JavaScript course";
// // let result = text.charAt(6);
// let result = text.charAt(-6);
// console.log(result);

/*//? charCodeAt(): The charCodeAt() method returns the code of the character at a specified index in a string.
The method returns a UTF-16 code (an integer between 0 and 65535).*/
// let text = "Hello JavaScript, welcome to our world best JavaScript course";
// let result = text.charCodeAt(7);
// // let result = text.charCodeAt(-6);
// console.log(result);

// todo ES2022  Introduced the string method at():
//? at(): method returns the character at a specified index (position) in a string.
// The at() method return the same as carAt().
// let text = "Hello JavaScript, welcome to our wordl best JavaScript course";
// let result = text.at(0);
// // let result = text.at(-6); // it also work on negative index by backward search
// console.log(result);

// Note:
// Th at() method is a new addition to JavaScript.
// it allowas the use of negative indexes while charAt() do not.
// How you can use my String, at(-2) intead of charAt(myString.length - 2).

//* =============================================
//* Replacing String Content
//* =============================================
//! Replacing String Content
//? replace(): The replace() method is used to replace a speified value with another Value.
// const str = "Hello ,world";
// const newStr = str.replace("world", "JavaScript");
// console.log(newStr);

// Case-Insensitive Replacement: To perform a case-insensitive repalcement, you can use the i flag
// in the regular expression.
// let originalString = "Hello, World! How are you, World?";
// // let replacedString = originalString.replace(/world/i, "Manzoor");
// let replacedString = originalString.replace(/World/g, "Manzoor");
// console.log(replacedString);

//! Other Useful Methods:
//? toUpprCae() and toLowerCase(): Converts the string to uppercase or loweercase.
// const str = "javascript";
// console.log(str.toLocaleUpperCase());
// console.log(str.toLocaleLowerCase());

//? trim: Remove whitespace from both ends ot the string.
// const str = "   Hello, World!   ";
// console.log(str.length);

// let trimStr = str.trim();
// console.log(trimStr);
// console.log(trimStr.length);

//? Split : Split the string into an array of substrings based on a spcified delimiter.
// const str = "apple,orange,banana";
// console.log(str);
// const strArray = str.split(","); // convert stirng into array
// console.log(strArray);
// console.log(str.split(",").reverse()); // display  the array in reverse formate.
// console.log(str.split(",").reverse().join()); // now join() method convert the reverse array into string.

//* ==================================================================
//* Interview Question-Strings
//* ==================================================================

// ================ Question # 1 ==========================
/* Write a javaScript function that prints the letters 'a' through 'z'
in the console. You should use a loop to iterate through the letters and print each one on a new line.?*/

// console.log("a".charCodeAt(0));
// console.log("z".charCodeAt(0));
// console.log(String.fromCharCode(122));

// for (let char = 97; char <= 122; char++) {
//   // console.log(char);
//   console.log(String.fromCharCode(char));
// }

// ================ Question # 2 ==========================
/* Write a function to count the numbers of vowels in a string?*/
// function str(string) {
//   let vowels = "aeiou";
//   let count = 0;
//   for (let char of string) {
//     if (vowels.includes(char)) {
//       count++;
//     }
//   }
//   return count;
// }
// const result = str("My name is Manzoor Ahmad, & I love you Raheela");
// console.log(result);

// ================ Question # 3 ==========================
/* Write a function to check if all the vowels present in a string or not? */
// const checkAllVowelPresentOrNot = (str) => {
//   let vowels = "aeiou";
//   for (let char of vowels) {
//     // console.log(str.includes(char));
//     if (!str.includes(char)) return false;
//   }
//   return true;
// };
// console.log(
//   checkAllVowelPresentOrNot("My name is Manzoor Ahmad, & I love you Raheela")
// );

/*//! 4: Write a JavaScript function to chech if the given string is 
Pangram or not? */

// const pangramChecker = (str) => {
//   let inputArr = str.toLowerCase().split("");
//   // console.log(inputArr);
//   // console.log("a".charCodeAt(0));
//   // console.log("z".charCodeAt(0));
//   const values = inputArr.filter((curElem) => {
//     return (
//       curElem.charCodeAt() >= "a".charCodeAt() &&
//       curElem.charCodeAt() <= "z".charCodeAt()
//     );
//   });

//   // console.log(values);

//   // return new Set(values).size === 26; // size use with set{}

//   return [...new Set(values)].length === 26; // length use with Array
// };

// console.log(pangramChecker("The quick brown fox jumps over the lazy dog"));
