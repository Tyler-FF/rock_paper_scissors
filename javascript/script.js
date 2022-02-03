//UI

const playerSelectionDisplay = document.getElementById('player-selection');
const computerSelectionDisplay = document.getElementById('computer-selection');
const resultDisplay = document.getElementById('result');
const playerChoices = document.querySelectorAll('button');
const playerScoreDisplay = document.getElementById('player-score');
const computerScoreDisplay = document.getElementById('computer-score');

let playerSelection;
let computerSelection;
let result;
let playerScore = 0;
let computerScore = 0;

//Displays the result each time the user makes a choice

playerChoices.forEach(function(possibleChoice) {
    possibleChoice.addEventListener('click', function(e) {
        playerSelection = e.target.id;
        playerSelectionDisplay.innerHTML = playerSelection;
        randomComputerSelection();
        displayResult();
        winner();
    })
});

/*Simplified code of the function above using arrows

playerChoices.forEach(possibleChoice => possibleChoice.addEventListener('click', (showPlayerSelection) => { 
    playerSelection = showPlayerSelection.target.id; 
    playerSelectionDisplay.innerHTML = playerSelection;
    randomComputerSelection();
    displayResult();
    winner();
}))

*/

//Generates computer choice

function randomComputerSelection() {
    let computerChoice = Math.floor(Math.random() * playerChoices.length);
    if (computerChoice === 0) {
        computerSelection = 'Fire'
    }
    if (computerChoice === 1) {
        computerSelection = 'Water'
    }
    if (computerChoice === 2) {
        computerSelection = 'Grass'      
    }
    computerSelectionDisplay.innerHTML = computerSelection;
}

//Displays the result and updates the scores

function displayResult() {
    if (computerSelection === playerSelection) {
        result = 'Tie';
    }
    if (
        computerSelection === 'Fire' && playerSelection === 'Water' ||
        computerSelection === 'Water' && playerSelection === 'Grass' ||
        computerSelection === 'Grass' && playerSelection === 'Fire'
    ) {
        result = 'You Win!' + ' ' + playerSelection + ' beats ' + computerSelection;
        playerScore++;
        playerScoreDisplay.innerHTML = playerScore;
    }
    if (
        computerSelection === 'Fire' && playerSelection === 'Grass' ||
        computerSelection === 'Water' && playerSelection === 'Fire' ||
        computerSelection === 'Grass' && playerSelection === 'Water'
    ) {
        result = 'You Lose!'  + ' ' + computerSelection + ' beats ' + playerSelection;
        computerScore++;
        computerScoreDisplay.innerHTML = computerScore;
    }
    resultDisplay.innerHTML = result;
}

//Declare overall winner and reset scores
function winner() {
    if (playerScore === 5) {
        alert('Congratulations! You have won!');
        playerScore = 0;
        playerScoreDisplay.innerHTML = playerScore;
        computerScore = 0;
        computerScoreDisplay.innerHTML = computerScore;
    }
    if (computerScore === 5) {
        alert('Unlucky! The computer has won!');
        playerScore = 0;
        playerScoreDisplay.innerHTML = playerScore;
        computerScore = 0;
        computerScoreDisplay.innerHTML = computerScore;
    }
}