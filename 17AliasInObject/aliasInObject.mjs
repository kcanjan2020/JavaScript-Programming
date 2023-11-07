//Alias==>उपनाम || Aliasing destructured variables in JavaScript
//==>Alias is a simple way to add a secondary name for a property.

let age = 50;
let {
  name: name1,
  address,
  isMarried,
  age: age1,
} = {
  name: "Anjan KC",
  address: "Rukum (West)",
  isMarried: true,
  age: 25,
};

console.log(age);
console.log(age1);
console.log(name1);
