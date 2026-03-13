let userScore=0;
let compScore=0;

const choices= document.querySelectorAll(".choice");

const playGame = (userChoice) => {
    console.log(`choice was clicked. ${userChoice}`);
    //Generate Computer Choice -> Modular Programming -> har kaam ke liye ek fn.
}



choices.forEach((choice) => {
    // console.log(choice);
    choice.addEventListener("click", () => {
        const userChoice= choice.getAttribute("id");
        playGame(userChoice);
    });
});