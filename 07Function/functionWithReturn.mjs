//=>Function without return ==>Call without storing in variable
//=>Function with return ==>Call with storing in variable

//function with return types
let num1 = 5;
let num2 = 15;
let sum = function () {
  let _sum = num1 + num2;
  return _sum;
  console.log("I am function"); // It can not be executed ==> All code written before return
};
let __sum = sum();
console.log(__sum);

//function with return types and argument
let Multiplication = function (num1, num2) {
  let mul = num1 * num2;
  return mul;
};
let _mul = Multiplication(2, 10);
console.log("Multiplication=", _mul);
