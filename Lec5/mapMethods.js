/*Map Method is similar to forEach but forEach just performs the operation on each value at every index of arrya but Map method also creates a new arrray with the results of operations.*/


let arr=[1,2,3,4,5];

//print all elements of Array
arr.map((val) => {
    console.log(val);
})

//storing new values in new array
let newArr=arr.map((val2) => {
    return val2*val2;
})
console.log(newArr);