//**** Number to Boolean*/
//=> All empty are false otherwise true
let num = 0;
let num1 = 1;
let num2 = 5;
console.log(Boolean(num)); // false
console.log(Boolean(num1)); //true
console.log(Boolean(num2)); // true

//** String to boolean */
let str = "";
let str1 = " ";
let str2 = "o";
let str4 = "Anjan";
console.log(Boolean(str)); //false
console.log(Boolean(str1)); // true=> black space is also a character
console.log(Boolean(str2)); //true
console.log(Boolean(str4)); // true;
console.log(Boolean(0)); //false
console.log(Boolean("")); //false
console.log(Boolean(" "));
console.log(Boolean(null));
console.log(Boolean(undefined)); //false
console.log(Boolean(NaN)); //false
