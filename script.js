const tools = ["rock", "paper", "scissors"];

let humanScore = 0;
let computerScore = 0;

function playRound(humanChoice, computerChoice) {}

function getComputerChoice() {
  // get floated from 0 to 2 and round it
  const randomToolIndex = Math.floor(Math.random() * 3);
  return tools[randomToolIndex];
}

function getHumanChoice() {
  let choice = "";
  do {
    choice = prompt("Choose a tool: Rock, Paper, Scissors").toLowerCase();
  } while (!tools[choice]);
  return choice;
}
