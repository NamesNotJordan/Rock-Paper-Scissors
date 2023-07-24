// Take the two choices and select a winner
function playRound(playerChoice, compChoice) {
    if (playerChoice === "rock") {
        if (compChoice === "rock")
        {
            return "tied"
        }
        if (compChoice === "paper")
        {
            return "lose"
        }
        if (compChoice === "scissors")
        {
            return "win"
        }
    }
    if (playerChoice === "paper") {
        if (compChoice === "rock")
        {
            return "win"
        }
        if (compChoice === "paper")
        {
            return "tie"
        }
        if (compChoice === "scissors")
        {
            return "lose"
        }
    }
    if (playerChoice === "scissors") {
        if (compChoice === "rock")
        {
            return "lose"
        }
        if (compChoice === "paper")
        {
            return "win"
        }
        if (compChoice === "scissors")
        {
            return "tie"
        }
    }
}
function getCompChoice() {
    let choices = ["rock", "paper", "scissors"];
    let i = Math.floor(Math.random() * 3);
    return choices[i];
}

function game() {
    let input = prompt("What are you picking?").toLowerCase();
    let playerChoice = input.toLowerCase();
    let compChoice = getCompChoice(); 
    console.log(`Computer chose ${compChoice}`)
    let result = playRound(playerChoice, compChoice);
    console.log(`You ${result}`);
}

game();


