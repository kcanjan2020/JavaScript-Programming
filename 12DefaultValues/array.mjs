let [a, b, c = 6, d = 5] = [1, 2, 3]; // give default value from the last element of the arrays.
console.log(a);
console.log(b);
console.log(c);
console.log(d); // It print default value of d is 5

//Default value
let [name, surname, age = 25, address = "Rukum (West)"] = ["Anjan", "KC"];
console.log("Full Name:", name, surname); //Anjan KC
console.log(address); //It print the default values of address is :Rukum (West)
console.log(age); // It print the default value of age is :25
