import {
  avg,
  category,
  checkGreater,
  is18,
  isEven,
  isGreaterThan18,
  moviesAuthentication,
  roomNumber,
  ticket,
} from "./functionDefinition.mjs";

//call is18 Function from functionDefinition,mjs
let age = is18(18);
console.log(age); //true

//call isGreaterThan18 function
let _age = isGreaterThan18(25);
console.log(_age); //true

//call roomNumber function
let roomNum = roomNumber(15);
console.log(roomNum); // You can Enter in Room

//call isEven function
let _num = isEven(18);
console.log(_num); //true

//call avg function
let _avg = avg(5, 6, 7);
console.log("Average=", _avg); //Average=6

//call category
let cat = category(25);
console.log(cat); //Category3

//call ticket function
let _ticket = ticket(26);
console.log(_ticket); //Your ticket cost is 150

//call isGreater function from functionDefinition.mjs
let _message = checkGreater(3);
console.log(_message); // I am 3

//call moviesAuthentication function
let authMessage = moviesAuthentication(20);
console.log(authMessage); // You can watch movies
