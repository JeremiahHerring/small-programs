const playerText = document.querySelector("#playerText")
const computerText = document.querySelector("#computerText")
const resultText = document.querySelector("#resultText")
const choiceBtns = document.querySelectorAll(".choiceBtn")
let player;
let computer;
let result;

choiceBtns.forEach(button => button.addEventListener("click", () => {

    player = button.textContent;
    computerTurn()
    whoWon()
    playerText.textContent = `Player: ${player}`
    computerText.textContent = `Computer: ${computer}`
    resultText.textContent = `Result: ${result}`
}))

function computerTurn() {
    const randNum = Math.floor(Math.random() * 3) + 1

    switch (randNum) {
        case 1:
            computer = "ROCK";
            break;
        case 2:
            computer = "PAPER"
            break;
        case 3:
            computer = "SCISSORS"
            break;
    }
}

function whoWon(){
    if (player === "ROCK" && computer === "SCISSORS"
        || player === "PAPER" && computer === "ROCK"
        || player === "SCISSORS" && computer === "PAPER") {
        result = "Player Won"
    }  else if (computer === "ROCK" && player === "SCISSORS"
    || computer === "PAPER" && player === "ROCK"
    || computer === "SCISSORS" && player === "PAPER") {
    result = "Computer Won"
    } else if (computer == player) {
    result = "Draw!"
    }
}