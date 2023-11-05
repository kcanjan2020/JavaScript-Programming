// Write a program to display 'Hello ! JavaScript' 10 times using do while loop
let i = 0;
do {
  console.log("Hello ! JavaScript");
  i++;
} while (i < 10);

//Write a program to display number from 1 to 100 using do while loop
let j = 1;
do {
  console.log(j);
  j++;
} while (j <= 100);
// =>Q.N write a program to display the sum of n natural numbers using do while loop
let num = 10;
let sum = 0;
let k = 1;
do {
  sum += k;
  k++;
} while (k <= num);
console.log("Sum=", sum);

//Q.N Create the Multiplication table of 2 using do while loop
let number = 2;
let m = 1;
do {
  console.log(`${number} X ${m} =`, number * m);
  console.log("************")
  m++;
} while (m <= 10);
