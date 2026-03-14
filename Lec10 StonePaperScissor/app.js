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
    } else if ( userChoice == "stone" && compChoice == "paper" ) {
        console.log(`Computer Won`);
    } else if ( userChoice == "stone" && compChoice == "scissors") {
        console.log(`User Won`);
    } else if ( userChoice == "paper" && compChoice == "stone") {
        console.log(`User Won`);
    } else if ( userChoice == "paper" && compChoice == "scissors") {
        console.log(`Computer Won`);
    } else if ( userChoice == "scissors" && compChoice == "stone") {
        console.log("Computer WOn");
    } else if ( userChoice == "") {
        console.log("");
    }
        
    
}



choices.forEach((choice) => {
    choice.addEventListener("click", () => {
        const userChoice= choice.getAttribute("id");
        playGame(userChoice);
    });
});