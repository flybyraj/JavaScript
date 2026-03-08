//Change of state of an object is known as Events
//Events are fired to notify code of "intresting changes" that may affect code execution

let btn1= window.document.querySelector("#btn1");
btn1.onclick =(evt) => {  // evt is Event Object
    console.log(evt);
    console.log(evt.type);  // Event type = Click
    console.log(evt.target);
    console.log(evt.clientX , evt.clientY );
    console.log("button was Clicked");
} 

let div=window.document.querySelector("div");
div.onmouseover = (evt) => {
    console.log(evt);
    console.log(evt.type);  // Event type = Click
    console.log(evt.target);
    console.log(evt.clientX , evt.clientY );
    console.log("You are inside Div");
}