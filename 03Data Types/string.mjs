//Using single quotes
let name = "Anjan";
//Using double quotes
let surname = "KC";
//Using Backticks
console.log(`FullName=${name} ${surname}`);
console.log("Types of name is=", typeof name);

// Single quotes inside double quotes:
let sid = "It is call 'Gravity'";
console.log(sid);

//Double quotes inside single code
let dis = 'It is called "Gravity"';
console.log(dis);
console.log("Types of dis is=", typeof dis);

//if there is war between string and number always string operator win
// Operation is always done between two value

console.log(1 + 2); //output:3
console.log("1" + "2" + "3"); //String concatenation : output: 123
console.log(1 + "2"); //if there is war between string and number always string operator win
//output:12
console.log(1 + 2 + "3" + "4" + 5); //output:3345
