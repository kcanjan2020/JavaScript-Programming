//Primitive ==> number,BigInt,string,boolean,null,undefined,symbol:=> is not share memory location when we write let,var,const in code then it create memory location.
//=>Primitive Data Type used stack memory
//=>Non-Primitive Data Type used Heap Memory

//Non-primitive==>Array,Object,Set:=>It share a memory location if new variable is the copy of already defined variable.

//==>1. Memory allocation in primitive and non-primitive: if variable is copy of another variable (non primitive data will not create memory for that variable instead it share memory location)

//Example of primitive Data Type
let a = 1; //It create a new memory location
let b = a; // It create a new memory location
a = 5;
console.log(a); //5
console.log(b); //1

//Example of Non-Primitive Data Type

let arr1 = [1, 2]; //It create a new memory location.

let arr2 = arr1; // It does not create a new memory location because of arr2 is a copy of arr1 so it share a same memory location that is occupied by arr1

arr2.push(3);
console.log(arr1); //[1,2,3]
console.log(arr2); //[1,2,3]

//==>Here, we can see that the values of arr1 and values of arr2 is same because those share a same memory location.

//==>2. (===) meaning in case of primitive and non primitive
//==> In primitive: Check whether value is same:

let num1 = 1;
let num2 = num1;
let num3 = 1;
console.log(num1 === num2); // true
console.log(num1 === num3); //true

//==> In Non-primitive: Check whether the share same memory locations:

let array1 = [1, 2];
let array2 = array1;
let array3 = [1, 2];
console.log(array1 === array2); //true: share same memory location
console.log(array1 === array3); //false: array1 and array3 have different memory location

//console.log([1,2,3]===[1,2,3]) // false=>If memory is not allocation then it return false
