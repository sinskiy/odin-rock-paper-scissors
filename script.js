const TOOLS = ["rock", "paper", "scissors"];
const DEFAULT_ROUNDS = 5;

playGame();

function playGame() {
  const buttons = document.querySelectorAll("button");
  buttons.forEach((button) =>
    button.addEventListener("click", handleButtonClick)
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

  function handleButtonClick(e) {
    const humanChoice = e.target.id;
    const computerChoice = getComputerChoice();
    playRound(humanChoice, computerChoice);
  }

  function playRound(humanChoice, computerChoice) {
    const result = document.querySelector("#result");
    const computerScoreElem = document.querySelector("#computer-score");
    const humanScoreElem = document.querySelector("#human-score");

    const choicesDifference =
      TOOLS.indexOf(humanChoice) - TOOLS.indexOf(computerChoice);
    if (choicesDifference === 0) {
      result.textContent = `Draw! ${humanChoice} is the same as ${computerChoice}`;
    } else if (choicesDifference === 1 || choicesDifference === -2) {
      result.textContent = `You win! ${humanChoice} beats ${computerChoice}`;
      humanScore += 1;
      humanScoreElem.textContent = humanScore;
    } else {
      result.textContent = `You loose! ${computerChoice} beats ${humanChoice}`;
      computerScore += 1;
      computerScoreElem.textContent = computerScore;
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

function getComputerChoice() {
  // get floated from 0 to 2 and round it
  const randomToolIndex = Math.floor(Math.random() * 3);
  return TOOLS[randomToolIndex];
}
