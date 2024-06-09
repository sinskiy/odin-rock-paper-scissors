const TOOLS = ["rock", "paper", "scissors"];
const DEFAULT_ROUNDS = 5;

playGame();

function playGame() {
  const buttons = document.querySelectorAll("button");
  buttons.forEach((button) =>
    button.addEventListener("click", (e) =>
      playRound(e.target.id, getComputerChoice())
    )
  );

  let humanScore = 0;
  let computerScore = 0;

  playRounds(DEFAULT_ROUNDS);
  printGameWinner();

  function playRounds(rounds) {
    // for (let i = 0; i < rounds; i++) {
    //   const humanSelection = getHumanChoice();
    //   const computerSelection = getComputerChoice();
    //   playRound(humanSelection, computerSelection);
    // }
  }

  function playRound(humanChoice, computerChoice) {
    const choicesDifference =
      TOOLS.indexOf(humanChoice) - TOOLS.indexOf(computerChoice);
    if (choicesDifference === 0) {
      console.log(`Draw! ${humanChoice} is the same as ${computerChoice}`);
    } else if (choicesDifference === 1 || choicesDifference === -2) {
      console.log(`You win! ${humanChoice} beats ${computerChoice}`);
      humanScore += 1;
    } else {
      console.log(`You loose! ${computerChoice} beats ${humanChoice}`);
      computerScore += 1;
    }
  }

  function printGameWinner() {
    if (humanScore > computerScore) {
      console.log("You win the game");
    } else if (humanScore < computerScore) {
      console.log("Computer wins the game");
    } else {
      console.log("Draw");
    }
  }
}

function getHumanChoice() {
  let choice = "";
  do {
    choice = prompt("Choose a tool: rock, paper, scissors").toLowerCase();
  } while (TOOLS.indexOf(choice) === -1);
  return choice;
}

function getComputerChoice() {
  // get floated from 0 to 2 and round it
  const randomToolIndex = Math.floor(Math.random() * 3);
  return TOOLS[randomToolIndex];
}
