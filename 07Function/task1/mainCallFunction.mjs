import { averageFun } from "./avg.mjs";
import { productFun } from "./product.mjs";
import { sumFun } from "./sum.mjs";

//call product function from product.mjs
let _product = productFun(25, 5);
console.log("Product=", _product);

//call Sum function from sum.mjs
let _sum = sumFun(3, 5);
console.log("Sum=", _sum);

//call average function from avg.mjs

let _avg = averageFun(4, 5, 6);
console.log("Average=", _avg);
