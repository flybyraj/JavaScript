let btn1=window.document.querySelector("button");

btn1.addEventListener("click", (evt) => {
    console.log("Button was Clicked - handler1");
    console.log(evt);
    console.log(evt.type);
});

btn1.addEventListener("click", () => {
    console.log("Button was Clicked- Handler2");
});

let handler3= ()=>{
    console.log("Button was Clicked- Handler3");
}
btn1.addEventListener("click",handler3);

btn1.addEventListener("click", () => {
    console.log("Button was Clicked- Handler4");
});

btn1.removeEventListener("click", handler3);