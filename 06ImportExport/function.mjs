//find Largest number among 3 number using function
export let largestNumber = (num1, num2, num3) => {
  if (num1 > num2 && num1 > num3) {
    console.log(`${num1} is the largest number than ${num2} and ${num3}`);
  } else if (num2 > num1 && num2 > num3) {
    console.log(`${num2} is the largest number than ${num1} and ${num3}`);
  } else {
    console.log(`${num3} is the largest number than ${num1} and ${num2}`);
  }
};

let isMarried = true;
export let marriedStatus = () => {
  if (isMarried) {
    console.log("He is Married");
    return true;
  } else {
    console.log("He is not Married");
    return false;
  }
};
