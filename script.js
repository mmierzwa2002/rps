function getComputerChoice() {
    const choices = ["Rock", "Paper", "Scissors"];
    let arrPos = Math.floor(Math.random() * 3);
    return choices[arrPos];
}

console.log(getComputerChoice());