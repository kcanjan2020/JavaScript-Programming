# JavaScript Operators

==>In JavaScript, an operator is a special symbol used to perform operations on operands (values and variables).

For example

`5+10; // Output: 15`

==>Here `+` is an operator that performs addition, and `5` and `10` are operands.

#  Different types of Operator in JavaScript

1. Assignment Operators
2. Arithmetic Operators
3. Comparison Operators
4. Logical Operators
5. Bitwise Operators
6. String Operators

# JavaScript Assignment Operators
==> Assignment Operators assign the values to the JavaScript variable.

| **Operator** | **Description**               | **Example**               |
|:--------:|:-------------------------:|:--------------------------------:|
| `=`        | Assignment       | `a = 5` Assign 5 to the variable a : `a<==5` |
| `+=`       | Addition assignment       | `a += b` is the same as `a = a + b`  |
| `-=`       | Subtraction assignment    | `a -= b` is the same as `a = a - b`  |
| `*=`       | Multiplication assignment | `a *= b` is the same as `a = a * b`  |
| `/=`       | Division assignment       | `a /= b` is the same as `a = a / b`  |
| `%=`       | Modulus assignment        | `a %= b` is the same as `a = a % b`  |
| `**=`       | Exponential assignment       | `a **= b` is the same as `a = a ** b`  |

```js
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
//output:Remainder=0

//=> Exponential Assignment Operator(**=)
let n1 = 2;
let n2 = 10;
n1 **= n2; // n1=n1**n2 => n1=n1^n2=1024
console.log("2^10=", n1);
//output: 2^10= 1024

```

# JavaScript Arithmetic Operators

==>Arithmetic operators are used to perform mathematical calculations. Here are the most common arithmetic operators in JavaScript:

| **Operator** | **Description** | **Example**           |
|:--------------:|:-----------------:|:------------------------: |
| `+`            | Addition        | `5 + 5` evaluates to `10`   |
| `-`            | Subtraction     | `10 - 5` evaluates to `5`    |
| `*`            | Multiplication  | `3 * 5` evaluates to `15`    |
| `/`            | Division        | `25/ 5` evaluates to `5`     |
| `%`            | Modulus         | `5 % 2` evaluates to `1`     |
| `**`           | Exponentiation  | `2 ** 10` evaluates to `1024`|
| `++`           | Increment | `++2 or 2++` evaluates to `3` (increments by 1)|
| `--`           | Decrement | `--2 or 2--` evaluates to `1` (Decrements by 1)|

 Here are some examples of arithmetic operators in action:

```js
// Arithmetic Operators

let num1 = 5;
let num2 = 15;
//1. Addition
console.log(1 + 2);
let sum = num1 + num2;
console.log("Sum=", sum);

//Subtraction
console.log(9 - 5);
let sub = num2 - num1;
console.log("Subtract=", sub);

//Multiplication
console.log(5 * 5);
let mul = num1 * num2;
console.log("Multiplication=", mul);

//Division
console.log(25 / 5);
let div = num2 / num1;
console.log("Division=", div);

//Modulus
console.log(10 % 3);
let rem = num1 % num2;
console.log("Remainder=", rem);

//Exponential
console.log(2 ** 10);
let pw = num1 ** num2;
console.log("Power=", pw);
//output: Power=1024


//Increment 
let x=5;
console.log(x++); // Print 5 and then increased to 6
console.log(x) // x=6
console.log(++x) // x is now 7

let y=5;
console.log(++y) // y is now 6
console.log(y++) // Print 6 and then increased to 7
console.log(y)


// Decrement
let a=5;
console.log(a--) // print 5 and then decremented to 4
console.log(a) // print 4 a=4
console.log(--a) //a is now 3
 let b=6;
 console.log(--b) // b is now 5
 console.log(b)  // print b=5 
 console.log(b--) // print 5 and then decremented to 4
 console.log(b) // print 4


```

==>The **exponential** operator (`**`) raises the first operand to the power of the second operand. For example, `2 ** 10` evaluates to `1024`, since `2` raised to the power of `10` is `1024`.

 **==>Post increment and Pre increment**

```js
let a = 5;

// Post-increment: returns the value of a, then increments it
console.log(a++); // output: 5
console.log(a);   // output: 6

// Pre-increment: increments the value of a, then returns it
console.log(++a); // output: 7

// Post-decrement: returns the value of a, then decrements it
console.log(a--); // output: 7
console.log(a);   // output: 6

// Pre-decrement: decrements the value of a, then returns it
console.log(--a); // output: 5
```

==>In the code above, we first initialize the variable `a` with the value `5`. Then we use the post-increment operator (`a++`) to return the value of `a` (which is `5`), and then increment it to `6`. We log the value of `a++` to the console and get the output `5`, and then log the value of a to the console and get the output `6`.

==>Next, we use the pre-increment operator (`++a`) to increment the value of `a` to `7`, and then return its new value. We log the value of `++a` to the console and get the output `7`.

==>Then, we use the post-decrement operator (`a--`) to return the value of `a` (which is `7`), and then decrement it to `6`. We log the value of `a--` to the console and get the output `7`, and then log the value of `a` to the console and get the output `6`.

==>Finally, we use the pre-decrement operator (`--a`) to decrement the value of `a` to `5`, and then return its new value. We log the value of `--a` to the console and get the output `5`.

# JavaScript Comparison Operators
Comparison operators are used to compare two values and return a Boolean value (`true` or `false`) depending on whether the comparison is true or false. Here are the most common comparison operators in JavaScript:

| **Operator** | **Description**          | **Example**                  |
|:------------:|:------------------------:|:-----------------------------:|
| `==`           | Equal to                 | `5 == 5` evaluates to `true`      |
| `===`          | Strict equal to (true=>if the operands are equal and of the same types)          | `5 === "5"` evaluates to `false`  |
| `!=`          | Not equal to             | `5 != 4` evaluates to `true`      |
| `!==`          | Strict not equal to (true=>if the operands are equal but of different types or not equal at all)     | `5 !== "5"` evaluates to `true`   |
| `>`            | Greater than             | `6 > 4` evaluates to `true`       |
| `<`            | Less than                | `6 < 4` evaluates to `false`      |
| `>=`           | Greater than or equal to | `6 >= 6` evaluates to `true`      |
| `<=`           | Less than or equal to    | `6 <= 4` evaluates to `false`     |

Here are some examples of comparison operators in action:

```js
// Comparison OPerator

//=> ******Equal to(==)******
console.log(5 == 5); // Return true

//==>it is also return true if the operands are equal but of different types or not equal at all
console.log("5" == 5); // True
console.log(5 == 9); //false

//==> ****Strict Equal to(===)***
//   => Return true if the operands are equal and the same types
console.log(5 === 5); //true
console.log("5" === 5); //false ==> Operands are equal but there have different types
console.log(typeof 5); // number
console.log(typeof "5"); // String

//==> *****Not equal to(!=)******
console.log(5 != 5); //false
console.log(5 != 6); // true

//==>*****Strict not equal to(!==)*****
console.log(5 !== 5); // false
console.log(5 !== "5"); // true
console.log(6 !== 7); //true

//==>*****Grater than (>)*****
console.log(6 > 5); // true
console.log(5 > 6); // false

//==> ****Less than (<)****
console.log(6 < 5); //false
console.log(5 < 6); // true

//==> Grater than or equal to(>=)
console.log(5 >= 6); // false
console.log(6 >= 5); // true
console.log(5 >= 5); //true

//==>*****Less than and equal to (<=)*****
console.log(5 <= 6); // true
console.log(6 <= 5); //false
console.log(5 <= 5); // true

```

# JavaScript Logical Operators

| **Operator** | **Description** | **Example** |
|:------------:|:----------------:|:------------:|
| `&&`           | Logical AND.  Returns true if both operands are true, otherwise false.     | `true && true` evaluates to `true` |
| `\|\|`         | Logical OR. Returns true if at least one of the operands is true, otherwise false.      | `true \|\| false` evaluates to `true` |
| `!`            | Logical NOT. Returns the opposite of the operand. If it's true, it returns false. If it's false, it returns true.      | `!true` evaluates to `false` |

==>In JavaScript, there are three logical operators: `&&` (logical AND), `||` (logical OR), and `!` (logical NOT).

==>The && operator returns true if both operands are truthy, and false otherwise. Here's an example:

```js
//JavaScript Logical Operators

// ==>***** Logical AND(&&) *****
//  => Return true if both operands are true otherwise false
let x = 5;
let y = 10;
let z = 15;
console.log(x < y && x < z); //true
console.log(y > x && z > y); // true
console.log(x > y && x < z); // false

//==>***** Logical OR (||) ******
//==> Returns true if at least one of the operands is true, otherwise false
console.log(x < y || z < y); //true
console.log(x < y || y < z); //true
console.log(x > y || y > z); //false

//==>***** Logical NOT(!)********
// ==> Returns the opposite of the operand
console.log(!true); //false
console.log(!false); //true

```

# JavaScript String Operators
==> in JavaScript, We can also use the `+` operators to concatenate (`join`)  two or more strings.

Here's an example:

```js
// String Concatenation operator(+)
let name = "Anjan";
let surname = "KC";
let fullName = name + " " + surname;
console.log(fullName); // Anjan KC
console.log(name + surname); //AnjanKC

```

# Js typeOf operator
=>returns a string indicating the data type

Here's an Example

```js
let x;
console.log(typeof x); //undefined
let a = 56;
console.log(typeof a); // number
let b = 46.435346;
console.log(typeof b); // number
let name = "Anjan";
console.log(typeof name); //string
let isMarried = true;
console.log(typeof isMarried); //boolean
let arr = [1, 2, 3, "4", 5];
console.log(typeof arr); //Array
let obj = { name: "Anjan", age: 25 };
console.log(typeof obj);
```
