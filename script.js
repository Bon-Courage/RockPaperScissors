const hippoSelect =






    function getComputerChoice() {
        let choice = Math.random()
        if (choice <= 0.33) { return "hunter" }
        else if (choice <= .66) { return "hippo" }
        else return "ninja"
    }


















// function playRound(playerSelection, ComputerChoice) {
//     if (playerSelection.toUpperCase() == "ROCK" && ComputerChoice.toUpperCase() == "SCISSORS") { console.log(`Player wins. Player's ${playerSelection.toUpperCase()} beats Computer's ${ComputerChoice.toUpperCase()}!`); return 1 }
//     else if (playerSelection.toUpperCase() == "PAPER" && ComputerChoice.toUpperCase() == "ROCK") { console.log(`Player wins. Player's ${playerSelection.toUpperCase()} beats Computer's ${ComputerChoice.toUpperCase()}!`); return 1 }
//     else if (playerSelection.toUpperCase() == "SCISSORS" && ComputerChoice.toUpperCase() == "PAPER") { console.log(`Player wins. Player's ${playerSelection.toUpperCase()} beats Computer's ${ComputerChoice.toUpperCase()}!`); return 1 }
//     else if (playerSelection.toUpperCase() == ComputerChoice.toUpperCase()) { console.log(`It's a draw. You both chose ${playerSelection.toUpperCase()}!`); return 0 }
//     else { console.log(`Computer wins. Computer's ${ComputerChoice.toUpperCase()} beats Player's ${playerSelection.toUpperCase()}!`); return -1 }
// };


// function game() {
//     let userWins = 0;
//     let compWins = 0;
//     for (let i = 0; i < 5; i++) {
//         let result = playRound(prompt(), getComputerChoice());     //where the inputs are coming from.

//         if (result === 1) {
//             userWins++;

//         } else if (result === -1) {
//             compWins++
//         } else {
//             i--;                           // takes 1 away so that that round does not count. 
//         }
//     }
//     if (userWins > compWins) { console.log(`The User won by ${userWins} to ${compWins}`) }
//     else { console.log(`The comp won by ${compWins} to ${userWins}`) }

// }

// game()


// function getPlayerChoice() {
//     let choice = Math.random()
//     if (choice <= 0.33) { return "rock" }
//     else if (choice <= .66) { return "paper" }
//     else return "scissors"
// }
