//Set=> Syntax: let set= new Set([arrays])
//=>Set remove duplicate values==> when duplicate values are to a set object, the duplicate values are excluded.

//create set
let set1 = new Set();
console.log(set1); //empty set {}

//set with multiple types of values

let set2 = new Set([1, 2, "Hello", { name: "Anjan" }]);

console.log(set2);

//set Remove Duplicate values
//Array
let arr = [1, 2, 1, 3];
console.log(arr); //[1,2,1,3]

//Set
let set = new Set([1, 2, 1, 3]);
console.log(set); //[1,2,3]

//Access set Elements=>We can access set elements using the values() method and check if there is an element inside set using has() method.

let set3 = new Set([1, 2, 3, 4, 1, 2]);

//access the elements of a set

console.log(set3.values()); //{1,2,3,4}

//=>we can use has() method to check if the element is in set.

console.log(set3.has(1)); //true
console.log(set3.has(3)); //true
console.log(set3.has(6)); // false method

//Adding new elements =>we can add elements to a Set using add() method

let set4 = new Set([1, 2]);
console.log(set4.values()); //{1,2}

//adding new elements
set4.add(3);
console.log(set4.values()); //{1,2,3}
set4.add(4);
console.log(set4.values());

//adding duplicate elements
//does not add to set

set.add(1);
console.log(set4.values()); // {1,2,3,4}

//Removing Elements
//==> We can use clear() and the delete() method to remove elements from a Set

let set5 = new Set([1, 2, 3, 4]);
console.log(set.values());

//removing a particular element
set5.delete(2);
console.log(set5.values());
[1, 3, 4];

//=> The clear() method removes all elements from a set

let set6 = new Set([1, 2, 3, 4, 5, 6]);
console.log(set6.values());
set6.clear();
console.log(set6.values()); // {}
