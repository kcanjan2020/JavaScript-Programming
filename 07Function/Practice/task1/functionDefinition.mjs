/*a) make a arrow function name is18 pass a value ,the function must return true if the given age is 18 otherwise return false */
export let is18 = (age) => {
  if (age === 18) {
    return true;
  } else {
    return false;
  }
};

/*b) make a arrow function named isGreaterThan18 , pass a value , the function must return true if the given age is greater or equals to 18 otherwise false*/

export let isGreaterThan18 = (age) => {
  if (age >= 18) {
    return true;
  } else return false;
};

/*c) make a arrow function that take a number and return you can enter room only if the enter number is less than 18 else you can not enter */

export let roomNumber = (roomNo) => {
  if (roomNo < 18) {
    return "You can Enter in Room";
  } else {
    return "You ca not  Enter in Room";
  }
};

/*d) make a arrow function named isEven , pass a value, that return true if the given number is even else return false */

export let isEven = (num) => {
  if (num % 2 === 0) {
    return true;
  } else {
    return false;
  }
};

/*e) make a arrow function that takes 3 input as number and return average of given number */
export let avg = (num1, num2, num3) => {
  let sum = num1 + num2 + num3;
  let average = sum / 3;
  return average;
};

/*f) make a arrow function that takes one input as number and return "category1" for number range from 1 to10,  return "category2" for number range from 11 to 20, return "category3" for number range form 21 to 30 */

export let category = (num) => {
  if (num >= 1 && num <= 10) {
    return "Category1";
  } else if (num >= 11 && num <= 20) {
    return "Category2";
  } else if (num >= 21 && num <= 30) {
    return "Category3";
  } else {
    return "Given number is out of range";
  }
};

/*g) make a arrow function that takes a input as number  that perform
		    if age [upto 17],  return your ticket is free 
			if age[18 to 25 ], return  your ticket cost 100
			if age[>26],  return your ticket cost 200
			if age===26 return your ticket is 150 */

export let ticket = (age) => {
  if (age >= 1 && age <= 17) {
    return "Your ticket is free";
  } else if (age >= 18 && age <= 25) {
    return "Your ticket cost is 100";
  } else if (age > 26) {
    return "Your ticket cost is 200";
  } else if (age === 26) {
    return "Your ticket cost is 150";
  } else {
    return "Invalid Age";
  }
};

/* h)  make a function that take a number
 			if number>=3 console i am greater or equal to 3
 			if number ===3 console i am 3
 			if number<3 console i am less than3
 			else show i am other */
export let checkGreater = (num) => {
  if (num === 3) {
    console.log("I am 3");
  } else if (num >= 3) {
    console.log("I am greater or equal to 3");
  } else if (num < 3) {
    console.log("I am less than 3");
  } else {
    console.log("I am other");
  }
};

/* i) make a function that takes input as number and return output You can watch movies if input is greater or equal to 18 else return "You are not authorized to watch movies
 */

export let moviesAuthentication = (age) => {
  if (age >= 18) {
    return "You can watch movies";
  } else {
    return "You are not authorized to watch movies";
  }
};
