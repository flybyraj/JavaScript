/*Prompt the user to enter their full name. Generate a username for them based on the input.
Start username with @, followed by their full name and ending with the fullname length.*/

let name=prompt("Enter your Full Name :");
console.log("Full Name : " , name);
let userName="@" + name + name.length;
console.log("userName : ", userName);