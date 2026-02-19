//DOM MANUPULATIONS
//Accessing Elements with id
let heading=document.getElementById("heading"); 
console.dir(heading); 

//Acessing Elements with class name
let headings=document.getElementsByClassName("class1"); 
console.dir(headings);
console.log(headings);

//Accessing Elements with Tag
let paras=document.getElementsByTagName("p"); 
console.log(paras);

//Query Selector
//Tag
let firstEl=document.querySelector("p"); //Returns First Element
console.log(firstEl);

let allEl=document.querySelectorAll("p"); //Returns All Elements/Node List
console.log(allEl);

//.Class
let firstEl2=document.querySelector(".class1");
console.log(firstEl);

let allEl2=document.querySelectorAll(".class1"); 
console.log(allEl);

//#id
let firstEl3=document.querySelector("#myId");
console.log(firstEl3);