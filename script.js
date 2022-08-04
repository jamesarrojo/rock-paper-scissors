function getComputerChoice() {
    let choices = ["Rock", "Paper", "Scissors"]
    let random = Math.floor(Math.random() * 3)
    return choices[random]
}

function playerSelection() {
    return prompt(alert("Please enter: 'Rock', 'Paper', or 'Scissors'"))
}


function playRound(i) {
    let computerChoice = getComputerChoice().toLowerCase()
    let playerChoice = playerSelection().toLowerCase()

    if (playerChoice === computerChoice) {
        console.log(`Round ${i+1}: Draw! You both played ${computerChoice}`)
    } else if ((playerChoice === "rock" && computerChoice === "paper") || (playerChoice === "paper" && computerChoice === "scissors") || (playerChoice === "scissors" && computerChoice === "rock")) {
        console.log(`Round ${i+1}: You Lose! ${computerChoice} beats ${playerChoice}`)
        return 0
    } else {
        console.log(`Round ${i+1}: You Win! ${playerChoice} beats ${computerChoice}`)
        return 1
    }
}



function game() {
    let computerScore = 0
    let playerScore = 0

    for (let i = 0; i < 5; i++) {
        let result = playRound(i)
        if (result === 1) {
            playerScore++
        } else if (result === 0) {
            computerScore++
        }
        console.log(`You: ${playerScore} | Computer: ${computerScore}`)
    }

    if (playerScore > computerScore) {
        return "Congratulations! You Won!"
    } else if (playerScore < computerScore) {
        return "Sorry, You Lose. :("
    } else {
        return "Its a draw!"
    }



}

console.log(game())