var ROCK = "rock";
var PAPER = "paper";
var SCISSORS = "scissors";
var getComputerChoice = function () {
    var options = [ROCK, PAPER, SCISSORS];
    var randomNumber = Math.floor(Math.random() * 3);
    return options[randomNumber];
};
var playRound = function (playerSelection, computerSelection) {
    console.log(playerSelection, computerSelection);
    var playerSelectionFinal = playerSelection.toLowerCase();
    if (playerSelectionFinal === ROCK && computerSelection === SCISSORS) {
        return "player";
    }
    else if (playerSelectionFinal === ROCK && computerSelection === PAPER) {
        return "computer";
    }
    else if (playerSelectionFinal === PAPER && computerSelection === ROCK) {
        return "player";
    }
    else if (playerSelectionFinal === PAPER && computerSelection === SCISSORS) {
        return "computer";
    }
    else if (playerSelectionFinal === SCISSORS && computerSelection === PAPER) {
        return "player";
    }
    else if (playerSelectionFinal === SCISSORS && computerSelection === ROCK) {
        return "computer";
    }
    else {
        return "tie";
    }
};
var game = function () {
    var playerScore = 0;
    var computerScore = 0;
    var userSelection = "";
    for (var i = 0; i < 5; i++) {
        userSelection = prompt("Enter your selection: ");
        if (!userSelection) {
            continue;
        }
        if (playRound(userSelection, getComputerChoice()) === "player") {
            playerScore += 1;
        }
        else if (playRound(userSelection, getComputerChoice()) === "computer") {
            computerScore += 1;
        }
        else {
            continue;
        }
    }
    if (playerScore > computerScore) {
        return "player";
    }
    else if (playerScore < computerScore) {
        return "computer";
    }
    else {
        return "tie";
    }
};
console.log(game());
