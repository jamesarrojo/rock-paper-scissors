let computerScore = 0
let playerScore = 0

const computerScoreDisplay = document.querySelector('#computer-score')
const playerScoreDisplay = document.querySelector('#player-score')

const resultDisplay = document.querySelector('#result')

const rockBtn = document.querySelector('#rock')
const paperBtn = document.querySelector('#paper')
const scissorsBtn = document.querySelector('#scissors')




// takes computer's choice
function getComputerChoice() {
    let choices = ["rock", "paper", "scissors"]
    let random = Math.floor(Math.random() * 3)
    return choices[random]
}


// compares the choice of player and computer and scores them
function game(playerChoice) {
    let computerChoice = getComputerChoice()

    if (playerChoice === computerChoice) {
        resultDisplay.innerHTML = `Draw! You both played ${computerChoice}`
    } else if ((playerChoice === "rock" && computerChoice === "paper") || (playerChoice === "paper" && computerChoice === "scissors") || (playerChoice === "scissors" && computerChoice === "rock")) {
        computerScore++
        computerScoreDisplay.innerHTML = computerScore
        resultDisplay.innerHTML = `You Lose! ${computerChoice} beats ${playerChoice}`
    } else {
        playerScore++
        playerScoreDisplay.innerHTML = playerScore
        resultDisplay.innerHTML = `You Win! ${playerChoice} beats ${computerChoice}`
    }
}


// takes player's choice
function main() {
    rockBtn.addEventListener('click', function() {
        game("rock")
    })
    
    paperBtn.addEventListener('click', function() {
        game("paper")
    })
    
    scissorsBtn.addEventListener('click', function() {
        game("scissors")
    })
}

main()