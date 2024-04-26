// "anjan"=>"Anjan" using map method
let str = "anjan";
let arr1 = str.split("");
console.log(arr1);
let arr2 = arr1.map((value, index) => {
  if (index === 0) {
    return value.toUpperCase();
  } else {
    return value.toLowerCase();
  }
});
let arr3 = arr2.join("");
console.log(arr2);
console.log(arr3);
