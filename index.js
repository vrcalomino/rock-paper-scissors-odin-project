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
    if (playerSelection === ROCK && computerSelection === SCISSORS) {
        return "You won! ".concat(ROCK.charAt(0).toUpperCase()).concat(ROCK.slice(1), " beats ").concat(SCISSORS.charAt(0).toUpperCase()).concat(SCISSORS.slice(1));
    }
    else if (playerSelection === ROCK && computerSelection === PAPER) {
        return "You lose! ".concat(ROCK.charAt(0).toUpperCase()).concat(ROCK.slice(1), " loses to ").concat(PAPER.charAt(0).toUpperCase()).concat(PAPER.slice(1));
    }
    else if (playerSelection === PAPER && computerSelection === ROCK) {
        return "You won! ".concat(PAPER.charAt(0).toUpperCase()).concat(PAPER.slice(1), " beats ").concat(ROCK.charAt(0).toUpperCase()).concat(ROCK.slice(1));
    }
    else if (playerSelection === PAPER && computerSelection === SCISSORS) {
        return "You lose! ".concat(PAPER.charAt(0).toUpperCase()).concat(PAPER.slice(1), " loses to ").concat(SCISSORS.charAt(0).toUpperCase()).concat(SCISSORS.slice(1));
    }
    else if (playerSelection === SCISSORS && computerSelection === PAPER) {
        return "You won! ".concat(SCISSORS.charAt(0).toUpperCase()).concat(SCISSORS.slice(1), " beats ").concat(PAPER.charAt(0).toUpperCase()).concat(PAPER.slice(1));
    }
    else if (playerSelection === SCISSORS && computerSelection === ROCK) {
        return "You lose! ".concat(SCISSORS.charAt(0).toUpperCase()).concat(SCISSORS.slice(1), " loses to ").concat(ROCK.charAt(0).toUpperCase()).concat(ROCK.slice(1));
    }
    else {
        return "It's a tie!";
    }
};
var comp = getComputerChoice();
console.log(playRound(ROCK, comp));
