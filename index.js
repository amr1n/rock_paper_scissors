
// the inputs
let playerSelection;
let computerSelection;

// score trakers
let playerScore = 0;
let computerScore = 0;

//  results and scores output
let results = document.querySelector('.resultsTxt');
let scores = document.querySelector('.scores');

let selections = document.querySelector('.selections');
let body = document.querySelector('body');

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
  }else if (playerSelection === "scissors" && computerSelection === "rock") {  
    computerScore++; 
 
  }else if (playerSelection === "paper" && computerSelection === "scissors") { 
    computerScore++; 
 
  }else if (playerSelection === "scissors" && computerSelection === "paper") { 
    playerScore++; 
 
  }else if (playerSelection === "rock" && computerSelection === "paper") {  
    computerScore++;
 
  }else if (playerSelection === "paper" && computerSelection === "rock") { 
    playerScore++;

  } 
}


function game() {
  computerSelection = computerPlay(); 
  playRound(playerSelection,computerSelection);
  scores.textContent = ` Your: ${playerScore} | Computer: ${computerScore}`;

  selections.textContent = ` You: ${playerSelection} | Computer: ${computerSelection}`

  if (playerScore === 5) {
    results.textContent = "You are the winner";
  }else if (computerScore === 5) {
    results.textContent = "Computer is the winner";
  } 

  gameRestart();
}


// the dom
let buttons = document.querySelectorAll('button');


buttons.forEach((button) => {
  function btnCallback() {
      if (button.className === "rock") {
        playerSelection = "rock";
      }else if (button.className === "paper"){
        playerSelection = "paper";
      }else if (button.className === "scissors"){
        playerSelection = "scissors";
      }
      
      game();
  }
  button.addEventListener('click', btnCallback);
});


function gameRestart() {

  // remove all the existing buttons  
  if ( playerScore === 5 || computerScore === 5) {
    for (i = 0; i < buttons.length; i++) {
      buttons[i].remove();
    }

    let restartBtn = document.createElement('button');
        restartBtn.textContent = "Play again";
    restartBtn.addEventListener('click', function() {
      location.reload();
    });

    body.appendChild(restartBtn);

  }

}
