// **** forEach() *****
/*
Syntax: let outputArr=inputArr.every(arrow fun) 
arrow function=> ()=>{
    
}
 */

let arr = ["Anjan", 26, true];
arr.forEach((value, i) => {
  /* console.log(i);
  console.log(value); */
  console.log(`Arr[${i}]= ${value}`);
});
