// Perform arithmetic operations on two numbers
let evalNumber = (num1, num2, op) => {
  if (op === "+") {
    console.log(`Sum of ${num1} and ${num2} is ${num1 + num2}`);
  } else if (op === "-") {
    console.log(`Difference of ${num1} and ${num2} is ${num1 - num2}`);
  } else if (op === "*") {
    console.log(`Product of ${num1} and ${num2} is ${num1 * num2}`);
  } else if (op === "/") {
    console.log(`Division of ${num1} and ${num2} is ${num1 / num2}`);
  } else if (op === "%") {
    console.log(`Modulus of ${num1} and ${num2} is ${num1 % num2}`);
  } else {
    console.log(`${op} is a invalid Operator`);
  }
};
evalNumber(10, 3, "+"); // Sum of 10 and 3 is 13
evalNumber(10, 3, "-"); // Difference of 10 and 3 is 7
evalNumber(10, 3, "*"); // Product of 10 and 3 is 30
evalNumber(10, 3, "/"); // Division of 10 and 3 is 3.33333333333
evalNumber(10, 3, "%"); // Modulus of 10 and 3 is 1
evalNumber(10, 3, "&"); // & is a invalid Operator
