//Qs. Create a toggle button that changes the screen to dark-mode when clicked & light-mode
//when clicked again.

let mode=window.document.querySelector("button");
let body = window.document.querySelector("body");
let currMode="light" // dark

mode.addEventListener("click" , () => {
    console.log("you are trying to change Mode");
    if (currMode === "light") {
        currMode = "dark";
        body.classList.add("dark");
        body.classList.remove("light");
        // document.querySelector("body").style.backgroundColor="black";
        // document.querySelector("body").style.color="white"
    } else {
        currMode="light";
        body.classList.add("light");
        body.classList.add("dark");
        // document.querySelector("body").style.backgroundColor="white";
        // document.querySelector("body").style.color="black";
    }
})