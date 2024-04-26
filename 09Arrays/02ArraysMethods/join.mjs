// Reverse String
let str = "abc";
let strArr = str.split("");
console.log(strArr);

let revArray = strArr.reverse();
console.log(revArray);

let revString = revArray.join("");
console.log();

// or
let revStr = str.split("").reverse().join("");
console.log(revStr);

// ["my name is Anjan"]
let info = "my name is Anjan";
let revStr1 = info.split(" ").reverse().join(" ");
console.log(revStr1);
