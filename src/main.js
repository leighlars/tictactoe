var gameboard = document.querySelector(".gameboard");
var gameboardHeader = document.querySelector(".gameboard-header")
var p1WinCounter = document.querySelector(".p1-wins-counter");
var p2WinCounter = document.querySelector(".p2-wins-counter");
var p1WinDisplay = document.querySelector(".p1-mini-game-win-display");
var p2WinDisplay = document.querySelector(".p2-mini-game-win-display");

var game = new Game();

// window.onload = retrieveWinsFromStorage();
gameboard.addEventListener("click", selectSquare);


function selectSquare(e) {
  e.preventDefault();
  game.gameplayProgression(e);
}

function updateGameboardHeader(condition, winningPlayer) {
  if (condition === "win") {
      gameboardHeader.innerText = `${winningPlayer.token} wins!`;
  } else if (condition === "draw") {
      gameboardHeader.innerText = "It's a draw!";
  } else {
      gameboardHeader.innerText = `It's ${game.turn ? "X" : "O"}'s turn!`;
  }
}
