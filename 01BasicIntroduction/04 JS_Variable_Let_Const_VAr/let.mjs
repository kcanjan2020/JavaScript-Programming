let num1 = 5;
let num2 = 6;
let sum = num1 + num2;
console.log("Sum =", sum);

let name = "Anjan";
console.log(name);
name = "Ariana"; // we can reassign the value of variable using let
console.log(name);
//let name= "Ram"; // Error: cannot redeclare block-scoped variable 'name'

{
  let address = "Rukum West";
  console.log(address); //output: Rukum West
}
//console.log(address); //ReferenceError: address is not defined
