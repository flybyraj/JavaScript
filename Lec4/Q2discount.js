// For a given array with prices of 5 items -> [250, 645, 300, 900, 50]
// All items have an offer of 10% OFF on them. Change the array to store final price after
// applying offer.

//using for of
// let arr=[250,645,300,900,50];
// let i=0;
// for (let val of arr) {
//     console.log(`The MRP is ${arr[i]}`);
//     let offer=val/10;
//     arr[i]-=offer;
//     console.log(`The discounted price is ${arr[i]}`);
//     i++;
// }

//using for

let arr=[250,645,300,900,50];
for (let i=0;i<arr.length;i++) {
    console.log(`The MRP is ${arr[i]}`);
    let offer=arr[i]/10;
    arr[i]-=offer;
    console.log(`The discounted Price is : ${arr[i]}`);
}