
// the inputs
let playerSelection;
let computerSelection;

// score trakers
let playerScore = 0;
let computerScore = 0;

//  results and scores output
let results = document.querySelector('.title');
let scores = document.querySelector('.scores');

let selections = document.querySelector('.selections');
let body = document.querySelector('body');

//computer selection. 
function computerPlay() {
  let inputString = ["rock", "paper", "scissors"];
  let randIndex = Math.floor(Math.random() * inputString.length);

  return inputString[randIndex];
}


// playing a single round and adding score
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


function gameStart() {
  computerSelection = computerPlay(); 
  
  playRound(playerSelection,computerSelection);
  scores.textContent = ` You: ${playerScore} | Computer: ${computerScore}`;

  selections.textContent = ` You: ${playerSelection} | Computer: ${computerSelection}`

  if (playerScore === 5) {
    results.textContent = "You are the winner";
  }else if (computerScore === 5) {
    results.textContent = "Computer is the winner";
  } 

  gameRestart();
}


// get the user input from objects
let objects = document.querySelectorAll('.object');
objects.forEach((object) => {
  function btnCallback() {
      if (object.id === "rock") {
        playerSelection = "rock";
      }else if (object.id === "paper"){
        playerSelection = "paper";
      }else if (object.id === "scissors"){
        playerSelection = "scissors";
      }
      console.log(object.id);
      gameStart();
  }
  object.addEventListener('click', btnCallback);
});


function gameRestart() {

  // remove all the existing objects and add PlayAgain btn.
  if ( playerScore === 5 || computerScore === 5) {
    for (i = 0; i < objects.length; i++) {
      objects[i].remove();
    }
    selections.remove();
    let restartBtnContainer = document.createElement('div')
      restartBtnContainer.className = "play_again_cont";
    let restartBtn = document.createElement('div');
        restartBtn.textContent = "Play again";
        restartBtn.className = "play_again";
    restartBtn.addEventListener('click', function() {
      location.reload();
    });

    body.appendChild(restartBtnContainer);
    restartBtnContainer.appendChild(restartBtn);

  }

}
