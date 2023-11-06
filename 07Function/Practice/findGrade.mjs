/*Find the grade for input marks
        =>90-100:"A+"
        =>80-90:"A"
        =>70-80:"B"
        =>60-70:"C"
        =>50-60:"D"
        =>40-50:"E"
        =>0-40:F"F Using Function
*/
let findGrade = (name, marks) => {
  if (marks >= 90 && marks <= 100) {
    console.log(`${name} You have received 'A+' Grade `);
  } else if (marks >= 80 && marks <= 90) {
    console.log(`${name} You have received 'A' Grade`);
  } else if (marks >= 70 && marks <= 80) {
    console.log(`${name} You have received 'B' Grade`);
  } else if (marks >= 60 && marks <= 70) {
    console.log(`${name} You have received 'C' Grade`);
  } else if (marks >= 50 && marks <= 60) {
    console.log(`${name} You have received 'D' Grade`);
  } else if (marks >= 40 && marks <= 50) {
    console.log(`${name} You have received 'E' Grade`);
  } else if (marks >= 0 && marks <= 40) {
    console.log(`${name} You have Failed`);
  } else {
    console.log(`Invalid marks of ${marks}`);
  }
};
//function call
findGrade("Anjan KC", 98); //Anjan KC You have received 'A+' grade
findGrade("Rita KC", 85); // Rita KC You have received 'A' Grade
findGrade("Ariana KC", 75); // Ariana KC You have received 'B' grade
findGrade("Hari", 65); // Hari You have received 'C' Grade
findGrade("Ram", 55); // Ram You have received 'D' Grade
findGrade("Sita", 45); // Sita You have received 'E' Grade
findGrade("Shyam", 35); // Shyam You have Failed
findGrade("Gita", 787); // Invalid marks of 787
