// ==> Convert to String Explicitly
//==> To convert other data types to string,we can use either String() or toString

//*** Number to String */
let num = 1234;
console.log("Types of num is=", typeof num);
let numToString = String(num);
console.log("Types of numToString is", typeof numToString); // "1234"
console.log(String(1 + 2)); //'3'

console.log(String(null)); //null
console.log(String(undefined)); //undefined
console.log(String(NaN)); // NaN
console.log(true); //  true
console.log(false); //false

// we can also used toString method to convert other data types to string
let number = 12345;
let result = number.toString();
console.log(result);
console.log(typeof result);

console.log(true.toString()); //true
console.log(false.toString()); //false
