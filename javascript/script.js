//UI

const playerSelectionDisplay = document.getElementById('player-selection');
const computerSelectionDisplay = document.getElementById('computer-selection');
const resultDisplay = document.getElementById('result');
const playerChoices = document.querySelectorAll('button');

let playerSelection;
let computerSelection;
let result;

//Displays the result each time the user makes a choice

playerChoices.forEach(function(possibleChoice) {
    possibleChoice.addEventListener('click', function(e) {
        playerSelection = e.target.id;
        playerSelectionDisplay.innerHTML = playerSelection;
        randomComputerSelection();
        displayResult();
    })
});

/*Simplified code of the function above using arrows

playerChoices.forEach(possibleChoice => possibleChoice.addEventListener('click', (showPlayerSelection) => { 
    playerSelection = showPlayerSelection.target.id; 
    playerSelectionDisplay.innerHTML = playerSelection;
}))

*/

//Generates computer choice

function randomComputerSelection() {
    let computerChoice = Math.floor(Math.random() * 3);
    if (computerChoice === 0) {
        computerSelection = 'Rock'
    }
    if (computerChoice === 1) {
        computerSelection = 'Paper'
    }
    if (computerChoice === 2) {
        computerSelection = 'Scissors'      
    }
    computerSelectionDisplay.innerHTML = computerSelection;
}

//Displays the result

function displayResult() {
    if (computerSelection === playerSelection) {
        result = 'Tie';
    }
    if (
        computerSelection === 'Rock' && playerSelection === 'Paper' ||
        computerSelection === 'Paper' && playerSelection === 'Scissors' ||
        computerSelection === 'Scissors' && playerSelection === 'Rock'
    ) {
        result = 'You Win!'
    }
    if (
        computerSelection === 'Rock' && playerSelection === 'Scissors' ||
        computerSelection === 'Paper' && playerSelection === 'Rock' ||
        computerSelection === 'Scissors' && playerSelection === 'Paper'
    ) {
        result = 'You Lose!'
    }
    resultDisplay.innerHTML = result;
}