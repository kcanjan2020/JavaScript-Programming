let info = {
  name: "Anjan",
  address: "Rukum (West)",
  age: 25,
  isMarried: true,
};
//using for...in loop
for (let key in info) {
  //console.log(key) // print key of the Object:name,address,age,isMarried
  console.log(`${key}==>${info[key]}`);
}
