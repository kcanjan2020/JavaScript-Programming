// *** every() method ******
let info = ["Anjan", "Rita", "Ariana"];
let output = info.every((value, i) => {
  if (value === "Anjan") {
    return true;
  } else {
    return false;
  }
});

console.log(output); //false

/* let arr = [1, 2, 3, 4, 5, 6];
let hasEven = arr.every((value, i) => {
  if (value % 2 === 0) {
    return true;
  } else {
    return false;
  }
});

console.log(hasEven); //false
 */

let arr = [2, 4, 6, 8, 10, 12, 14];
let hasEven = arr.every((value, i) => {
  if (value % 2 === 0) {
    return true;
  } else {
    return false;
  }
});

console.log(hasEven); //false
