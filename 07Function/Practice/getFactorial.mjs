//Write a function to find Factorial of a number

let factorial = (num) => {
  let fact = 1;
  while (num != 0) {
    fact = fact * num;
    num = num - 1;
  }
  return fact;
};

let originalNum = 5;
let _fact = factorial(originalNum);
console.log(`Original Number ${originalNum}: ${_fact}`);
