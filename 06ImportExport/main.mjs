import { personalInfo } from "./object.mjs";
import { address, name } from "./personal.mjs";
import { array } from "./array.mjs";
import { sum } from "./sum.mjs";
import { largestNumber, marriedStatus } from "./function.mjs";
//import and print name and address from personal.mjs
console.log("Name=", name);
console.log("Address=", address);

// Print the objet:key values pair from personalInfo object of object.mjs
console.log(personalInfo);
console.log(`Name=`, personalInfo.name);
console.log(`Address=`, personalInfo.address);
console.log("Age=", personalInfo.age);

// Access the array and array elements from array of array.mjs
console.log(array);
console.log(array[0]);
console.log(array[3]);

//print sum from the sum of sum.mjs
console.log(sum);

//call largestNumber function from function.mjs
largestNumber(30, 50, 20);

// call marriedStatus function from function.mjs
let status = marriedStatus();
console.log(status);
