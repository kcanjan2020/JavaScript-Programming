# Introduction to JavaScript (JS)

==> JavaScript(JS) is a single threaded, Synchronous, and blocking programming Language.

==>  JavaScript is a powerful and flexible programming language. It can execute on a web browser that allows us to make interactive webpages such as popup menus, animations, form validation, etc.

==> Extensions: JavaScript ->`.js` and Modern JavasScript -> `.mjs`

==>JavaScript is a case sensitive Language.

==> Js is a loosely typed language.

# How to Use JavaScript
There are several ways to use JavaScript, including:

1. In the browser: Most modern browsers have a JavaScript console that you can use to test and run your code.

2. In HTML: You can add JavaScript to your HTML files and run it in the browser. This is a great way to add interactivity to your website.

3. With a runtime environment: One popular runtime environment for JavaScript is Node.js. Node.js was created when a programmer named Ryan Dahl took Google's V8 JavaScript engine and wrapped it in C++. This allows you to run JavaScript code outside of the browser, which is useful for server-side programming.

# console.log()

=>The `console.log()` method is used to write or display  messages to the consoles screen. For example

Code

```js
console.log("Hello World !");
console.log("Hello I am Anjan KC from Himalayan County of the Nepal !");
 let name="Anjan";
 let surname="KC";
 console.log("FullName =>",name,surname);
```

# Comments

=>Comments are used to explain the code. They are not executed by the computer. They are just for the programmer to understand the code. There are two types of comments:

1. Single line comments

2. multi-line comments

### Single Line Comments

Single line comments are used to comment a single line of code. They are denoted by `//`. Everything after `//` is a comment and will not be executed by the computer.

```js
// This is a single line comment
console.log("Hello World"); // This is also a single line comment
```

### Multi-Line Comments

Multi-line comments are used to comment multiple lines of code. They are denoted by `/*` and `*/`. Everything between `/*` and `*/` is a comment and will not be executed by the computer.

```js
/*
This is 
a multi-line 
comment.
*/
```

=>Think of comments as sticky notes that you leave for yourself or others who may read your code in the future. They help make your code easier to understand and maintain.

# JavaScript Output

=>JavaScript Display Possibilities
JavaScript can "display" data in different ways:

1. Writing into an HTML element, using `innerHTML`.
2. Writing into the HTML output using `document.write()`.
3. Writing into an alert box, using `window.alert()`.
4. Writing into the browser console, using `console.log()`.

# Using innerHTML

=>To access an HTML element, JavaScript can use the `document.getElementById(id)` method.

==>The `id` attribute defines the HTML element. The `innerHTML`  property defines the HTML content:

Example

```html
<!DOCTYPE html>
<html>
<body>

<h2>My First Web Page</h2>
<p>My First Paragraph.</p>

<p id="demo"></p>

<script>
document.getElementById("demo").innerHTML = 5 + 6;
</script>

</body>
</html> 
```

# Using document.write()

=>For testing purposes, it is convenient to use `document.write()`

Example

```html
<!DOCTYPE html>
<html>
<body>

<h1>My First Web Page</h1>
<p>My first paragraph.</p>

<script>
document.write(5 + 6);
</script>

</body>
</html>
```

=>The `document.write()` method should only be used for testing.

# Using window.alert()
==>You can use an alert box to display data.

Example

```html
<!DOCTYPE html>
<html>
<body>

<h1>My First Web Page</h1>
<p>My first paragraph.</p>

<script>
window.alert(5 + 6);
</script>

</body>
</html>
```

=> `window` keyword is optional

Example 

```html
<!DOCTYPE html>
<html>
<body>

<h1>My First Web Page</h1>
<p>My first paragraph.</p>

<script>
alert(5 + 6);
</script>

</body>
</html>
```

# Using console.log()
==>For debugging purposes, you can call the `console.log()` method in the browser to display data.

Example

```html
<!DOCTYPE html>
<html>
<body>

<script>
console.log(5 + 6);
</script>

</body>
</html>
```

# Variables and Constants in JavaScript

==>In programming, a variable is a container (storage area) to hold data.\
==>JavaScript Variables can be declared in 4 ways:

1. Automatically
2. Using var
3. Using let
4. Using const

=>In javascript, there are three keywords that are used to declare variables: `var`, `let` and `const`. The `var` keyword was used to declare variables in javascript before the `let` and `const` keywords were introduced. The `let` and `const` keywords were introduced in ES6 (ECMAScript 6). ES6 is the latest version of javascript. It was released in 2015. ES6 introduced a lot of new features to javascript. We will learn about some of them in this course.

# Automatically

==>In this first example, x, y, and z are undeclared variables.\
==>They are automatically declared when first used:

```html
<!DOCTYPE html>
<html>
<body>
<script>
x = 5;
y = 6;
z = x + y;
document.write("Sum =",z);
</script>
</body>
</html>
```

# var

=>The `var` keyword is used to declare variables in JavaScript. Here's an example:

```js
var name = "Anjan";
var surname="KC
console.log("fullName =",name,surname);//fullName=Anjan KC
```

=>we can also reassign the value of a variable declared using the `var` keyword:

```js
var name = "Anjan";
var name = "Ariana";
console.log(name); //output: Ariana
```

=>One important thing to note about var is that it has not  block scope. This means that if a variable is declared with var inside a function or Block{}, it is accessible from outside the block.

Here's an example:

```js
{
  var name = "Anjan";
  console.log(name); //output: Anjan
}
console.log(name); //output: Anjan
```

=>This is the reason why the `var` keyword is not recommended to be used anymore. It can lead to unexpected results. Instead we make use of the `let` and `const` keywords.

# let

=>The let keyword is used to declare variables in JavaScript and has block scope. This means that if a variable is declared with let inside a block, it is only accessible within that block.

Here's an example:

```js
{
  let name = "Ariana";
  console.log(name); //output: Ariana
}
console.log(name); //output: name is not defined
```

# const

=>The `const` keyword is used to declare variables in JavaScript and is used when you don't want to reassign the variable. The value of a variable declared with `const` cannot be changed.

Here's an example:

```js
const name = " Anjan";
name = "Ariana"; // const can not reassignment and redeclare
console.log(name); //output:TypeError: Assignment to constant variable.
const name="KC" ;  // can not redeclare block-scoped variable 'name'
```

# Constant Objects and Arrays
==>The keyword const is a little misleading.

==>It does not define a constant value. It defines a constant reference to a value.

==>Because of this you can NOT:

* Reassign a constant value
* Reassign a constant array
* Reassign a constant object

==>But you CAN:

* Change the elements of constant array
* Change the properties of constant object

# Constant Arrays
==>We can not reassign the constant array.

Here's an example:

```js
const array = ["Banana", "Orange", "Papaya", "Apple", "Pineapple"];
console.log(array);

//array=["Apple","Banana","Orange"]  //TypeError: Assignment to constant variable
```

==>But we can change the elements of a constant array.

Here's an Example

```js
const Fruit=["Banana","Orange","Papaya","Apple","Pineapple"]
  console.log(Fruit)
  Fruit[0]="Watermelon"
  console.log(Fruit)
```

# Constant Objects
==> We can NOT reassign the Constant object:

```js
const personalInfo = {
  name: "Anjan KC",
  address: "Rukum West",
  isMarried: true,
};
console.log(personalInfo);
//personalInfo={name:"Rita KC",address:"Dang",isMarried:true} // Error: We can NOT reassign the Constant object
```

==> But we can change the properties of a constant object.

```js
const personalInfo = {
  name: "Anjan KC",
  address: "Rukum West",
  isMarried: true,
};
console.log(personalInfo);
personalInfo.name="Rita KC"
 console.log(personalInfo)
```

# Differences

|  | **Block scoped** | **Hoisting** | **Reassignment** | **Initialization** |
|----------|-------------------|--------------|------------------|--------------------|
| `let`      | Yes               | No           | Yes              | Optional           |
| `var`      | No                | Yes          | Yes              | Optional           |
| `const`    | Yes               | No           | No               | Required           |


* **Block scoped**: `let` and `const` are block-scoped, meaning they are only accessible within the block they were defined in, while `var` is function-scoped, meaning it is accessible within the entire function it was defined in.
  
* **Hoisting:** `let` and `const` are not hoisted, meaning they cannot be accessed before they are declared, while `var` is hoisted, meaning it can be accessed before it is declared (although it will have a value of undefined).
  
* **Reassignment:** `let` and `var` can be reassigned to a new value, while `const` cannot be reassigned.
  
* **Initialization:** `let` and `var` can be declared without being initialized, while `const` must be initialized with a value when it is declared.
  
  # When to Use var, let, or const?

1. Always declare variables

2. Always use const if the value should not be changed

3. Always use const if the type should not be changed (Arrays and Objects)

4. Only use let if you can't use const

5. Only use var if you MUST support old browsers.

# JavaScript Identifiers

=>All JavaScript variables must be identified with unique names.

=>These unique names are called identifiers.

=>Identifiers can be short names (like x and y) or more descriptive names (age, sum, totalVolume).

=>The general rules for constructing names for variables (unique identifiers) are:

* Names can contain letters, digits, underscores, and dollar signs.
* Names must begin with a letter.
* Names can also begin with dollar `$` and underscores `_` signs.
* Names are case sensitive (y and Y are different variables).
* Reserved words (like JavaScript keywords) cannot be used as names.

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

# JavaScript Data Types

==>JavaScript is a loosely typed language.
==>JavaScript Types are Dynamic
=>JavaScript has dynamic types. This means that the same variable can be used to hold different data types:

Example

```js
let x;       // Now x is undefined
x = 5;       // Now x is a Number
x = "John";  // Now x is a String
```

==>JavaScript has 8 Datatype

1. String
2. Number
3. Bigint
4. Boolean
5. Undefined
6. Null
7. Symbol
8. Object

==>The Object Datatype
The object data type can contain:

1. An object
2. An array
3. A date

# JavaScript Strings

=>A `string` are used to store text. In JavaScript

=>In JavaScript, strings are surrounding by quotes:

- Single quotes: 'text-string'
- Double quotes: 'text-string'
- Backticks:`` `text-string` ``

=>single quotes and double quotes are practically the same and we can use either of them.
Backticks are generally used when we need to include variables or expressions into string. this is done by wrapping variables or expression with `${variable or expression}` 

Here's an Example

```js
//Using single quotes
let name='Anjan';
//Using double quotes
let surname="KC";
//Using Backticks
console.log(`FullName=${name} ${surname}`);
```

==>You can use quotes inside a string, as long as they don't match the quotes surrounding the string

```js
// Single quotes inside double quotes:
let sid = "It is call 'Gravity'";
console.log(sid);
//Double quotes inside single code
let dis = 'It is called "Gravity"';
console.log(dis);
```

# JavaScript Numbers:
==>`Number` represents integer and floating point number(decimals and exponential)

Here's an Example

```js

let num1 = 45;
console.log(typeof(num1));
// With decimals:
let num2 = 5.234345;
console.log(typeof(num2));

```

==>Exponential Notation

 * Extra large or extra small numbers can be written with scientific (exponential) notation.
  
Example

```js 

let x = 2e10; // 2* 10^10
console.log("x=", x);
console.log(typeof x);
let y = 456e-5; // 456* 10^5
console.log("y=", y);
console.log("types of y is", typeof y);
```

# JavaScript BigInt
==>All JavaScript numbers are stored in a a 64-bit floating-point format.

==>JavaScript BigInt is a new datatype (ES2020) that can be used to store integer values that are too big to be represented by a normal JavaScript Number.

=>A BigInt number is created by appending n to the end of an integer. For example

Example

```js
// BigInt value
const value1 = 900719925124740998n;
console.log("Types of value1=", typeof value1);
// Adding two big integers
const result1 = value1 + 1n;
console.log(result1); // "900719925124740999n"

let x = BigInt("123456789012345678901234567890");
console.log(x);

const value2 = 900719925124740998n;

//const result2 = value2 + 1; // Error! BitInt and number cannot be added
//console.log(result2);

```

# JavaScript Booleans
==>Booleans can only have two values: `true` or `false`.

Example

```js
// ***Comparator operator***
console.log(1 === 3); //false
console.log("a" === "a"); //true
console.log(5 == 5); //true
console.log("5" == 5); //true
console.log(5 === 5); //true
console.log("5" === 5); //false
console.log(1 !== 3); //true
console.log(3 >= 1); //true
console.log(6 < 2); //false

// ***Logical Operator***
//=>Logical AND(&&)->true if all true
//=>Logical OR(||)->true if at least one true
console.log(true); //true
console.log(!true); // false
console.log(false && true); //false
console.log(true || false); //true
console.log(true && true); //true
```

# JavaScript Arrays
==>JavaScript arrays are written with square brackets `[]`.

==>Array items are separated by commas .

==>The following code declares (creates) an array called `fruit`, containing three items (car names)

Example

```js
let arr = [0, 1, 2, 3, 4, 5, 6, 8, 9];
console.log(arr);
console.log(arr[0]);
console.log(arr[4]);
console.log(arr[9]);
console.log("Types of arr is", typeof arr); //object

```

# JavaScript Objects
==>JavaScript objects are written with curly braces `{}`.

==>Object properties are written as key:value pairs, separated by commas.

Example

```js
let info = {
  name: "Anjan",
  surname: "KC",
  age: 25,
  isMarried: true,
  address: "Rukum West",
};
console.log(info);
console.log("FullName=",info.name,info.surname);
console.log("Address=",info.address);
console.log("Types of info is=",typeof(info)) //object
```

# The typeof Operator

==>We can use the JavaScript `typeof` operator to find the type of a JavaScript variable.

==>The `typeof` operator returns the type of a variable or an expression:

Example

```js
typeof ""             // Returns "string"
typeof "John"         // Returns "string"
typeof "John Doe"     // Returns "string"

```

Example

```js
typeof 0              // Returns "number"
typeof 314            // Returns "number"
typeof 3.14           // Returns "number"
typeof (3)            // Returns "number"
typeof (3 + 4)        // Returns "number"
```

# JavaScript Undefined:
=>The `undefined` data type represents value that is not assigned. If a variable is declared but the value is not assigned, then the value of that variable will be undefined. For example

```js
let name;
console.log(name); //undefined
console.log("Types of name is", typeof name); //undefined
```

=>It is also possible to explicitly assign a variable value undefined. For example

```js
let x = undefined;
console.log(x);
console.log("Types of x is", typeof x); //undefined
```

# JavaScript null (Empty Values)
==>An empty value has nothing to do with undefined.

==>An empty string has both a legal value and a type.

Example

```js
let x = null;
console.log(x);
console.log("Types of x is", typeof x);
let name = "";
console.log(name); //Empty String
console.log("Types of name is", typeof name); //String
```

# JavaScript Symbol
=>This data type was introduced in a newer version of JavaScript (from ES2015).

=>A value having the data type Symbol can be referred to as a symbol value. Symbol is an immutable primitive value that is unique. For example,

```js
// two symbols with the same description
const value1 = Symbol('hello');
const value2 = Symbol('hello');
```

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
