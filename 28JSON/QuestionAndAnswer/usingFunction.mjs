//input:[1,2,1,["a","b"],["a","b"]] ==>output:[1,2,["a","b"]]

let fun = (input) => {
  let arrToStr = input.map((value, index) => {
    return JSON.stringify(value);
  });
  console.log(arrToStr); //[ '1', '2', '1', '["a","b"]', '["a","b"]' ]

  let set = [...new Set(arrToStr)];
  console.log(set); //[ '1', '2', '["a","b"]' ]

  let finalOutput = set.map((value, i) => {
    return JSON.parse(value);
  });
  return finalOutput;
};

let _finalOutput = fun([1, 2, 1, ["a", "b"], ["a", "b"]]);
console.log(_finalOutput);
