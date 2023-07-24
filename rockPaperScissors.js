let playerScore = 0;
let compScore = 0;
// Take the two choices and select a winner
function playRound(playerChoice, compChoice) {
    if (playerChoice === "rock") {
        if (compChoice === "rock")
        {
            return "tied"
        }
        if (compChoice === "paper")
        {
            compScore = compScore++; 
            return "lose"
        }
        if (compChoice === "scissors")
        {
            playerScore = ++playerScore;
            return "win"
        }
    }
    if (playerChoice === "paper") {
        if (compChoice === "rock")
        {
            playerScore = ++playerScore;
            return "win"
        }
        if (compChoice === "paper")
        {
            return "tie"
        }
        if (compChoice === "scissors")
        {
            compScore = compScore++; 
            return "lose"
        }
    }
    if (playerChoice === "scissors") {
        if (compChoice === "rock")
        {
            compScore = compScore++; 
            return "lose"
        }
        if (compChoice === "paper")
        {
            playerScore = ++playerScore;
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

function game(numRounds) {
    playerScore = 0;
    compScore = 0;
    for (let index = 0; index < numRounds; index++) {
        console.log(`Round ${index + 1}`);
        let input = prompt("What are you picking?").toLowerCase();
        let playerChoice = input.toLowerCase();
        let compChoice = getCompChoice(); 
        console.log(`Computer chose ${compChoice}`)
        console.log(`You ${playRound(playerChoice, compChoice)}`);
    }
    console.log(`Player Score: ${playerScore}`);
    console.log(`Computer $Score: ${compScore}`);
    if(playerScore > compScore){
        console.log("You have bested the Machine!");
    }
    else if(compScore > playerScore){
        console.log("You Lost... loser")
    }
    
    
}
let rounds = parseInt(prompt("How many rounds?"));
game(rounds);


