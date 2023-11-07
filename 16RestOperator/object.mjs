let { age, location, ...info } = {
  name: "Anjan KC",
  age: 25,
  isMarried: true,
  location: "Rukum",
};
console.log(info); //{name:"Anjan KC",isMarried:true}
console.log(info.name); // Anjan KC ==> info is a Object
console.log(info.age); // undefined ==> age is not a rest of value. info only take rest of the values
console.log(age);
