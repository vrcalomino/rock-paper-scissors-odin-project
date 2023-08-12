var getComputerChoice = function () {
    var options = ["Rock", "Paper", "Scissors"];
    var randomNumber = Math.floor(Math.random() * 3);
    return options[randomNumber];
};
console.log(getComputerChoice());
