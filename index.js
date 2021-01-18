// get the inputs
   
let playerSelection;
let computerSelection = computerPlay();


// score kepper
let playerScore = 0;
let computerScore = 0;

//computer input 
function computerPlay() {
let inputString = ["rock", "paper", "scissors"];

let randIndex = Math.floor(Math.random() * inputString.length);

return inputString[randIndex];
}


// playing a single round
function playRound(playerSelection, computerSelection) {

  playerSelection = prompt("Select one from (rock, paper, scissors) and start playing.")
    playerSelection = playerSelection.toLowerCase();

    console.log(playerSelection, computerSelection);

  if ( playerSelection === "rock" && computerSelection === "scissors") {

    playerScore++;
    console.log("You won. Rock beats Scissors");

  }else if (playerSelection === "scissors" && computerSelection === "rock") {

    computerScore++;
    console.log( "You lost. Rock beats Scissors");

  }else if (playerSelection === "paper" && computerSelection === "scissors") {

    computerScore++;
    console.log( "You lost. Scissors beats Paper.");

  }else if (playerSelection === "scissors" && computerSelection === "paper") {

    playerScore++;
    console.log( "You won. Scissors beats Paper.");

  }else if (playerSelection === "rock" && computerSelection === "paper") {

    computerScore++;
    console.log( "You lost. Paper beats Rock.");

  }else if (playerSelection === "paper" && computerSelection === "rock") {

    playerScore++;
    console.log( "You won. Paper beats Rock.");

  }else if (playerSelection === computerSelection){
    console.log( "Its a tie. Play again.");
  }
}


function game() {

  playRound(playerSelection,computerSelection);
  playRound(playerSelection,computerSelection);
  playRound(playerSelection,computerSelection);
  playRound(playerSelection,computerSelection);

  if (playerScore > computerScore) {
  console.log("You are the winner of this game. congrats.");
  console.log(playerScore, computerScore)

  }else if(computerScore > playerScore){
  console.log("Computer is the winner of this game.")
  console.log(playerScore, computerScore)

  }else{
  console.log("This game was a Tie. Play again.");
  console.log(playerScore , computerScore)
  }
}

game();