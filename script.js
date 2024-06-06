const tools = ["rock", "paper", "scissors"];

let humanScore = 0;
let computerScore = 0;

function playRound(humanChoice, computerChoice) {
  const choicesDifference =
    tools.indexOf(humanChoice) - tools.indexOf(computerChoice);
  if (choicesDifference === 0) {
    console.log(`Draw! ${humanChoice} is the same as ${computerChoice}`);
  } else if (choicesDifference === 1 || choicesDifference === -2) {
    console.log(`You win! ${humanChoice} beats ${computerChoice}`);
  } else {
    console.log(`You loose! ${computerChoice} beats ${humanChoice}`);
  }
}

const humanSelection = getHumanChoice();
const computerSelection = getComputerChoice();

playRound(humanSelection, computerSelection);

function getHumanChoice() {
  let choice = "";
  do {
    choice = prompt("Choose a tool: rock, paper, scissors").toLowerCase();
  } while (tools.indexOf(choice) === -1);
  return choice;
}

function getComputerChoice() {
  // get floated from 0 to 2 and round it
  const randomToolIndex = Math.floor(Math.random() * 3);
  return tools[randomToolIndex];
}
