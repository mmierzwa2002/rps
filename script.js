let playerScore = 0;
let pcScore = 0;

function getComputerChoice() { //generate pc choice by selecting random array item. array contains the available game choices
    const choices = ["Rock", "Paper", "Scissors"];
    let arrPos = Math.floor(Math.random() * 3);
    return choices[arrPos];
}

function game() {
    for (let i = 1; i <= 5; i++) { //play 5 rounds
        let computerSelection = getComputerChoice(); //generate inputs
        let playerSelection = prompt();
        console.log(playRound(playerSelection, computerSelection));
    }
    
    if (pcScore > playerScore) {
        console.log(`The 5 rounds are over. Unfortunately you lost. The final score was ${pcScore}-${playerScore}.`);
    } else if (playerScore > pcScore) {
        console.log(`The 5 rounds are over. Well done! You won. The final score was ${playerScore}-${pcScore}.`);
    } else {
        console.log(`The 5 rounds are over. You were tied ${pcScore}-${playerScore}`);
    }
}

function playRound(playerSelection, computerSelection) {

    let lowerPlayerSelection = playerSelection.toLowerCase(); //make case insensitivity for user
    let lowerComputerSelection = computerSelection.toLowerCase(); //make user choice with first letter capitalized. looks better when announcing winner
    let capPlayerSelection = lowerPlayerSelection.charAt(0).toUpperCase() + lowerPlayerSelection.slice(1);

    if ((lowerPlayerSelection === "rock" && computerSelection === "Scissors") || //win cases
        (lowerPlayerSelection === "paper" && computerSelection === "Rock")    ||
        (lowerPlayerSelection === "scissors" && computerSelection === "Paper" )) {
            playerScore += 1;
            return `You win! ${capPlayerSelection} beats ${computerSelection}. Congratulations!`;

        } else if ((lowerPlayerSelection === "rock" && computerSelection === "Paper") || //lose cases
                   (lowerPlayerSelection === "paper" && computerSelection === "Scissors") ||
                   (lowerPlayerSelection === "scissors" && computerSelection === "Rock")) {
                    pcScore += 1;
                        return `You lost! ${computerSelection} beats ${capPlayerSelection}. Better luck next time!`;

                   } else if (lowerPlayerSelection === lowerComputerSelection) { // tie case
                        return `It's a tie! Both players chose ${computerSelection}.`;

                   } else {
                        return `There has been an error. Your input is wrong, try again.`
                   }
}

game();