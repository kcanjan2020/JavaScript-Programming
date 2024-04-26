// **** find() Method ***
/*Note:
1.It only return the first match value
2. input is array
3.output is value
 */
let arr = [1, 2, 3, 4];
let output = arr.find((value, i) => {
  if (value > 2) {
    return true;
  } else {
    return false;
  }
});

console.log(output); //3

// Even number
let arr1 = [1, 2, 3, 4, 5, 6, 7, 8];
let evenNum = arr1.find((value, i) => {
  if (value % 2 === 0) {
    return true;
  } else {
    return false;
  }
});
console.log(evenNum); //2
