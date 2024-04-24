// Interview Question [1,2,3,1]=[1,2,3]
let arr = [1, 2, 3, 1];
let args = new Set(arr);
console.log(args);
let output = [...args];
console.log(output);
// or
let uniqueValue = [...new Set([1, 2, 3, 1])];
console.log(uniqueValue);
