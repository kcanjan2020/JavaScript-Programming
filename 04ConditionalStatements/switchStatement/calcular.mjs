//write a program to make a simple calculator with the switch statement.
let operator = '/';
let num1 = 5;
let num2 = 15;
let result;
switch (operator) {
  case "+":
    result = num1 + num2;
    break;
  case "-":
    result = num2 - num1;
    break;
  case "*":
    result = num1 * num2;
    break;
  case "/":
    result = num2/ num1;
    break;
  case "%":
    result = num2 % num1;
    break;
    default:
        result="Invalid Operator"
        break;
}
console.log("Result=", result);
