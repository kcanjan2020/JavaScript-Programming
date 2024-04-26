//print even number
let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9];
let evenNum = arr.filter((value, i) => {
  if (value % 2 === 0) {
    return true;
  } else {
    return false;
  }
});

console.log(evenNum);
