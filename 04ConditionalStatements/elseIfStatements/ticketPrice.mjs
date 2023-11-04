let age = 56;
if (age >= 1 && age <= 17) {
  console.log("Your ticket is free");
} else if (age >= 18 && age <= 25) {
  console.log("Your ticket is 100");
} else if (age >= 26 && age <= 50) {
  console.log("Your ticket is 150");
} else {
  console.log("You are not allowed");
}

// code run from top to bottom so priority block is put on first
