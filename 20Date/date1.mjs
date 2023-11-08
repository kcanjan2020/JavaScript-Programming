//Current date
let currentDate = new Date();
console.log(typeof currentDate);
console.log(currentDate); //2023-11-08T07:53:39.965Z
//ISO Format: yyyy-mm-ddThh:mm:ss
console.log(currentDate.toString());

// Current Local date and time
let currentDate1 = new Date().toLocaleString();
console.log(currentDate1);

let currentDate2 = new Date().toLocaleDateString();
console.log(currentDate2);

let currentDate3 = new Date().toLocaleTimeString();
console.log(currentDate3);
