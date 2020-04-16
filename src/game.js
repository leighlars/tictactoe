class Game {
  // A way to keep track of the data for the game board
  gameplayProgression() {

  }

  // A way to keep track of which player’s turn it currently is
  playerTurn() {

  }

  // A way to check the Game’s board data for win conditions
  checkWinConditions() {

  }

  // A way to detect when a game is a draw (no one has won)
  checkDraw() {

  }

  // A way to save a winning Game’s board data to the correct player’s wins array
  saveGameToPlayerWin() {

  }

  // A way to reset the Game’s board to begin a new game
  resetBoard() {
    b1.value = "";
    b2.value = "";
    b3.value = "";
    b4.value = "";
    b5.value = "";
    b6.value = "";
    b7.value = "";
    b8.value = "";
    b9.value = "";
    b1.disabled = false;
    b2.disabled = false;
    b3.disabled = false;
    b4.disabled = false;
    b5.disabled = false;
    b6.disabled = false;
    b7.disabled = false;
    b8.disabled = false;
    b9.disabled = false;
  }

}
