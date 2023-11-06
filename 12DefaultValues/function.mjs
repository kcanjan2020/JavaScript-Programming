let sum = (a, b, c = 9) => {
  console.log();
  let sum = a + b + c;
  return sum;
};
let _sum = sum(1, 2);
console.log("Sum=", _sum);
