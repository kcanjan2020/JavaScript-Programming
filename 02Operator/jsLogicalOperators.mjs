//JavaScript Logical Operators

// ==>***** Logical AND(&&) *****
//  => Return true if both operands are true otherwise false
let x = 5;
let y = 10;
let z = 15;
console.log(x < y && x < z); //true
console.log(y > x && z > y); // true
console.log(x > y && x < z); // false

//==>***** Logical OR (||) ******
//==> Returns true if at least one of the operands is true, otherwise false
console.log(x < y || z < y); //true
console.log(x < y || y < z); //true
console.log(x > y || y > z); //false

//==>***** Logical NOT(!)********
// ==> Returns the opposite of the operand
console.log(!true); //false
console.log(!false); //true
