/*JavaScript Implicit Conversion
=>In certain situations, JavaScript automatically converts one data type to another (to the right type). This is known as implicit conversion.

=>implicit Conversion to String
*/
let num = 24;
console.log(typeof num); // Number
num = "Anjan";
console.log(typeof num); // String
console.log("5" + 5); //55
console.log(typeof ("5" + 5)); // string
console.log("3" + true); //3true
console.log("3" + undefined); //3undefined
console.log("3" + null); //3null

//=>Implicit conversion to Number
console.log("10" - "5"); //5
console.log(typeof ("10" - 5)); //number
console.log("10" - 4); //6
console.log(10 - "4"); //6
console.log(typeof (10 - "4")); //number
console.log("4" * 2); //8
console.log(8 / "2"); //4

//=>Implicit Boolean conversion to number
//=> if boolean is used, true is 1 and false is 0
console.log(4 - true); //3
console.log("4" - true); //3
console.log(typeof ("4" - true)); //number
console.log(4 + true); //5
console.log(4 + false); //false

//=>null conversion to number
//=> null is 0 when used with number
console.log(4 + null); //4
console.log("4" - null); //4
