//Method is any function associated with any data structure like object or array. Eg- arr.for.Each() , "abc".toUpperCase()

let arr=[1,2,3,4,5];
arr.forEach(function printVal(val , idx ,arr){ /*here function printVal is a call-back Function and for.Each(is a method) is giving value of each element from the array in the function as parameter*/

        console.log(val ,idx ,arr);

});

//using Arrow Function

let arr2=[6,7,8,9,0];
arr2.forEach((val2 ,index) => {
        console.log(val2 ,index ,arr2); // 3 parameters for call-back function of for.Each (value,index,array)
});
