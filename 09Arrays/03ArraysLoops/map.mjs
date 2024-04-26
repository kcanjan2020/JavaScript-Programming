/* USed map()
    =>input is array
    => output is array
    => length of input and output array are same
 */

let arr = [1, 2, 3, 4, 5];
let outputArr = arr.map((value, i) => {
  console.log("Anjan");
  return value;
});
console.log(outputArr);
/* 
Anjan
Anjan
Anjan
Anjan
Anjan
[1,2,3,4,5]
 */

// input: [1,2,3,4,5]=> output: [1,4,9,16,25]
let array = [1, 2, 3, 4, 5];
let outArr = array.map((value, i) => {
  return Math.pow(value, 2);
});
console.log(outArr);

// input: [1,2,3,4,5]=>output:[2,4,6,8,10]
let arr2 = [1, 2, 3, 4, 5];
let output = arr2.map((value, i) => {
  return value * 2;
});
console.log(output);

// input:["my","is",is]=> output ["MY","NAME","IS"]
let arr3 = ["my", "name", "is"];
let output1 = arr3.map((value, i) => {
  return value.toUpperCase();
});
console.log(output1);

//input:["my","is",is]=> output ["MYN","NAMEN","ISN"]
let arr4 = ["my", "name", "is"];
let output3 = arr4.map((value, i) => {
  return `${value.toUpperCase()}N`;
});

console.log(output3);

//Make a arrow function that take input as [1,2,3,4,5]  it must return [100,0,300,0,500] Note:Here, odd number is multiplied by 100 and even number is multiplied by 0

let fun = (inputArray) => {
  let output = inputArray.map((value, i) => {
    if (value % 2 !== 0) {
      return value * 100;
    } else {
      return value * 0;
    }
  });
  return output;
};

let _output = fun([1, 2, 3, 4, 5]);
console.log(_output);

//Make a arrow function that take input as [1,2,3,4]  it must return [2,0,6,0] Note:Here, odd index is multiplied by 0 and even number is multiplied by 2

let fun1 = (inputArray) => {
  let output = inputArray.map((value, i) => {
    if (i % 2 === 0) {
      return value * 2;
    } else {
      return value * 0;
    }
  });
  return output;
};

let outputArray = fun1([1, 2, 3, 4]);
console.log(outputArray);

// input:["a","n","J","A",n] => output: ["A","n","i","a",n]

let name = ["a", "n", "J", "A", "n"];
let outputName = name.map((value, i) => {
  if (i === 0) {
    return value.toUpperCase();
  } else {
    return value.toLowerCase();
  }
});

console.log(outputName);

//[1,2,3]=>[11,12,13]
let fun2 = (inputArray) => {
  let output = inputArray.map((value, i) => {
    return value + 10;
  });
  return output;
};

let _output1 = fun2([1, 2, 3]);

console.log(_output1);
