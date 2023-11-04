/*Write a program that calculates the ticket price based on age.*/
let age = 25;
let ticketPrice;

if (age < 12) {
  ticketPrice = 100;
} else if (age >= 12 && age < 18) {
  ticketPrice = 150;
} else if (age >= 18 && age < 60) {
  ticketPrice = 200;
} else {
  ticketPrice = 50; //
}
console.log("Ticket Price: RS. " + ticketPrice);
