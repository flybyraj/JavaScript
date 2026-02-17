let food=["mango","litchi","apple","Banana"];

food.push("papaya"); //add element to end
food.push("burger","paneer");
console.log(food);

let del=food.pop(); //delete from end and return
console.log(del);

console.log(food.toString()); //convert Arrayy to string
console.log(food);

let game=["cricket","volleyball","chess"];
let app=["fb","insta","twitter"];
let combine=food.concat(game,app); //joins multple arrays and return result
console.log(combine);

let addStart=(food.unshift("Orange"));//add to start
console.log(addStart);

let start1=food.shift();// delete from start and return ,change orignal value
console.log(start1);
console.log(food);

let bike=["tvs","bajaj","apache","hero","honda"];
console.log(bike.slice(1,3));// SLICE Return a piece of array
console.log(bike.slice(2));
console.log(bike);

let number=[1,2,3,4,5,6,7];
number.splice(2,2,101,102); //SPLICE add remove replace in array, Change orgnal array.
console.log(number);
number.splice(2,0,2.5,2.75); //Add element
console.log(number);
number.splice(4,2) //Delete Element 101 102
console.log(number);
number.splice(2,2,3,4); //Replace Element 2.5,2.75->3,4
console.log(number);
number.splice(3); // acts as SLICE , returns elements from given index and deletes elements from Orignal Array
console.log(number);