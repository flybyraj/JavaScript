let div = document.querySelector("div");
console.dir(div);

console.log(div.innerText); //returns the text content of Element and all its children

console.log(div.innerHTML); //Returns the plain text with HTML tags content in the element.


//innerText and innerHTML can change content dynamically
// div.innerText="Abcd";  

// div.innerHTML="<div>New Div</div>";

let heading=document.querySelector("h1");
console.log(heading);
heading.innerText="New Heading";
heading.innerHTML="<i>New Heading</i>";