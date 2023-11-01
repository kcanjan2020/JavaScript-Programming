// var name = "Anjan";
// var surname = "KC";
// console.log("fullName =", name, surname);

//=>we can also reassign the value of a variable declared using the `var` keyword:

// var name = "Anjan";
// var name = "Ariana";
// console.log(name);

//==>
/*Variables declared with the var keyword can NOT have block scope.
Variables declared inside a { } block can be accessed from outside the block. */
// {
//   var name = "Anjan";
//   console.log(name); //output: Anjan
// }
// console.log(name); //output: Anjan

// {
//   let name = "Ariana";
//   console.log(name); //output: Ariana
// }
// console.log(name); //output: name is not defined


// const name = " Anjan";
// name = "Ariana"; // const can not reassignment and redeclare
// console.log(name); //output:TypeError: Assignment to constant variable.
 //const name="KC" ;  // can not redeclare block-scoped variable 'name'