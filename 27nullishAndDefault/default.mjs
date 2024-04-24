//=>It only search for truthy values
/* 

console.log(Boolean(null))  //==>false
console.log(Boolean(0))    //==>false 
console.log(Boolean(""))  //==>false
console.log(Boolean(undefined)) //false
console.log(Boolean(" "))  // true => Space is also a character
console.log(Boolean("A"))  //true
console.log(Boolean('o')) //true 
*/

let b = "";
let a = b || 0 || null || "Anjan";
//=>It only search for truthy values
console.log(a); // "Anjan"

console.log(0, null, "Ariana"); // "Ariana"
let c = b || 0 || null || undefined;
console.log(c); // undefined
