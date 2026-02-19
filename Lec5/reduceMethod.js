//sum
let arr=[1,2,3,111,4];
const output= arr.reduce((prev ,current) => { //in arr.reduce(a,b) byDefault a=index0 , b=Index1. here prev=1,current=2
    return prev+current;            //prev+current is stored in prev, prev=prev+current and current=index2
});

console.log(output); 

//find largest number
const largest= arr.reduce((prev , curr) => {
    return prev>curr ? prev: curr;
})
console.log(largest);