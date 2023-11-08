//Current DateTime
let currentDate = new Date();
console.log(currentDate); //2023-11-08T10:56:52.740Z
//ISO Format: yyyy-mm-ddThh:mm:sec

//convert Date and Time to string
console.log(currentDate.toString()); //Wed Nov 08 2023 16:46:50 GMT+0545 (Nepal Time)

//For Local Date and Time
let locDateAndTime = new Date().toLocaleString();
console.log(locDateAndTime); // Print current local date and time:11/8/2023, 4:54:17 PM

//For LocalDate only
let locDate = new Date().toLocaleDateString();
console.log(locDate); //print current locate date only:11/8/2023

//For locate Time only
let locTime = new Date().toLocaleTimeString();
console.log(locTime); //print current local time only:4:59:43 PM

//Type of Date
console.log(typeof currentDate); //Object

/* ==>Months        Days
January ==>0        Sunday  ==>0
February==>1        Monday  ==>1
March   ==>2        Tuesday ==>2
April   ==>3        Wednesday==>3
May     ==>4        Thursday ==>4
Jun     ==>5        Friday   ==>5
July    ==>6        Saturday ==>6
August  ==>7
September==>8
October  ==>9
December==>10
November==>11
*/

//Date and Time Formatting
let usrDate = new Date(2020, 0, 23);
console.log(usrDate.toDateString()); // 0 indicate that January
console.log(usrDate.toLocaleDateString());

let usrDateTime = new Date(2023, 9, 24, 6, 35, 34).toLocaleString();
console.log(usrDateTime);
console.log(new Date("2080-07-29").toLocaleDateString());

let CurDateTime = new Date();
console.log(CurDateTime.getDate()); // It return current Date of month
console.log(CurDateTime.getDay()); // It return Current Day in range(0-6) and it does not return String like Sunday ,Monday..

console.log(CurDateTime.getMonth()); // It return month in integer number (0-11)
console.log(CurDateTime.getFullYear()); //It return Current year

console.log(CurDateTime.getMilliseconds());
console.log(CurDateTime.getMinutes());
console.log(CurDateTime.getHours());
console.log(CurDateTime.toJSON());
