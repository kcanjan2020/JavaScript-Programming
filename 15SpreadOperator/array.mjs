let ar = [[1, 2, true, [2, 3, 4, 5, 6]]];
console.log(ar); //[[1,2,true,[2,3,4,5,6]]]

// Spread operator(...)==>Spread Operator is a  wrapper opener.
console.log(...ar); // [1,2,true,[2,3,4,5,6]]

let arr1 = [1, 2, true, ...[2, 3, 4, 5, 6]];
console.log(arr1); // [1,2,true,2,3,4,5,6]

//Copying an array
let arr2 = [...arr1];
console.log(arr2);
arr2.push(7);
console.log(arr2); //[1,2,true,2,3,4,5,6,7]

//arr1 remains unaffected
console.log(arr1); // [1,2,true,2,3,4,5,6]

//Join Two arrays (concatenate arrays)
let array1 = ["Apple", "Banana", "Papaya"];
let array2 = ["Orange", ...array1, "Watermelon", "Grape"];
console.log(array1); //["Apple","Banana","Papaya"]

console.log(array2); //["Orange","Apple","Banana","Papaya","Watermelon",Grape]

let combArr = [...array1, ...array2];
console.log(combArr);
/*
['Apple',  'Banana','Papaya', 'Orange','Apple',  'Banana', 'Papaya' 'Watermelon', 'Grape']
   */
