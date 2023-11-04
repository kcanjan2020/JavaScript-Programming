// ***Comparator operator***
console.log(1 === 3); //false
console.log("a" === "a"); //true
console.log(5 == 5); //true
console.log("5" == 5); //true
console.log(5 === 5); //true
console.log("5" === 5); //false
console.log(1 !== 3); //true
console.log(3 >= 1); //true
console.log(6 < 2); //false

// ***Logical Operator***
//=>Logical AND(&&)->true if all true
//=>Logical OR(||)->true if at least one true
console.log(true); //true
console.log(!true); // false
console.log(false && true); //false
console.log(true || false); //true
console.log(true && true); //true

//**** Number */
//=> All empty are false otherwise true
let num = 0;
let num1 = 1;
let num2 = 5;
console.log(Boolean(num)); // false
console.log(Boolean(num1)); //true
console.log(Boolean(num2)); // true

//** String */
let str = "";
let str1 = " ";
let str2 = "o";
let str4 = "Anjan";
console.log(Boolean(str)); //false
console.log(Boolean(str1)); // true=> black space is also a character
console.log(Boolean(str2)); //true
console.log(Boolean(str4)); // true;
