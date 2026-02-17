function sum(x,y) { //x and y are local variables/parameters (not defined outside the function). block scope
    s=x+y;
    console.log("Before Return");
    return s; //Return value from the function so that the value can be used outside the function.
    console.log("After Return); //lines after return is never executed
}
 let val =sum(3,4);
 console.log(val);