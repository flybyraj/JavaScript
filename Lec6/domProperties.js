//tagName
let firstEl=document.querySelector("#myId");
console.log(firstEl);
console.log(firstEl.tagName); //BUTTON ,returns tag for element nodes

//innerText
console.dir(document.body.firstChild); //Returns text node because a text node is inserted to maintain the whitespace between the  
                                       //end of the opening of parent and child
console.log(document.body.firstElementChild); //Returns Element
console.log(document.querySelector("div"));
console.log(document.querySelector("div").children); //Acessing Children Nodes