let arr = [-5, -4, -3, -2, -1, 0, 1, 2, 3, 4, 5, 6];
let positiveNum = arr.filter((value, i) => {
  if (value >= 0) {
    return true;
  } else {
    return false;
  }
});
console.log(positiveNum);

//Filter String ["a",1,",b",3,5,"c"]
let arr1 = ["a", 1, "b", 3, 5, "c"];
let arrStr = arr1.filter((value, i) => {
  if (typeof value === "string") {
    return true;
  } else {
    return false;
  }
});
console.log(arrStr);

//filter grater than 17 from [11,12,15,18,19,20,21,17,14]=>[18,19,20,17,30]

let input = [11, 12, 15, 18, 19, 20, 21, 17, 14, 30];
let isGrater17 = input.filter((value, i) => {
  if (value > 17) {
    return true;
  } else {
    return false;
  }
});

console.log(isGrater17);

// ["Anjan","Ram","Hari"] => ["Anjan","Hari"] (filter those string whose length is grater or equal to 4)

let input1 = ["Anjan", "Ram", "Hari"];
let output1 = input1.filter((value, i) => {
  if (value.length >= 4) {
    return true;
  } else {
    return false;
  }
});

console.log(output1);

// filter only truthy value
let input2 = ["Anjan", "Ram", "Hari", "", 0, 1, null, undefined, true, false];
let output2 = input2.filter((value, i) => {
  if (value) {
    return true;
  } else {
    return false;
  }
});
console.log(output2);

// or
let _output2 = input2.filter(Boolean);
console.log(_output2);
