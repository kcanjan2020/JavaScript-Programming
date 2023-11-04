/*Check if input variable is a number or not
1. Print “Variable is not a number” if isNaN() returns true.
2. Else print “Variable is a valid number” if isNaN() returns false. */

/* 
# JavaScript isNaN()
 ==>In JavaScript NaN is short for "Not-a-Number".
==>The isNaN() method returns true if a value is NaN.
==>The isNaN() method converts the value to a number before testing it. */
let num = "19";
if (isNaN(num)) {
  console.log(`${num} is not a number`);
} else {
  console.log(`${num} is a valid Number`);
}

let name = "Anjan";
if (isNaN(name)) {
  console.log(`${name} is not a number`);
} else {
  console.log(`${name} is a valid number`);
}
