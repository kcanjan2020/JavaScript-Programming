var name = "Anjan";
var surname = "KC";
console.log("fullName =", name, surname);

//=>we can also reassign the value of a variable declared using the `var` keyword:
//=>Hence, We can also redeclare the same name of variable in ones file or one  block of coe
var name = "Anjan";
var name = "Ariana";
console.log(name);
console.log("fullName =", name, surname);

//==>
/*Variables declared with the var keyword can NOT have block scope.
Variables declared inside a { } block can be accessed from outside the block. */
{
  var Address = "Rukum West";
  console.log(Address); //output: Rukum West
  console.log(name); // Output: Ariana
}
console.log(Address); //output: Rukum West
