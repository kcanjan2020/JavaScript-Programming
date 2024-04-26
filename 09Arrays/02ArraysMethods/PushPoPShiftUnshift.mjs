// push,pop,shift,unshift => Those method change original array
/* 
push=> This method is used to add element at the end of array
pop => This method is used to remove last element of ana array

unshift => This method is used to add element at the beginning of the array
shift=> This method is used to remove the first element of an array
 */

let arr = [1, 2, 3, 4, 5];
console.log(arr); //[1, 2, 3, 4, 5];
arr.push(6);
console.log(arr); //[1, 2, 3, 4, 5, 6];

arr.pop();
console.log(arr); //[1,2,3,4,5]
arr.pop();
console.log(arr); //[1,2,3,4]

arr.unshift(0);
console.log(arr); //[0,1,2,3,4]
arr.unshift(-1);
console.log(arr); //[-1,0,1,2,3,4]

arr.shift();
console.log(arr); //[0,1,2,3,4]
arr.shift();
console.log(arr); //[1,2,3,4]
arr.shift();
console.log(arr); // [2,3,4]
