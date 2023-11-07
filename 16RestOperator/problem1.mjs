// make a function that takes any number of input and return the sum of all those inputs.....

let sum = (...input) => {
  //input: [1,2,3,4,...]
  //reduce()=> syntax: let outArr=inArr.reduce(fun,pre)
  let output = input.reduce((pre, cur) => {
    let sum = pre + cur;
    return sum;
  }, 0);
  //console.log("Sum=", output);
  return output;
};

let _sum = sum(1, 2, 3, 4, 5, 6, 7, 8, 9, 10);
console.log("Sum=", _sum);
