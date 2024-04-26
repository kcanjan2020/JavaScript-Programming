// **** some method ***
// =>  if one return true => true
// => if all return true the output true

// => some() method:
let info = ["Anjan", "Bishal", "Ram", "Rita"];
let output = info.some((value, i) => {
  if (value === "Anjan") {
    return true;
  } else {
    return false;
  }
});

console.log(output); //true

let arr = [1, 2, 3, 5, 4, 7, 9];
let hasEven = arr.some((value, i) => {
  if (value % 2 === 0) {
    return true;
  } else {
    return false;
  }
});
console.log(hasEven);
