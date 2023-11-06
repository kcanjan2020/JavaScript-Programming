//1. Function Definition==> Function Declaration
//2. Function Call

//1. Syntax
function fun() {
  // fun is name of the function and function is a keyword
  console.log("Hello I am from first Function");
}
fun();

//2. Syntax
let fun1 = function () {
  console.log("Hello I am  from Second Function");
};
fun1();

//function with argument/parameter
function fun3(a, b, name, surname, isMarried) {
  console.log("a=", a);
  console.log("b=", b);
  console.log("Name=", name);
  console.log("Surname=", surname);
  console.log("MarriedStatus=", isMarried);
}
fun3(5, 15, "Anjan", "KC", true);
