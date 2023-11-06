//Write a function to reverse a number

let reverseNumber = (num) => {
  let reverse = 0;
  let tem = num;
  while (num !== 0) {
    let rem = num % 10;
    reverse = reverse * 10 + rem;
    // num =num / 10; // It give infinity value why ?
    num = Math.trunc(num / 10);
  }
  console.log(`The reverse of ${tem} is ${reverse}`);
};

reverseNumber(123);
reverseNumber(5432);

//Another Method to solve this problem (using split and join() method)
let revNumber = (num) => {
  //convert the number to string
  let numToStr = num.toString();

  //split the string into single character using split function
  let singleChar = numToStr.split("");
  console.log(singleChar);

  //Reverse single character using  reverse function
  let revChar = singleChar.reverse();
  console.log(revChar);

  //join single character
  let joinRevChar = revChar.join("");
  console.log(joinRevChar);
  console.log(typeof joinRevChar);

  // convert the string to number
  let revNumber = parseInt(joinRevChar);
  console.log(revNumber);
  console.log(typeof revNumber);

  return revNumber;
};

let originalNUm = 12345;
let reverseNum = revNumber(originalNUm);
console.log(`Original Number ${originalNUm}: ${reverseNum}`);
