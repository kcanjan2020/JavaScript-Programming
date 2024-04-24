//input:[1,2,1,["a","b"],["a","b"]] ==>output:[1,2,["a","b"]]
let input = [1, 2, 1, ["a", "b"], ["a", "b"]];
//console.log([...new Set(input)]) // set only remove the duplicate values of primitive data types
let arrToStr = input.map((value, index) => {
  return JSON.stringify(value);
});
console.log(arrToStr); //[ '1', '2', '1', '["a","b"]', '["a","b"]' ]
let set = [...new Set(arrToStr)];
console.log(set); //[ '1', '2', '["a","b"]' ]
let finalOutput = set.map((value, i) => {
  return JSON.parse(value);
});

console.log(finalOutput); //[ 1, 2, [ 'a', 'b' ] ]
