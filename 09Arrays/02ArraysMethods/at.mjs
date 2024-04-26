// **** Array at() Method ****
// => at() method is used to negative index

let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 5];
//Index:   0  1  2  3  4  5  6  7  8   9  10
console.log(arr);
console.log(arr.length);
let len = arr.length;
console.log(arr[len - 1]); //Last Element

/*=> at() method is used to negative index 
let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 5];
//Index:-11 -10 -9 -8 -7 -6 -5 -4 -3  -2 -1
 */

console.log(arr[0]);
console.log(arr.at(-11));
console.log(arr[1]);
console.log(arr.at(-10));
console.log(arr.at(-1));
console.log(arr.at(-8));
console.log(arr.at(-4));
