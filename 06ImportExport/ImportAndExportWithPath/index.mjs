// Import from Export by name
/* import { name } from "./first.mjs";
import { age } from "./Fol/second.mjs";
import { isMarried } from "./Fol/Fol1/third.mjs";

console.log(name);
console.log(age);
console.log(isMarried); */

// Export by name
//import { name, age, address } from "./first.mjs";

// Import from export by default
import education, { name, age, address } from "./first.mjs";

console.log(education);
console.log(name);
console.log(age);
console.log(address);
