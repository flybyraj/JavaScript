/*Create a new button element. Give it a text "click me", background color of red & text color
of white.
Insert the button as the first element inside the body tag.*/

let newButton=document.createElement("button");
newButton.innerText="Click Me!!!";
newButton.style.color="White";
newButton.style.backgroundColor="red";

document.querySelector("body").prepend(newButton);
