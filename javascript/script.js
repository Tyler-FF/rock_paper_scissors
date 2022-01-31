//User types in their choice
function showPlayerChoice() {
    let playerSelection = document.getElementById("PlayerSelection").value;
    document.getElementById("PlayerChoice").innerHTML = playerSelection;
    document.getElementById("ComputerChoice").innerHTML = computerChoice;
}

//Random number generator between 1-3
function getRandomInt() {
    return Math.floor(Math.random() * 3) + 1;
}

let randomInt = getRandomInt();
console.log(randomInt);

//Assigns random number to output which will be the computers choice
let computerChoice = showComputerChoice();

function showComputerChoice(text2) {
    if (randomInt == 1) {
        return text2 = "Rock";
    } else if (randomInt == 2) {
        return text2 = "Paper";
    } else if (randomInt == 3) {
        return text2 = "Scissors";
    }
}

//Chooses which display to output based on the result
