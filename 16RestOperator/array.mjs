/*
==>Rest Operator (...)
==> Rest operator take the rest of values.
==>If rest of value is the collection of values then [](Array) is used to take that data.
==>If rest of value is the collection of key:value pair then {} (Objects) is used to take that data. */

let [a, ...b] = [1, 2, 3, 4, 5];
console.log(a); //1
console.log(b); // [2,3,4,5] ==> b takes multiple values in from of array

let [name, ...info] = ["Anjan KC", "Rukum (West)", 25, true];
console.log(name); // Anjan KC
console.log(info); // ['Rukum (West)',25,true]
