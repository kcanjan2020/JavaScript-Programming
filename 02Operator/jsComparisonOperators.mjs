// Comparison OPerator

//=> ******Equal to(==)******
console.log(5 == 5); // Return true

//==>it is also return true if the operands are equal but of different types or not equal at all
console.log("5" == 5); // True
console.log(5 == 9); //false

//==> ****Strict Equal to(===)***
//   => Return true if the operands are equal and the same types
console.log(5 === 5); //true
console.log("5" === 5); //false ==> Operands are equal but there have different types
console.log(typeof 5); // number
console.log(typeof "5"); // String

//==> *****Not equal to(!=)******
console.log(5 != 5); //false
console.log(5 != 6); // true

//==>*****Strict not equal to(!==)*****
console.log(5 !== 5); // false
console.log(5 !== "5"); // true
console.log(6 !== 7); //true

//==>*****Grater than (>)*****
console.log(6 > 5); // true
console.log(5 > 6); // false

//==> ****Less than (<)****
console.log(6 < 5); //false
console.log(5 < 6); // true

//==> Grater than or equal to(>=)
console.log(5 >= 6); // false
console.log(6 >= 5); // true
console.log(5 >= 5); //true

//==>*****Less than and equal to (<=)*****
console.log(5 <= 6); // true
console.log(6 <= 5); //false
console.log(5 <= 5); // true
