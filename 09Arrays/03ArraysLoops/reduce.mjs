let arr = [1, 2, 3, 4, 5];
// 1stStep: 0      1
// 2nd Step: 1      2
// 3rd Step: 3      3
// 4th Step: 6      4
// 5th Step: 10     5
let output = arr.reduce((pre, cur) => {
  return pre + cur; //=>0+1=>1+2=>3+3=>6+4=10+5=>15
}, 0);
console.log("Sum=", output);

// find the product of all elements of array using reduce
let arr1 = [1, 2, 3, 4];

let product = arr1.reduce((pre, cur) => {
  return pre * cur;
}, 1);

console.log("Product=", product);

// Find the sum of all even elements of array using reduce

let array = [1, 2, 3, 4, 5, 6, 8];
let sum = array.reduce((pre, cur) => {
  if (cur % 2 === 0) {
    return pre + cur;
  } else {
    return pre;
  }
}, 0);

console.log(sum);
