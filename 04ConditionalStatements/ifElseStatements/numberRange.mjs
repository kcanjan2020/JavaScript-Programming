/*Find the a number is present in given range
Print “Between the range” if num is between start and end values
Else Print “Outside the range” since num is outside start and end values.*/

let num = 20;
let start = 10;
let end = 50;
if (num >= start && num <= end) {
  console.log(`${num} is between the range ${start} and ${end}`);
} else {
  console.log(`${num} is outside the range ${start} and ${end}`);
}
