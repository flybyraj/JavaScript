let arr=["Blooomberg","Microsoft","Uber","Google","IBM","Netflix"];
console.log(arr.shift()); //Remove the first company
console.log(arr);

arr.splice(1,1,"Ola"); //Replace Uber with Ola
console.log(arr);

arr.push("Amazon"); //Add Amazon to end
console.log(arr)