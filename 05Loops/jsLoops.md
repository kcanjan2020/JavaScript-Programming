# JavaScript Loop:
=>In programming, loop are used to repeat a block of code.

=>Loops are used to perform repetitive tasks in programming. For example, if we wanted to print something 10 times, We could do it manually, but what if we needed to print it 1,00,000 times? That's where loops come in handy.

==>There are 5 types of loops in JavaScript:
1. `for` loop
2. `for-in` loop
3. `for-of` loop
4. `while` loop
5. `do-while` loop

# For Loops
=>The syntax for a `for` loop is :

```js
for (initialExpression; condition; updateExpression) {
  // code block to be executed
}
```

==>for example, Write a program to display 'Hello ! JavaScript' 10 time

```js
// Write a program to display 'Hello ! JavaScript' 10 times
let n = 10;
for (let i = 1; i <= n; i++) {
  console.log("Hello ! JavaScript");
}

```

==> Write a program to display number from 1 to 100 using for loop

```js
for (let i = 1; i <= 100; i++) {
  console.log(i);
}
```

=>Q.N write a program to display the sum of n natural numbers

```js
let sum = 0;
let num = 10;
for (let i = 1; i < num; i++) {
  sum += i;
}
console.log("Sum=", sum);
```

=>Q.N Create the Multiplication table of 2 using for loop.

```js
let num1 = 2;
for (let i = 1; i <= 10; i++) {
  console.log("************");
  // console.log(`${num1} X ${i} =`,num1*i)
  console.log(num, "X", i, "=", num * i);
}
```

# For-In Loops:

=>A for-in loop is a variant of the for loop that is used to iterate over the properties of an object. The syntax is as follows:

```js
for (let property in object) {
  // code block to be executed
}
```

Here's an example of using a for-in loop to iterate over the properties of an object:

```javascript
let person = {
  name: "Harry",
  age: 30,
  gender: "male"
};

for (let x in person) {
  console.log(x + ": " + person[x]);
}
```
This code will print each property of the person object and its corresponding value to the console.

# For-Of Loops
A for-of loop is another variant of the for loop that is used to iterate over iterable objects like arrays and strings. The syntax is as follows:

```javascript
for (let value of iterable) {
  // code block to be executed
}
```
Here's an example of using a for-of loop to iterate over the elements of an array:

```typescript
let numbers = [1, 2, 3, 4, 5];

for (let number of numbers) {
  console.log(number);
}
```
This code will print each element of the numbers array to the console.

Note that we will be using for-in and for-of loops extensively when working with arrays.

# Conclusion

Loops are a fundamental programming concept used to perform repetitive tasks efficiently. JavaScript offers five types of loops: **for, for-in, for-of, while,** and **do-while**.

For loops are commonly used for iterating over a sequence of numbers or a list of items. For-in loops are used for iterating over the properties of an object, and for-of loops are used for iterating over iterable objects such as arrays and strings. Understanding how to use loops effectively is essential for writing efficient and readable code in JavaScript.


# while Loop
=>A `while` loop is a type of loop that repeatedly executes a block of code while a particular condition is true. The loop will keep executing until the condition becomes false.

## Syntax

=>The syntax of the while loop is:

```js
while (condition) {
    // block of code to be executed
}
```

=>Here's an example

=>Write a program to display 'Hello ! JavaScript' 10 times using while loop.

```js
let i = 1;
while (i <= 10) {
  console.log("Hello ! JavaScript");
  i++;
}
```

=>Write a program to display number from 1 to 100 using while loop.

```js
let j = 1;
while (j <= 100) {
  console.log(j);
  j++;
}
```

=>Q.N write a program to display the sum of n natural numbers using while loop.

```js
let sum = 0;
let num = 10;
let k = 1;
while (k <= num) {
  sum += k;
  k++;
}
console.log("Sum=", sum);
```

=>Q.N Create the Multiplication table of 2 using while loop.

```js
let number = 2;
let m = 1;
while (m <= 10) {
  console.log(`${number} X ${m} =`, number * m);
  console.log("************");
  m++;
}
```

# Do While Loop
=>A `do-while` loop is a type of loop that executes a block of code at least once, and then repeatedly executes the block of code while a particular condition is true.

## Syntax

=>The syntax for the do-while loop is as follows:

```js
do {
  //block of  code to be executed
} while(condition);
```

=>>Here's an example

=>Write a program to display 'Hello ! JavaScript' 10 times using do while loop

```js
let i = 0;
do {
  console.log("Hello ! JavaScript");
  i++;
} while (i < 10);
```

=>Write a program to display number from 1 to 100 using do while loop.

```js
let j = 1;
do {
  console.log(j);
  j++;
} while (j <= 100);
```

=>Q.N write a program to display the sum of n natural numbers using do while loop.

```js
let num = 10;
let sum = 0;
let k = 1;
do {
  sum += k;
  k++;
} while (k <= num);
console.log("Sum=", sum);
```

=>Q.N Create the Multiplication table of 2 using do while loop.

```js
let number = 2;
let m = 1;
do {
  console.log(`${number} X ${m} =`, number * m);
  console.log("************")
  m++;
} while (m <= 10);
```

# Differences between While and Do-While Loop
|        | **while loop**                                                        | **do-while loop**                                                                    |
|-----------------|-----------------------------------------------------------------------|-----------------------------------------------------------------------------------------|
| Syntax          | while (condition) { statement }                                       | do { statement } while (condition);                                                     |
| First iteration | Condition is checked before the iteration.                            | The statement is executed before the check.                                             |
| Number of loops | 0 or more                                                             | 1 or more                                                                               |
| Execution order | Condition → Statement                                                 | Statement → Condition → Statement                                                       |
| Use case        | Use when the number of iterations is unknown or based on a condition. | Use when you want to execute the statement at least once, and then check the condition. |


In summary, the main differences between the `while` loop and the `do-while` loop are:

* The `while` loop checks the condition first, then executes the loop if the condition is true, however the `do-while` loop executes the loop first, then checks the condition.
* The `while` loop may execute zero or more times, while the `do-while` loop always executes at least once.
* The `while` loop is often used when the number of iterations is unknown or based on a condition, however the `do-while` loop is useful when you want to execute a statement at least once, and then check the condition.
  