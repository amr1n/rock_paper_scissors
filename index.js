
// the inputs
let playerSelection;
let computerSelection;

// score trakers
let playerScore = 0;
let computerScore = 0;

//  results and scores output
let results = document.querySelector('.results');
let scores = document.querySelector('.scores');

//computer selection. 
function computerPlay() {
  let inputString = ["rock", "paper", "scissors"];
  let randIndex = Math.floor(Math.random() * inputString.length);

  return inputString[randIndex];
}


// playing a single round
function playRound(playerSelection, computerSelection) {
  
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

  }else{
    console.log( "Its a tie. Play again.");
  }
}


function game() {
  computerSelection = computerPlay();
  console.log(playerSelection, computerSelection);
  playRound(playerSelection,computerSelection);

  console.log(playerScore, computerScore)
  if (playerScore === 5 &&  computerScore < 5) {
  console.log("You are the winner of this game. congrats.");
  console.log(playerScore, computerScore)

  }else if (playerScore < 5 && computerScore === 5){
  console.log("You lose. computer is the winner.");
  console.log(playerScore , computerScore)
  }
}


// dom
let buttons = document.querySelectorAll('button');
for (i = 0; i < buttons.length; i++) {
    let btn = buttons[i];
    function callback() {
      if (btn.className === "rock") {
        playerSelection = "rock";
      }else if (btn.className === "scissors"){
        playerSelection = "scissors";
      }else {
        playerSelection = "paper";
      }

      game();
    }

    btn.addEventListener('click', callback);

}