// **** split and Join Method *****
// 1. split() => String to Array Conversion
// "Anjan" => ["A","n","j"]
let name = "Anjan";
let strToArray = name.split("");
console.log(strToArray);

let sentence = "my name is Anjan KC";
let stnToArray = sentence.split(" ");
console.log(stnToArray);

// 2. join() => Array to String

let arr = ["A", "n", "j", "a", "n"];
let arrToString = arr.join("");
console.log(arrToString);

let arr2 = ["my", "name", "is", "Anjan", "KC"];
let arrayToString = arr2.join(" ");
console.log(arrayToString);
