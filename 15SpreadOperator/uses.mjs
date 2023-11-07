// It is mainly used to concatenates the multiple arrays
// And it is also used to concatenate the multiple object.

let ar1 = [1, 2, 3, 4];
let ar2 = [5, 6, 7, 8];
let ar3 = [...ar1, ...ar2];
console.log(ar3); //[1,2,3,4,5,6,7,8]
