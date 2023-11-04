// BigInt value
const value1 = 900719925124740998n;
console.log("Types of value1=", typeof value1);
// Adding two big integers
const result1 = value1 + 1n;
console.log(result1); // "900719925124740999n"

let x = BigInt("123456789012345678901234567890");
console.log(x);

const value2 = 900719925124740998n;

//const result2 = value2 + 1; // Error! BitInt and number cannot be added
//console.log(result2);
