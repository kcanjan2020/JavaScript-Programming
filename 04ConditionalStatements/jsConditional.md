# JavaScript Conditional Statements

==>Conditional statements are used to perform different actions based on different conditions.

==>In JavaScript, there are three forms of the `if else` statements.

1. if statement
2. if... else statements
3. if..else if..else statement

* Use `if` to specify a block of code to be executed, if a specified condition is true
* Use `else` to specify a block of code to be executed, if the same condition is false
* Use `else if` to specify a new condition to test, if the first condition is false
* Use `switch` to specify many alternative blocks of code to be executed

# The if Statement
==>Use the `if` statement to specify a block of JavaScript code to be executed if a condition is true.

Syntax

```js
if (condition) {
  //  block of code to be executed if the condition is true
}
```

Here's and Example

==> check if the number is positive

```js
// check if the number is positive
let num = 15;
if (num > 0) {
  console.log("The Number is Positive");
  console.log(`${num} is a positive number`);
}

```

# The if else Statement
==>Use the `if` statement to specify a block of JavaScript code to be executed if a condition is true.

==>Use the `else` statement to specify a block of code to be executed if the condition is false.

```js
if (condition) {
  //  block of code to be executed if the condition is true
} else {
  //  block of code to be executed if the condition is false
}
```

For Example:

==>Write a program that checks if a number is even or odd.

```js
let num = 14;
if (num % 2 === 0) {
  console.log(`${num} is a Even Number`);
  // console.log(num,"is a Even Number")
} else {
  console.log(`${num} is a Odd number`);
}
```

==> Q.N Find the largest of two number

```js
/* Q.N Find the largest of two number
 */
let num1 = 17;
let num2 = 128;
if (num1 > num2) {
  console.log(`${num1} is the largest than ${num2}`);
} else {
  console.log(`${num2} is the Largest number than ${num1}`);
}
```

==>Check if input variable is a number or not

```js
/*Check if input variable is a number or not
1. Print “Variable is not a number” if isNaN() returns true.
2. Else print “Variable is a valid number” if isNaN() returns false. */

/* 
# JavaScript isNaN()
 ==>In JavaScript NaN is short for "Not-a-Number".
==>The isNaN() method returns true if a value is NaN.
==>The isNaN() method converts the value to a number before testing it. */
let num = "19";
if (isNaN(num)) {
  console.log(`${num} is not a number`);
} else {
  console.log(`${num} is a valid Number`);
}

let name = "Anjan";
if (isNaN(name)) {
  console.log(`${name} is not a number`);
} else {
  console.log(`${name} is a valid number`);
}
```

==>Find the a number is present in given range

```js
/*Find the a number is present in given range
Print “Between the range” if num is between start and end values
Else Print “Outside the range” since num is outside start and end values.*/

let num = 20;
let start = 10;
let end = 50;
if (num >= start && num <= end) {
  console.log(`${num} is between the range ${start} and ${end}`);
} else {
  console.log(`${num} is outside the range ${start} and ${end}`);
}
```

# The else if Statement
==>Use the `else if` statement to specify a new condition if the first condition is false.

Syntax

```js
if (condition1) {
  //  block of code to be executed if condition1 is true
} else if (condition2) {
  //  block of code to be executed if the condition1 is false and condition2 is true
} else {
  //  block of code to be executed if the condition1 is false and condition2 is false
}
```

Example

==> Write a program that assigns a letter grade based on a numerical grade.

* Above 90 -->"A"
* Above 80 -->"B"
* Above 70 -->"C"
* Above 60 -->"D"
* otherwise "F"

```js
let obtainMarks = 75;
let grade;
if (obtainMarks >= 90) {
  grade = "A";
} else if (obtainMarks >= 80) {
  grade = "B";
} else if (obtainMarks >= 70) {
  grade = "C";
} else if (obtainMarks >= 60) {
  grade = "D";
} else {
  grade = "F";
}
console.log(`Obtain grade is  ${grade}`);
console.log("Obtain Grade is ", grade);
 ```

 ==> Q.N Find the largest of two number.

1. Print num1 is the largest if num1>num2.
2. Print num2 is the largest if num1<num2.
3. Else print num1 and num2 are equal when num1==num2.

 ```js
let num1 = 20;
let num2 = 25;
if (num1 > num2) {
  console.log(`${num1} is Largest than ${num2}`);
} else if (num2 > num1) {
  console.log(`${num2} is Largest than ${num1}`);
} else {
  console.log(`${num1} is equal to ${num2}`);
}
 ```

 =>Write a program that calculates the ticket price based on age.

 ```js
let age = 25;
let ticketPrice;

if (age < 12) {
  ticketPrice = 100;
} else if (age >= 12 && age < 18) {
  ticketPrice = 150;
} else if (age >= 18 && age < 60) {
  ticketPrice = 200;
} else {
  ticketPrice = 50; //
}
console.log("Ticket Price: RS. " + ticketPrice);
 ```

 # JavaScript Switch Statement
 =>The `switch` statement is used to perform different actions based on different conditions.

=>Use the `switch` statement to select one of many code blocks to be executed.

Syntax

```js
switch(expression) {
  case x:
    // code block
    break;
  case y:
    // code block
    break;
  default:
    // code block
}
```

==>This is how it works:

* The switch expression is evaluated once.
* The value of the expression is compared with the values of each case.
* If there is a match, the associated block of code is executed.
* If there is no match, the default code block is executed.
  
Here's an Example

=>The getDay() method returns the weekday as a number between 0 and 6.(Sunday=0, Monday=1, Tuesday=2 ..)
. This example uses the weekday number to calculate the weekday name:

```js
switch (new Date().getDay()) {
  case 0:
    day = "Sunday";
    break;
  case 1:
    day = "Monday";
    break;
  case 2:
     day = "Tuesday";
    break;
  case 3:
    day = "Wednesday";
    break;
  case 4:
    day = "Thursday";
    break;
  case 5:
    day = "Friday";
    break;
  case 6:
    day = "Saturday";
}
```

==>write a program to make a simple calculator with the switch statement.

```js
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
```
