
// the inputs
let playerSelection;
let computerSelection;

// score trakers
let playerScore = 0;
let computerScore = 0;

//  results and scores output
let results = document.querySelector('.resultsTxt');
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
    results.textContent = "You won. Rock beats Scissors";

  }else if (playerSelection === "scissors" && computerSelection === "rock") { 
    computerScore++;
    results.textContent = "You lost. Rock beats Scissors";

  }else if (playerSelection === "paper" && computerSelection === "scissors") { 
    computerScore++;
    results.textContent = "You lost. Scissors beats Paper.";

  }else if (playerSelection === "scissors" && computerSelection === "paper") { 
    playerScore++;
    results.textContent = "You won. Scissors beats Paper.";

  }else if (playerSelection === "rock" && computerSelection === "paper") { 
    computerScore++;
    results.textContent = "You lost. Paper beats Rock.";

  }else if (playerSelection === "paper" && computerSelection === "rock") { 
    playerScore++;
    results.textContent = "You won. Paper beats Rock.";

  }else{
    results.textContent = "Its a tie. Play again.";
  }
}


function game() {
  computerSelection = computerPlay(); 
  playRound(playerSelection,computerSelection);
  scores.textContent = `${playerScore} ${computerScore}`; 
}


// dom
let buttons = document.querySelectorAll('button');
let playerSelectionBtn;
for (i = 0; i < buttons.length; i++) {
    playerSelectionBtn = buttons[i];
    function callback() {
      if (playerSelectionBtn.className === "rock") {
        playerSelection = "rock";
      }else if (playerSelectionBtn.className === "scissors"){
        playerSelection = "scissors";
      }else if (playerSelectionBtn.className === "paper"){
        playerSelection = "paper";
      }

      game();
    }

    playerSelectionBtn.addEventListener('click', callback);

}


