//Math.random() Method:
//=> Math.random()  return a random number between 0(inclusive) and 1(exclusive);

//console.log(Math.random());
console.log(Math.random());
//=>Math.random() always returns a number lower than 1.

//=>Math.random() used with Math.floor() can be used to return random integers.

//Eg1. Returns a random integer from 0 to 9
console.log(Math.floor(Math.random() * 10));

//Eg2. Return a random integer from 0 to 10.
console.log(Math.floor(Math.random() * 11));

//Eg3. Returns a random integer from 0 to 100:
console.log(Math.floor(Math.random() * 100));
