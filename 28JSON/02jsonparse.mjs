//JavaScript function JSON.parse() is used to convert text into a JavaScript object:

let list = [1, 2, 3, 4, 5];
console.log(list); // [1,2,3,4,5]

let listStr = JSON.stringify(list);
console.log(listStr); // '[1,2,3,4,5]'
console.log(typeof listStr); //string

//string back to array
let listStrParse = JSON.parse(listStr);
console.log(listStrParse); // [1,2,3,4,5]
console.log(typeof listStrParse); // object
