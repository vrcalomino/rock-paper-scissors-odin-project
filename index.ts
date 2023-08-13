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
): string => {
  console.log(playerSelection, computerSelection);
  if (playerSelection === ROCK && computerSelection === SCISSORS) {
    return `You won! ${ROCK.charAt(0).toUpperCase()}${ROCK.slice(
      1
    )} beats ${SCISSORS.charAt(0).toUpperCase()}${SCISSORS.slice(1)}`;
  } else if (playerSelection === ROCK && computerSelection === PAPER) {
    return `You lose! ${ROCK.charAt(0).toUpperCase()}${ROCK.slice(
      1
    )} loses to ${PAPER.charAt(0).toUpperCase()}${PAPER.slice(1)}`;
  } else if (playerSelection === PAPER && computerSelection === ROCK) {
    return `You won! ${PAPER.charAt(0).toUpperCase()}${PAPER.slice(
      1
    )} beats ${ROCK.charAt(0).toUpperCase()}${ROCK.slice(1)}`;
  } else if (playerSelection === PAPER && computerSelection === SCISSORS) {
    return `You lose! ${PAPER.charAt(0).toUpperCase()}${PAPER.slice(
      1
    )} loses to ${SCISSORS.charAt(0).toUpperCase()}${SCISSORS.slice(1)}`;
  } else if (playerSelection === SCISSORS && computerSelection === PAPER) {
    return `You won! ${SCISSORS.charAt(0).toUpperCase()}${SCISSORS.slice(
      1
    )} beats ${PAPER.charAt(0).toUpperCase()}${PAPER.slice(1)}`;
  } else if (playerSelection === SCISSORS && computerSelection === ROCK) {
    return `You lose! ${SCISSORS.charAt(0).toUpperCase()}${SCISSORS.slice(
      1
    )} loses to ${ROCK.charAt(0).toUpperCase()}${ROCK.slice(1)}`;
  } else {
    return "It's a tie!";
  }
};

const comp: string = getComputerChoice();
console.log(playRound(ROCK, comp));
