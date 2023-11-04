/* Q.N Find the largest of two number
1.Print num1 is the largest if num1>num2.
2.Print num2 is the largest if num1<num2.
3.Else print num1 and num2 are equal when num1==num2.*/

let num1 = 20;
let num2 = 25;
if (num1 > num2) {
  console.log(`${num1} is Largest than ${num2}`);
} else if (num2 > num1) {
  console.log(`${num2} is Largest than ${num1}`);
} else {
  console.log(`${num1} is equal to ${num2}`);
}
