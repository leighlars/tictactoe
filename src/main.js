var gameboard = document.querySelector(".gameboard");
var gameboardHeader = document.querySelector(".gameboard-header")

var game = new Game();

gameboard.addEventListener("click", game.playerTurn);

function updateBoard(element, token) {
  element.innerText = token;
  element.disabled = true;
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

function createMiniBoard(miniboard) {
  var board = document.createElement("DIV");
  board.classList.add("miniboard");
  for (var i = 0; i < miniboard.length; i++) {
    var token = "";
    if (miniboard[i] === 1) token = "X";
    if (miniboard[i] === 2) token = "O";
    var box = `<div>${token}</div>`;
    board.insertAdjacentHTML("beforeend", box);
  }
  return board;
}

function updatePlayerSidebar(winningPlayer) {
  var winCounter = document.querySelector(`.p${winningPlayer.id}-wins-counter`);
  var winDisplay = document.querySelector(`.p${winningPlayer.id}-mini-game-win-display`);
  winDisplay.innerText = "";
  winCounter.innerText = `${winningPlayer.wins.length} wins`;
  for (var i = 0; i < winningPlayer.wins.length; i++) {
    var newMiniBoard = createMiniBoard(winningPlayer.wins[i]);
    winDisplay.appendChild(newMiniBoard);
  }
}

function clearBoardDOM() {
  for (var i = 0; i < gameboard.children.length; i++) {
    var button = gameboard.children[i];
    button.innerText = "";
    button.disabled = false;
  }
}
