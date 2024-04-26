// find the product of all element using reduce

let arr = [1, 2, 3, 4, 5];
let product = arr.reduce((pre, cur) => {
  return pre * cur;
}, 1);

console.log("Product=", product);
