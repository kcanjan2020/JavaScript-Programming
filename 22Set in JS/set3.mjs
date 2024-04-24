let uniqueValue = [
  ...new Set([1, 2, 3, 1, { name: "Anjan" }, { name: "Anjan" }]),
];
console.log(uniqueValue); //[1, 2, 3, { name: "Anjan" }, { name: "Anjan" }];

// => Set only remove the duplicate value of primitive data type but is not valid in case of null

let uniqueValue1 = [...new Set([1, 2, 3, 1, null, null])];

console.log(uniqueValue1);
