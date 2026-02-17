/*Qs1. Get user to input a number using prompt("Enter a number:"). Check if the number is
a multiple of 5 or not.*/

let name= prompt("Enter the Number : ");
console.log("The number is : ", name);

if (name%5===0 ) {
    console.log("The number is multiple of 5");
}else {
    console.log("The number is not a multiple of 5");
}