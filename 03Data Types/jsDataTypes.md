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
