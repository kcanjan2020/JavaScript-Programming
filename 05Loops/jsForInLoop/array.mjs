// For...In Loop in Arrays
let fruit = ["Apple", "Banana", "Papaya", "Watermelon", "orange"];
console.log(fruit);
console.log(fruit[0]);
//using for..in loop
for (let x in fruit) {
  //console.log(x); // print the index of the array: 0,1,2,3,4
  console.log(`index:${x}==>${fruit[x]}`);
}

/*Output:
index:0==>Apple
index:1==>Banana
index:2==>Papaya
index:3==>Watermelon
index:4==>orange
*/

let arr = [1, 2, 3, 4, 5];
console.log(arr);
console.log(arr[0]);

//using for..in loop
for (let index in arr) {
  //console.log(index)  // print the index of the array
  console.log(`index=>${index}==>${arr[index]}`);
}
