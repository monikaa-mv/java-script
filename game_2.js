const startNewGame = () => {
const StartGame = confirm("Do you want to play a game?");
StartGame ? playGame() : alert("No problem, Goodbye!");
};

const playGame = () => {
    while(true){
        let playerChoice = getPlayerChoice();
        playerChoice = formatPlayerChoice(playerChoice);
        if(playerChoice === ""){
            invalidChoice();
            continue;
        }
        if(!playerChoice){
            notToPlay();
            break;
        }
        playerChoice = checkPlayerChoice(playerChoice);
        if(!playerChoice){
            invalidChoice();
            continue;
        }

        const computerChoice = getComputerChoice();
        const res = checkWinner(playerChoice, computerChoice);
        displayWinner(res);
        if(askToPlayAgain()){
            continue;
        }
        else{
            break;
        }
    }
};

const getPlayerChoice = () => {
    return prompt("Enter your choice: Rock, Paper or Scissors");
};

const formatPlayerChoice = (playerChoice) => {
    if(playerChoice || playerChoice===""){
        playerChoice = playerChoice.toLowerCase();
        return playerChoice;
    }
    else{
        return false;
    }
};

const invalidChoice = () => {
    alert("Invalid choice");
};

const notToPlay = () => {
    alert("No problem, Next Time!");
};

const checkPlayerChoice = (playerChoice) => {
    if(playerChoice === "rock" || playerChoice === "paper" || playerChoice === "scissors"){
        return playerChoice;
    }
    else{
        return false;
    }
};

const getComputerChoice = () => {
    const num = Math.floor(Math.random()*3);
    const arr = ["rock", "paper", "scissors"];
    return arr[num];

};

const checkWinner = (playerChoice, computerChoice) => {
    if(playerChoice === computerChoice){
        return "tie";
    }
    else if(playerChoice === "rock" && computerChoice === "scissors"){
        return "player wins";
    }
    else if(playerChoice === "paper" && computerChoice === "rock"){
        return "player wins";
    }
    else if(playerChoice === "scissors" && computerChoice === "paper"){
        return "player wins";
    }
    else{
        return "computer wins";
    }
};

const displayWinner = (res) => {
    alert(res);
};

const askToPlayAgain = () => {
    return confirm("Do you want to play again?");
};

startNewGame();