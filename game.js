//the RPS game logic

let playGame = confirm("Do you want to play a game?");
if(playGame){
    let playerChoice = prompt("Enter your choice: Rock, Paper or Scissors");
    if(playerChoice){
        let playerOne = playerChoice.trim().toLowerCase();
        if(playerOne === "rock" || playerOne === "paper" || playerOne === "scissors"){
            let computerChoice = Math.floor(Math.random()*3+1);
            let comp = computerChoice ===1 ? "rock" : computerChoice ===2 ? "paper" : "scissors";

            let res = playerOne === comp ? "playerOne = "+playerOne+ "\nComputer = "+comp+ "\nIt's a tie!" 
            : playerOne === "rock" && comp === "scissors" ? "playerOne = "+playerOne+ "\nComputer = "+comp+ "\nYou win!" 
            : playerOne === "paper" && comp === "rock" ? "playerOne = "+playerOne+ "\nComputer = "+comp+ "\nYou win!" 
            : playerOne === "scissors" && comp === "paper" ? "playerOne = "+playerOne+ "\nComputer = "+comp+ "\nYou win!" 
            : "You lose!";
          alert(res);  
        }
        else{
            console.log("Invalid choice");
        }
    }else{
        console.log("No problem, Next Time!");
    }
}
else{
    console.log("No problem, Goodbye!");
}
