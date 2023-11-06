let [a, b, c = 6, d = 5] = [1, 2, 3]; //give default value from the last elements of the array
console.log(a);
console.log(b), console.log(c);
console.log(d);

//Default value
let [name, surname, age, address = "Rukum (West)"] = ["Anjan", "KC", 25];
console.log(name);
console.log(surname);
console.log(age);
console.log(address);
