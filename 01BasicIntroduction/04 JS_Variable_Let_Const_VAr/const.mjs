const pi = 3.14;
const g = 10;
console.log("The value of pi=", pi);
console.log("Acceleration due to gravity=", 10);

//const name = " Anjan";
//name = "Ariana"; // const can not reassignment and redeclare
//console.log(name); //output:TypeError: Assignment to constant variable.
//const name="KC" ;  // can not redeclare block-scoped variable 'name'

{
  const name = "Ariana KC";
  console.log("Name =>", name);
}
//console.log("Name =>", name); //ReferenceError: name is not defined

// ==>We can not reassign the constant array
const array = ["Banana", "Orange", "Papaya", "Apple", "Pineapple"];
console.log(array);

//array=["Apple","Banana","Orange"]  //TypeError: Assignment to constant variable

//==>You can change the elements of a constant array:

const Fruit = ["Banana", "Orange", "Papaya", "Apple", "Pineapple"];
console.log(Fruit);
Fruit[0] = "Watermelon";
console.log(Fruit);

//==> We can NOT reassign the Constant object:
const personalInfo = {
  name: "Anjan KC",
  address: "Rukum West",
  isMarried: true,
};
console.log(personalInfo);
//personalInfo={name:"Rita KC",address:"Dang",isMarried:true} // Error: We can NOT reassign the Constant object

//==> But we can change the properties of a constant object
personalInfo.name = "Rita KC";
console.log(personalInfo);
