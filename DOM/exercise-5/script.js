// Objective
// In this exercise, you'll build a simple Rock-Paper-Scissors game using HTML, CSS (via Tailwind CSS), and JavaScript. This game will allow a user to play against the computer, and it will keep track of the score.

// Instructions and setup
// HTML with Tailwind CSS:

// A card at the top to display the score (User vs. Computer).
// A card with three buttons for selecting Rock, Paper, or Scissors.
// An empty card to display the result of each round.
// A button to play the round.
// JavaScript:

// Listen for a click on the play button.
// Check if the user selected something; if not, alert the user.
// Mark the user selected button in some way.
// Randomly select Rock, Paper, or Scissors for the computer.
// Compare the user's selection with the computer's selection.
// Display the result in the output area.
// Update the score and the DOM accordingly.

// outline outline-offset-2 outline-8 outline-red-500

const browserWindow = document.defaultView;

const btnRock = document.getElementById("rock");
const btnPaper = document.getElementById("paper");
const btnScissors = document.getElementById("scissors");
const btnPlay = document.getElementById("play-button");
const boxResult = document.getElementById("result");
const userScore = document.getElementById("user-score");
const computerScore = document.getElementById("computer-score");

let playerChoice = "";
let buttonToggled = false;
let computerChoice = "";

function setPlayerChoice(choice) {
  playerChoice = choice;
}

const styleOnChoice = [
  "outline",
  "outline-offset-2",
  "outline-8",
  "outline-red-500",
];

btnRock.addEventListener("click", () => {
  setPlayerChoice("rock");
  btnRock.classList.add(...styleOnChoice);
  btnPaper.classList.remove(...styleOnChoice);
  btnScissors.classList.remove(...styleOnChoice);
});
btnPaper.addEventListener("click", () => {
  setPlayerChoice("paper");
  btnPaper.classList.add(...styleOnChoice);
  btnScissors.classList.remove(...styleOnChoice);
  btnRock.classList.remove(...styleOnChoice);
});
btnScissors.addEventListener("click", () => {
  setPlayerChoice("scissors");
  btnScissors.classList.add(...styleOnChoice);
  btnPaper.classList.remove(...styleOnChoice);
  btnRock.classList.remove(...styleOnChoice);
});

function setComputerChoice() {
  let rnd = Math.floor(Math.random() * 3);
  let computerChoice = "";
  switch (rnd) {
    case 0:
      computerChoice = "rock";
      break;
    case 1:
      computerChoice = "paper";
      break;
    case 2:
      computerChoice = "scissors";
      break;
    default:
      console.log("Error during generating the computer choice.");
  }
  return computerChoice;
}

function computerWins() {
  let computerWins = true;

  // Handling just the cases in which the user wins and setting the variable to false in that case
  switch (computerChoice) {
    case "rock":
      if (playerChoice === "paper") computerWins = false;
      break;
    case "paper":
      if (playerChoice === "scissors") computerWins = false;
      break;
    case "scissors":
      if (playerChoice === "rock") computerWins = false;
      break;
    default:
      console.log("Error evaluating the winner.");
  }
  return computerWins;
}

btnPlay.addEventListener("click", () => {
  if (!playerChoice) alert("Please select rock, paper, or scissors!");
  else {
    computerChoice = setComputerChoice();

    if (playerChoice === computerChoice) {
      boxResult.textContent = `You chose ${playerChoice}. Computer also chose ${computerChoice}. It is a draw!`;
    } else {
      if (computerWins()) {
        boxResult.textContent = `You chose ${playerChoice}. Computer chose ${computerChoice}. Computer wins!`;
        computerScore.textContent = parseInt(computerScore.textContent) + 1;
      } else {
        boxResult.textContent = `You chose ${playerChoice}. Computer chose ${computerChoice}. You win!`;
        userScore.textContent = parseInt(userScore.textContent) + 1;
      }
    }
  }
});
