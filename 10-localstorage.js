//* LocalStorage
//*=================================
//* localStorage object allow you to save key/value pairs in browsers.

// How to add the data to localStorage
// localStorage.setItem("youtubeJsCourse", "adding data");

// How to get the data from localStorage
// localStorage.getItem("youtubeJsCourse");

// How to remove the data from localStorage
// localStorage.removeItem("youtubeJsCourse");

// todo : LocalStorage can only store strings, so when you want to store a
// complex data structure like Array or an object, you need to convert it to a
// string using json.stringify:

//* Json.stringify: Converts a JavaScript object to a json string.

// Useful when you want to send data to a server or store it in a text file, as
// JSON is a common data Interchange formate.
// const data = { Name: "Manzoor", age: "20", city: "Mardan" };
// const jsonString = json.stringify(data);
// console.log(jsonString);
// Output: '{"Name":"Manzoor", "age": 20, "city":"Mardan"}'

//* json.parse: Converts a JSON String to a JavaScript objects

// const jsonString = '{"Name":"Manzoor", "age":"20", "city":"Mardan"}';
// const parseData = json.parse(jsonString);
// console.log(parseData);
// Output: { Name: "Manzoor", age: 20, city: "Mardan" };
