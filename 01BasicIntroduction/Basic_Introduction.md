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

=>In programming, a variable is a container (storage area) to hold data.

==>JavaScript Variables can be declared in 4 ways:

1. Automatically
2. Using var
3. Using let
4. Using const

=>In javascript, there are three keywords that are used to declare variables: `var`, `let` and `const`. The `var` keyword was used to declare variables in javascript before the `let` and `const` keywords were introduced. The `let` and `const` keywords were introduced in ES6 (ECMAScript 6). ES6 is the latest version of javascript. It was released in 2015. ES6 introduced a lot of new features to javascript. We will learn about some of them in this course.

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
