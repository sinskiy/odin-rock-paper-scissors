const TOOLS = ["rock", "paper", "scissors"];
const DEFAULT_ROUNDS = 5;

playGame();

function playGame() {
  const buttons = document.querySelectorAll("button");
  buttons.forEach((button) =>
    button.addEventListener("click", handleButtonClick)
  );

  const winner = document.querySelector("#winner");
  let humanScore = 0;
  let computerScore = 0;

  function handleButtonClick(e) {
    const humanChoice = e.target.id;
    const computerChoice = getComputerChoice();
    playRound(humanChoice, computerChoice);
  }

  function playRound(humanChoice, computerChoice) {
    const result = document.querySelector("#result");

    const winner = getWinner(humanChoice, computerChoice);
    switch (winner) {
      case "draw":
        result.textContent = `Draw! ${humanChoice} is the same as ${computerChoice}`;
        break;

      case "human":
        result.textContent = `You win! ${humanChoice} beats ${computerChoice}`;
        humanScore += 1;
        break;

      case "computer":
        result.textContent = `You loose! ${computerChoice} beats ${humanChoice}`;
        computerScore += 1;
        break;
    }

    if (computerScore === DEFAULT_ROUNDS || humanScore === DEFAULT_ROUNDS) {
      printGameWinner();

      humanScore = 0;
      computerScore = 0;
    }

    updateScoreText();
  }

  function printGameWinner() {
    if (humanScore > computerScore) {
      winner.textContent = "You win the game";
    } else {
      winner.textContent = "Computer wins the game";
    }
  }

  const computerScoreElem = document.querySelector("#computer-score");
  const humanScoreElem = document.querySelector("#human-score");
  function updateScoreText() {
    humanScoreElem.textContent = humanScore;
    computerScoreElem.textContent = computerScore;
  }
}

function getWinner(humanChoice, computerChoice) {
  const choicesDifference =
    TOOLS.indexOf(humanChoice) - TOOLS.indexOf(computerChoice);
  if (choicesDifference === 0) {
    return "draw";
  } else if (choicesDifference === 1 || choicesDifference === -2) {
    return "human";
  } else {
    return "computer";
  }
}

function getComputerChoice() {
  // get floated from 0 to 2 and round it
  const randomToolIndex = Math.floor(Math.random() * 3);
  return TOOLS[randomToolIndex];
}
