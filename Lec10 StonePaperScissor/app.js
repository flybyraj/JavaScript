let userScore=0;
let compScore=0;

const choices= document.querySelectorAll(".choice");

const genCompChoice = () => {
    let options = [ "rock", "paper", "scissors"];
    const random = options[Math.floor(Math.random() * 3)];
    return random;
}



const playGame = (userChoice) => {
    console.log(`choice was clicked. ${userChoice}`);
    //Generate Computer Choice -> Modular Programming -> har kaam ke liye ek fn.
    const compChoice = genCompChoice();
    // if ( userChoice =="rock" && compChoice == "paper") {
    //     console.log("")
    // }
    console.log(`The Computer Choice is ${compChoice}`);

    if (userChoice == compChoice) {
        console.log("Draw");
    } else if {
        
    }
}



choices.forEach((choice) => {
    choice.addEventListener("click", () => {
        const userChoice= choice.getAttribute("id");
        playGame(userChoice);
    });
});