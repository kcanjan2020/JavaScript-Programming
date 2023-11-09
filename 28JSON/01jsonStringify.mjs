//=>JavaScript function JSON.stringify() is use to convert array,object,number,string,null, undefined into a string.

let arr = [1, 2, 3, 4, 5, 6];
console.log(arr); //[1,2,3,4,5,6]
console.log(typeof arr); //object
let lisStr = JSON.stringify(arr);
console.log(lisStr); // '[1,2,3,4,5,6]' ==>String
console.log(typeof lisStr); //string

let listStr = JSON.stringify([10, 20, 30, 40, 50]);
console.log(listStr); // '[10,20,30,40,50]'

let objStr = JSON.stringify({ name: "Anjan", age: 25, isMarried: true });
console.log(objStr); // '{"name":"Anjan","age":25,"isMarried":true}'

let name = JSON.stringify("Anjan");
console.log(name); //"Anjan"

let n = JSON.stringify(null);
console.log(n); // 'null' ==>string
console.log(typeof n); //string
