/*=> Write a program that assigns a letter grade based on a numerical grade.
>=90 -->"A"
>=80 -->"B"
>=70 -->"C"
>=60 -->"D"
otherwise "F" */
let obtainMarks = 75;
let grade;
if (obtainMarks >= 90) {
  grade = "A";
} else if (obtainMarks >= 80) {
  grade = "B";
} else if (obtainMarks >= 70) {
  grade = "C";
} else if (obtainMarks >= 60) {
  grade = "D";
} else {
  grade = "F";
}
console.log(`Obtain grade is  ${grade}`);
console.log("Obtain Grade is ", grade);
