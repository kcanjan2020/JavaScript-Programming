// [1,2,3]==>[11,12,13]
let arr = [1, 2, 3];
let arrOut = arr.map((value, i) => {
  return value + 10;
});
console.log(arrOut);

// ["my","name",is]==>["MY","NAME",IS]
let array = ["my", "name", "is"];
let arrayOut = array.map((value, index) => {
  return value.toUpperCase();
});

console.log(arrayOut);
