let obj = { name: "Anjan", age: 25 };
let info = { isMarried: true };
let obj2 = { ...obj };
console.log(obj2); //{name:'Anjan', age: 25}
let obj3 = { ...obj, ...info };
console.log(obj3); //{name: 'Anjan', age: 25, isMarried: true}

let obj4 = { age: 30, location: "Rukum", ...obj, ...info };
console.log(obj4); //{age:25 ,location:'Rukum', name:'Anjan', isMarried:true}

// age of obj4 is overwrite by age of obj
