// assignment Operator(=): assign value to variable
let a = 5; //assign value 5 to the variable 'a'
console.log("The Value of a =", a);
//output: The value of a =5
let b = 15;

// =>Addition assignment operator(+=)
a += b; //a=a+b
console.log("The value of a=", a); // a=5+15: a<=20
//output: The Value of a =20

//QN. find the sum of 1-10
let sum = 0;
for (let i = 1; i <= 10; i++) {
  sum += i;
  console.log("The value of i=", i, "Sum=", sum); //sum=sum+i;
}
console.log("The sum of first 10 Natural Number is=", sum);

//==> Subtract Assignment operator(-=)
let num1 = 10;
let num2 = 15;
num2 -= num1; //num2=num2-num1;
console.log("Subtract=", num2);
// Output: Subtract=5

//==> Multiplication Assignment Operator(*=)
num2 *= num1; // num2=num2*num1
//  num2=5*10 : num2<=50
console.log("Multiplication=", num2);

//==> Division Assignment Operator(/=)
let y = 125;
let x = 5;
y /= x; // y=y/x
// y=125/5: y<=25
console.log("Division=", y);
// output: Division=25

//==> Modulus Assignment Operator(%=)
y %= x; // y=y%x =>y=Remainder of(y/x) => y=0
console.log("Remainder=", y);

//=> Exponential Assignment Operator(**=)
let n1 = 2;
let n2 = 10;
n1 **= n2; // n1=n1**n2 => n1=n1^n2=1024
console.log("2^10=", n1);
//output: 2^10= 1024
