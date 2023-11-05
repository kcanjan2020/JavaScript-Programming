// Write a program to display 'Hello ! JavaScript' 10 times
let n = 10;
for (let i = 1; i <= n; i++) {
  console.log("Hello ! JavaScript");
}

// Write a program to display number from 1 to 100 using for loop
for (let i = 1; i <= 100; i++) {
  console.log(i);
}

//Q.N write a program to display the sum of n natural numbers
let sum = 0;
let num = 10;
for (let i = 1; i <= num; i++) {
  sum += i;
}
console.log("Sum=", sum);

//Q.N Create the Multiplication table of 2 using for loop
let num1 = 2;
for (let i = 1; i <= 10; i++) {
  console.log("************");
  // console.log(`${num1} X ${i} =`,num1*i)
  console.log(num, "X", i, "=", num * i);
}
