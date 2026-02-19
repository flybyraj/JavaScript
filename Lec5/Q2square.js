//Qs. For a given array of numbers, print the square of each value using the forEach loop.

let arr=[1,2,3,4,5];

arr.forEach((val) => {  //using call-back function
    console.log(val*val);
})

//Another way to use Call-Back Function

let arrSquare =(val) => { //defining a function
    console.log(val*val);
}

arr.forEach(arrSquare); //calling the function as parameter of forEach