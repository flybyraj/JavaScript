let div=document.querySelector("div");
console.log(div);
console.log(div.getAttribute("id")); // `box`
console.log(div.getAttribute("name")); // `JSDiv`

let para=document.querySelector("p");
console.log(para.getAttribute("class"));
console.log(para.setAttribute("class" , "Newclass")); //changed class from "para" to "NewClass"