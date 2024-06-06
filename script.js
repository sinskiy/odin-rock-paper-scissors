const tools = ["rock", "paper", "scissors"];

function getComputerChoice() {
  // get floated from 0 to 2 and round it
  const randomToolIndex = Math.floor(Math.random() * 3);
  return tools[randomToolIndex];
}

function getHumanChoice() {
  const randomTool = prompt("Choose a tool");
  return randomTool;
}
