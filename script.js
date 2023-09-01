const playerSelectionBox = document.querySelector('.mainPlayerChoice')

const hunterIcon = document.querySelector('.hunterIcon');
const hippoIcon = document.querySelector('.hippoIcon');
const ninjaIcon = document.querySelector('.ninjaIcon');



//This part of the code handles getting the player choice. It listens for a click. 
//and returns either hippo ninja or hunter. 

function getPlayerChoice(target) {
    if (target.classList.contains('hunterIcon')) {
        target.classList.toggle('selected');
        target.classList.toggle('fa-bounce');
        console.log('Player chose hunter');
        return 'hunter';
    } else if (target.classList.contains('hippoIcon')) {
        target.classList.toggle('selected');
        target.classList.toggle('fa-shake');
        console.log('Player chose hippo');
        return 'hippo';
    } else if (target.classList.contains('ninjaIcon')) {
        target.classList.toggle('selected');
        target.classList.toggle('fa-flip');
        console.log('Player chose ninja');
        return 'ninja';
    }
}

//This part of the code generates a computer choice.
//It returns hunter hippo or ninja. 


function getComputerChoice() {
    let choice = Math.random();
    if (choice <= 0.33) {
        console.log('Comp chose hunter');
        return "hunter";
    } else if (choice <= 0.66) {
        console.log('Comp chose hippo');
        return "hippo";
    } else {
        console.log('Comp chose ninja');
        return "ninja";
    }
}


//This function compares the player selection and computer selection.
//It returns 1 if the player has one, 0 if a draw, or -1 for computer win. 
//It also logs something to the console. 

function playRound(playerChoice, computerChoice) {
    if (playerChoice == "ninja" && computerChoice == "hunter") { console.log(`Player wins. Player's ${playerChoice.toUpperCase()} beats Computer's ${computerChoice.toUpperCase()}!`); return 1 }

    else if (playerChoice == "hippo" && computerChoice == "ninja") { console.log(`Player wins. Player's ${playerChoice.toUpperCase()} beats Computer's ${computerChoice.toUpperCase()}!`); return 1 }

    else if (playerChoice == "hunter" && computerChoice == "hippo") { console.log(`Player wins. Player's ${playerChoice.toUpperCase()} beats Computer's ${computerChoice.toUpperCase()}!`); return 1 }

    else if (playerChoice == computerChoice) { console.log(`It's a draw. Both chose ${playerChoice.toUpperCase()}!`); return 0 }

    else if (playerChoice == "hunter" && computerChoice == "ninja") { console.log(`Computer Wins. Computer's ${computerChoice.toUpperCase()} beats Players's ${playerChoice.toUpperCase()}!`); return -1 }

    else if (playerChoice == "ninja" && computerChoice == "hippo") { console.log(`Computer Wins. Computer's ${computerChoice.toUpperCase()} beats Players's ${playerChoice.toUpperCase()}!`); return -1 }

    else if (playerChoice == "hippo" && computerChoice == "hunter") { console.log(`Computer Wins. Computer's ${computerChoice.toUpperCase()} beats Players's ${playerChoice.toUpperCase()}!`); return -1 }

};



playerSelectionBox.addEventListener('click', (e) => {
    const playerChoice = getPlayerChoice(e.target);
    const computerChoice = getComputerChoice();
    playRound(playerChoice, computerChoice);
});







































// function game() {
//     let round = 0
//     let userLives = 5;
//     let compLives = 5;
//     for (let i = 0; i < 5; i++) {
//         let result = playRound(handlePlayerSelection(), getComputerChoice());     //where the inputs are coming from.

//         if (result === 1) {
//             compLives--;
//             round++;

//         } else if (result === -1) {
//             userLives--;
//             round++;
//         } else {
//             round++;
//             i--;                     // takes 1 away so that that round does not count. 
//         }
//     }
//     if (userWins > compWins) { console.log(`The User won by ${userWins} to ${compWins}`) }
//     else { console.log(`The comp won by ${compWins} to ${userWins}`) }

// }



