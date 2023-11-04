//string to number
let str = "Anjan";
let result = Number(str);
console.log(result); // NaN(Not a Number)

let str2 = "12345";
console.log("Types of str2=", typeof str2);
let strToNumber = Number(str2);
console.log("Types of strToNumber is ", typeof strToNumber);
console.log(Number("3256e-1"));

//Boolean to Number
console.log(Number(true)); // output: 1
console.log(Number(false)); //output: 0

//Empty String and null value to number
console.log(Number(null)); // output:0
console.log(Number(" ")); //output:0
