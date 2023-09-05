const playerSelectionBox = document.querySelector('.mainPlayerChoice')

const hunterIcon = document.querySelector('.hunterIcon');
const hippoIcon = document.querySelector('.hippoIcon');
const ninjaIcon = document.querySelector('.ninjaIcon');
const roundCount = document.querySelector(`.roundCount`);
const userLifeCount = document.querySelector(`.userLifeCount`);
const compLifeCount = document.querySelector(`.compLifeCount`);
const combatReport = document.querySelector(`.combatReport`);
const compChoiceIcon = document.querySelector('.compChoiceIcon')

const winnerDeclared = document.querySelector(`.modal-title`)
const endgameModal = document.getElementById('endgameModal');
const endgameMsg = document.getElementById('endgameMsg');
const overlay = document.getElementById('overlay');
const restartBtn = document.getElementById('restartBtn');

playerSelectionBox.addEventListener('click', (e) => {
    {
        const playerChoice = getPlayerChoice(e.target);
        const computerChoice = getComputerChoice();
        playRound(playerChoice, computerChoice);
        updateRound();
        updateLives();
        setAnimation(playerChoice);
        console.log(`///////////////////LINE BREAK//////////////////`);
        openEndgameModal();
    }
});


//This part of the code handles getting the player choice. It listens for a click. 
//and returns either hippo ninja or hunter. or if you miss it returns a text hint. 

function getPlayerChoice(target) {
    if (target.classList.contains('hunterIcon')) {
        console.log('Player chose hunter');
        return 'hunter';
    } else if (target.classList.contains('hippoIcon')) {
        console.log('Player chose hippo');
        return 'hippo';
    } else if (target.classList.contains('ninjaIcon')) {
        console.log('Player chose ninja');
        return 'ninja';
    } else combatReport.textContent = `Your opponenet is ready but you are not!`; console.log('User needs mouse lessons');
}


//This part of the code generates a computer choice.
//It returns hunter hippo or ninja. It also changes the compchoice Icon. 


function getComputerChoice() {
    let choice = Math.random();
    if (choice <= 0.33) {
        console.log('Comp chose hunter');
        compChoiceIcon.innerHTML = `<i class="hunterIcon foe-pic fa-solid fa-person-rifle fa-3x fa-bounce"></i>`
        return "hunter";
    } else if (choice <= 0.66) {
        console.log('Comp chose hippo');
        compChoiceIcon.innerHTML = `<i class="hippoIcon foe-pic fa-solid fa-hippo fa-3x fa-shake"></i>`
        return "hippo";
    } else {
        console.log('Comp chose ninja');
        compChoiceIcon.innerHTML = `<i class="ninjaIcon foe-pic fa-solid fa-user-ninja fa-3x fa-flip">`
        return "ninja";
    }
}


//This function compares the player selection and computer selection.
//It returns 1 if the player has one, 0 if a draw, or -1 for computer win. 
//It also logs result to the console. and handles adding to round count and subtracting from lives. 
//It uses while so it won't run if someone has 0 lives. 

let userLives = 5;
let compLives = 5;
let round = 0;

function playRound(playerChoice, computerChoice) {
    while (userLives > 0 && compLives > 0) {
        if (playerChoice == "ninja" && computerChoice == "hunter") {
            round++; compLives--; console.log(`Player wins. Player's ${playerChoice} beats Computer's ${computerChoice}!`); combatReport.textContent = `You Won! Your highly skilled ninja kills the hunter with a throwing star!`; return 1
        }

        else if (playerChoice == "hippo" && computerChoice == "ninja") {
            round++; compLives--; console.log(`Player wins. Player's ${playerChoice} beats Computer's ${computerChoice}!`); combatReport.textContent = `You won! Your hungry hippo eats the ninja in one bite!`; return 1
        }

        else if (playerChoice == "hunter" && computerChoice == "hippo") {
            round++; compLives--; console.log(`Player wins. Player's ${playerChoice} beats Computer's ${computerChoice}!`); combatReport.textContent = `You Won! Your hunter takes aim and shoots the hippo through the eye!`; return 1
        }

        else if (playerChoice == computerChoice) {
            round++; console.log(`It's a draw. Both chose ${playerChoice}!`); combatReport.textContent = `Draw. ${playerChoice}s are friends not foes!`; return 0
        }

        else if (playerChoice == "hunter" && computerChoice == "ninja") {
            round++; userLives--; console.log(`Computer Wins. Computer's ${computerChoice} beats Players's ${playerChoice}!`); combatReport.textContent = `You lost! That damn Ninja karate kicked your hunter.`; return -1
        }

        else if (playerChoice == "ninja" && computerChoice == "hippo") {
            round++; userLives--; console.log(`Computer Wins. Computer's ${computerChoice.toUpperCase()} beats Players's ${playerChoice.toUpperCase()}!`); combatReport.textContent = `You lost! Wow that hippo was hungry! Your Ninja is food now!`; return -1
        }

        else if (playerChoice == "hippo" && computerChoice == "hunter") {
            round++; userLives--; console.log(`Computer Wins. Computer's ${computerChoice} beats Players's ${playerChoice}!`); combatReport.textContent = `You lost! Oh no. The hunter has good aim! Your Hippo is destined for his trophy cabinet!`; return -1
        }
        else break;
    }
};


// First removes the animation and color class list then adds it ony to the one last clicked. 

function setAnimation(playerChoice) {
    resetAnimation();
    if (playerChoice == 'hunter') {
        hunterIcon.classList.add('selected');
        hunterIcon.classList.add('fa-bounce')
    }
    else if (playerChoice == 'hippo') {
        hippoIcon.classList.add('selected');
        hippoIcon.classList.add('fa-shake')
    }
    else if (playerChoice == 'ninja') {
        ninjaIcon.classList.add('selected');
        ninjaIcon.classList.add('fa-flip')
    }
}

//function removes colouring and bounce on next click or game end. 

function resetAnimation() {
    hunterIcon.classList.remove('selected');
    hunterIcon.classList.remove('fa-bounce');
    hippoIcon.classList.remove('selected');
    hippoIcon.classList.remove('fa-shake');
    ninjaIcon.classList.remove('selected');
    ninjaIcon.classList.remove('fa-flip');
}

//this fuction updates the round count

function updateRound() { roundCount.textContent = `${round}` };


//This Function updates the lives counts

function updateLives() {
    compLifeCount.textContent = `${compLives}`;
    userLifeCount.textContent = `${userLives}`
};


// This displays the modal once someones lives hit 0. 

function openEndgameModal() {
    if (userLives == 0) {
        endgameModal.classList.add('active')
        overlay.classList.add('active')
        winnerDeclared.textContent = `Defeat! You lost.`
    }
    else if (compLives == 0) {
        endgameModal.classList.add('active')
        overlay.classList.add('active')
        winnerDeclared.textContent = `Victory! You Won.`
    }
}

//Detects the button closurs to run the close endgame modal function. 

restartBtn.addEventListener('click', () => {
    endgameModal.classList.remove('active');
    overlay.classList.remove('active');
    resetResults();

})

function resetResults() {
    compLifeCount.textContent = ``;
    userLifeCount.textContent = ``;
    roundCount.textContent = ``;
    combatReport.textContent = `Awaiting Combatants`
    compChoiceIcon.innerHTML = `<i class="foe-pic fa-solid fa-computer fa-2xl"></i>`
    resetAnimation()
}



