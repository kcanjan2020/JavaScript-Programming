// **** Array includes() Method *****
let fruit = ["Apple", "Mango", "Banana", "Pomegranate"];
console.log(fruit);

let hasPomegranate = fruit.includes("pomegranate");
console.log(hasPomegranate); //false
let hasBanana = fruit.includes("Banana");
console.log(hasBanana); //true

let hasMango = fruit.includes("Mango");
console.log(hasMango); //true

let arr = [1, 2, 3, 4, 5];
console.log(arr.includes(5)); //true
console.log(arr.includes(7)); //false
console.log(arr.includes(9)); //false
console.log(arr.includes(2)); //true

// 1. Using includes method find whether we have Bearer in the string "Bearer token"
let string = "Bearer token";
let strToArr = string.split(" ");
console.log(strToArr);
let hasBear = strToArr.includes("Bearer");
console.log(hasBear);

let str = "Bearer token";
let hasBearer = str.split(" ").includes("Bearer");
console.log(hasBearer);

// 2. lets suppose we have roles list as ["admin","superadmin", "customer"] check whether the array has admin

let roles = ["admin", "superadmin", "customer"];
let hasAdmin = roles.includes("admin");
console.log(hasAdmin);
