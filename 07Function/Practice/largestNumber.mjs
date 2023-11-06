// Find the largest of two number
let isLargest = (num1, num2) => {
  if (num1 > num2) {
    console.log(`${num1} is the largest number than ${num2}`);
  } else if (num2 > num1) {
    console.log(`${num2} is the largest number than ${num1}`);
  } else {
    console.log(`${num1} is equal to ${num2}`);
  }
};

//function call
isLargest(12, 34); //34 is the largest number than 12
isLargest(45, 15); //45 is the largest number than 15
isLargest(5, 5); // 5 is equal to 5
