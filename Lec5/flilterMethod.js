// all even Elements
 let arr=[1,2,3,4,5,6,7,8];

 let evenArr= arr.filter((val) => { //creates a new array of elements that give TRUE for a condition/filter
    return val%2==0;               //element with condition =True will be stored in new Array
 })
 console.log("Even Numbers :" , evenArr);

 let oddArr = arr.filter((val) => {
    return val%2 !=0;
 })
 console.log("Odd numbers : " , oddArr);