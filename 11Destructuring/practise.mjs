function fun(a, b, c, d, e) {
  console.log(a);
  console.log(b);
  console.log(c);
  console.log(d);
  console.log(e);
}
fun(1, 2, true, ["Anjan", "Rita"], {
  name: "Hari",
  Address: "Kathmandu",
  Age: "24",
});

//Destructure
let fun1 = (a, b, c, [name1, name2], { name, Address, Age }) => {
  console.log(a);
  console.log(b);
  console.log(c);
  console.log(name1);
  console.log(name2);
  console.log(name);
  console.log(Address);
  console.log(Age);
};
fun1(1, 2, true, ["Anjan", "Rita"], {
  name: "Hari",
  Address: "Kathmandu",
  Age: "24",
});
