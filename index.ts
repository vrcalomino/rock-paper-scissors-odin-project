type WINNER = "player" | "computer" | "tie";

const ROCK = "rock";
const PAPER = "paper";
const SCISSORS = "scissors";

const getComputerChoice = (): string => {
  const options = [ROCK, PAPER, SCISSORS];
  const randomNumber = Math.floor(Math.random() * 3);
  return options[randomNumber];
};

const playRound = (
  playerSelection: string,
  computerSelection: string
): WINNER => {
  console.log(playerSelection, computerSelection);
  const playerSelectionFinal: string = playerSelection.toLowerCase();
  if (playerSelectionFinal === ROCK && computerSelection === SCISSORS) {
    return "player";
  } else if (playerSelectionFinal === ROCK && computerSelection === PAPER) {
    return "computer";
  } else if (playerSelectionFinal === PAPER && computerSelection === ROCK) {
    return "player";
  } else if (playerSelectionFinal === PAPER && computerSelection === SCISSORS) {
    return "computer";
  } else if (playerSelectionFinal === SCISSORS && computerSelection === PAPER) {
    return "player";
  } else if (playerSelectionFinal === SCISSORS && computerSelection === ROCK) {
    return "computer";
  } else {
    return "tie";
  }
};

const game = (): WINNER => {
  let playerScore: number = 0;
  let computerScore: number = 0;
  let userSelection: string | null = "";
  for (let i = 0; i < 5; i++) {
    userSelection = prompt("Enter your selection: ");
    if (!userSelection) {
      continue;
    }
    if (playRound(userSelection, getComputerChoice()) === "player") {
      playerScore += 1;
    } else if (playRound(userSelection, getComputerChoice()) === "computer") {
      computerScore += 1;
    } else {
      continue;
    }
  }
  if (playerScore > computerScore) {
    return "player";
  } else if (playerScore < computerScore) {
    return "computer";
  } else {
    return "tie";
  }
};

console.log(game());
