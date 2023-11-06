//Write a function to check if an input string is a palindrome
//==>An integer is a palindrome if the reverse of that number is equal to the original number.

let checkPalindrome = (num) => {
  // convert the number into string
  let numToStr = num.toString();
  let reverseStr = numToStr.split("").reverse().join("");
  // console.log(typeof(reverseStr));

  //finally convert string to number

  //let revNumber=Number(reverseStr) /=or
  let revNumber = parseInt(reverseStr);
  console.log(`Original NUmber=${num}`);
  console.log(`Reversed Number=${revNumber}`);
  if (num === revNumber) {
    console.log(`${num}is palindrome number`);
  } else {
    console.log(`${num} is not a palindrome number`);
  }

  //console.log(typeof(revNumber));
};
checkPalindrome(1001); // 1001 is a palindrome number
