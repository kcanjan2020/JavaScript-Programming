//=> setTimeout and setInterval is always execute at last

// console.log("a");
// setTimeout(() => {
//   console.log("I am setTimeout");
// }, 2000);

// console.log("b");

/*output:
a
b
I am setTimeout 
 */

console.log("Hello");
setTimeout(() => {
  console.log("I am setTimeout");
}, 0);

console.log("Hello ! JavaScript");

/* output:
Hello
Hello ! JavaScript
I am setTimeout 
 */

//**************** Execution Process of Asynchronous Function*********************
//=>1. setTimeout pass the function to the background (NodeJs) and attached timer to it.
//=>2. The function at NodeJS will pass to the memory queue of node after timer finished.
//=>3. The Function of the memory queue will pass to the JavaScript if all of the code of js be executed.
//4. Js run the code

//==>Asynchronous Function: Anything that push task to background is call asynchronous function.

//=>EventLoop: It constantly monitor call stack if the call stack is empty it takes the function from memory queue and add it to the call stack.
