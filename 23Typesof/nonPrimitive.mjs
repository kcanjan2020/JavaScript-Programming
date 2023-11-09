//=>Non primitive Data Types: Array,object,Set

console.log(typeof null); //object

let arr = [1, 2, 3, 4, 5, 6];
let type = typeof arr;
console.log(type); //object

let set = new Set([1, 2, 3, 4, 5]);
console.log(typeof set); //object

console.log(typeof null); //object

let info = { name: "Anjan", isMarried: true };
console.log(typeof info); //object

let error = new Error("Error");
console.log(typeof error); //object
