const getComputerChoice = (): string => {
  const options = ["Rock", "Paper", "Scissors"];
  const randomNumber = Math.floor(Math.random() * 3);
  return options[randomNumber];
};
