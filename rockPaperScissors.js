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

function updateScores(matchResult){
       let playerScoreText = document.querySelector('#PlayerScore');
       let cpuScoreText = document.querySelector('#CompScore');
       let screenText = document.querySelector("#Results h2")
       
       playerScoreText.textContent = `Player: ${playerScore}`;
       cpuScoreText.textContent = `CPU: ${compScore}`;
       screenText.textContent = matchResult;
}

function createButtonListeners() {
    //get references to buttons
    const btnRock = document.querySelector('#btnRock');
    const btnPaper = document.querySelector('#btnRock');
    const btnScissor = document.querySelector('#btnRock');

    //Create listeners
    btnRock.addEventListener('click', () => {
        let playerChoice = 'rock'
        let compChoice = getCompChoice();
        matchResult = `Computer chose ${compChoice}\n 
                    You ${playRound(playerChoice, compChoice)}`;
        updateScores(matchResult);
    })
}

function game() {
    playerScore = 0;
    compScore = 0;
    createButtonListeners();
    const screen = document.querySelector('#Results h2')
    screen.textContent = "Make your choice"
    while (playerScore != 5 && compScore != 5) {
    }
    if(playerScore > compScore){
        screen.textContent="You have bested the Machine!";
    }
    else if(compScore > playerScore){
        screen.textContent = "You Lost... loser"
    }
    
    
}

game()


