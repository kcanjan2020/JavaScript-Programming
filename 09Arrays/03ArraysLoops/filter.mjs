/* Used filter()
    =>input is array
    => output is array
    => length of input and output array are different and if elements of output array are must be the elements of input array [Note: output is a subset of input element]


    [Note:1.Output element must be from input element.
          2. filter must return true or false
          3. If return value is true then pass that element.
          4. else not pass that element

    ]
 */
let arr1 = [1, 2, 3, 4, 5, 6];
let arr2 = arr1.filter((value, i) => {
  return true;
});
console.log(arr2); //[1,2,3,4,5,6]

let arr3 = arr1.filter((value, i) => {
  return false;
});
console.log(arr3); // []
