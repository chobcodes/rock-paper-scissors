function computerPlay() {
    moves = ["rock", "paper", "scissors"]
    return moves[Math.floor(Math.random()*moves.length)]
}

function playRound(playerSelection, computerSelection) {
    if (playerSelection.toLowerCase() === "rock") {
        if (computerSelection === "rock") {
            return "Tie, no winner"
        } else if (computerSelection === "paper") {
            return "You lose! Paper beats rock"
        } else {
            return "You win! Rock beats scissors"
        }
    } else if (playerSelection.toLowerCase() === "paper") {
        if (computerSelection === "rock") {
            return "You win! Paper beats rock"
        } else if (computerSelection === "paper") {
            return "Tie, no winner"
        } else {
            return "You lose! Scissors beats paper"
        }
    } else if (playerSelection.toLowerCase() === "scissors") {
        if (computerSelection === "rock") {
            return "You lose! Rock beats scissors"
        } else if (computerSelection === "paper") {
            return "You win! Scissors beats paper"
        } else {
            return "Tie, no winner"
        }
    } else {
        return "I don't know what you entered"
    }
}

function game() {
    let playerScore = 0;
    let computerScore = 0;
    for (i=0; i<5; i++) {
        let playerInput = prompt("ROKC PAPER SCICORS?")
        let computerInput = computerPlay()
        console.log(computerInput)
        switch (playRound(playerInput, computerInput).charAt(4)) {
            case "w":
                playerScore++
                console.log("Player won")
                break;
            case "l":
                computerScore++
                console.log("Computer won")
                break
            case " ":
                console.log("Tie")
                break;
            case "n":
                console.log("Invalid input, no winner")
                break;   
        }
        
    }
    return (playerScore>computerScore ? "Player wins game!" :
    playerScore === computerScore ? "Game is tied!" : "Computer wins game!");
}