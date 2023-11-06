//=>
let {
  name = "Anjan",
  surname,
  age,
  address = "Rukum (West",
} = { surname: "KC", age: 25 };
console.log(name);
console.log(surname);
console.log(address);
console.log(age);
