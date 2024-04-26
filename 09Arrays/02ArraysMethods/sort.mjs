// String Sorting
let arr = ["a", "c", "e,", "d", "b"];
let strSort = arr.sort();
console.log(arr);

let arr1 = ["aa", "aaab", "abb", "abaa", "ba", "bb"];
let stringSort = arr1.sort();
console.log(stringSort);

// Number sort does not work perperly in JavaScript
let arr2 = [1, 2, 3, 4, 5, 10, 11, 6, 7, 8];
let arr3 = arr2.sort();
console.log(arr3); //[1, 10, 11, 2, 3,4,  5,  6, 7,8]
