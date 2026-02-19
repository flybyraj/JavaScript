/* Take a number n as input from user. Create an array of numbers from 1 to n.
Use the reduce method to calculate sum of all numbers in the array.
Use the reduce method to calculate product of all numbers in the array.*/

const n =prompt("Enter any Number");
let arr=[];
for (let i=0;i<=n-1;i++) {
    arr[i]=(i+1);
}
console.log(arr);

//Sum of Array
const sum=arr.reduce((prev,curr) => {
    return prev+curr;
})
console.log(sum);

//Product of Array
const prod=arr.reduce((prev,curr) => {
    return prev*curr;
})
console.log(prod);