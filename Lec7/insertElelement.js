let newBtn =document.createElement("button");
newBtn.innerText="Click Me!!!";
console.log(newBtn);

let div=document.querySelector("div");
div.append(newBtn); // Add at the end of node (inside)
div.prepend(newBtn); //Add at the start of the node(inside)

div.before(newBtn); //Add before the node (Outside)
div.after(newBtn); //Add after the node (Outside)

let p=document.querySelector("p");
p.after(newBtn);

//Creating new Heading and adding to top of page

let newHeading=document.createElement("h1");
newHeading.innerHTML="<i>Hii , I am new Heading</i>";
document.querySelector("body").prepend(newHeading);

//Deleting "This is a simple line"
document.querySelector("p").remove(); //remove() to delete element

// newHeading.remove();

