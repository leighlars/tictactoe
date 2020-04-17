class Game {
  constructor() {
    this.player1 = new Player(1, "X");
    this.player2 = new Player(2, "O");
    this.board = {
      tl:null, tm:null, tr:null,
      ml:null, mm:null, mr:null,
      bl:null, bm:null, br:null
    };
    this.turn = true;
  }

  playerTurn(event) {
    if (this.turn === true) {
      event.target.innerText = this.player1.token;
      gameboardHeader.innerText = `It's ${this.player2.token}'s turn!`;
      this.turn = false;
    } else if (this.turn === false) {
      event.target.innerText = this.player2.token;
      gameboardHeader.innerText = `It's ${this.player1.token}'s turn!`;
      this.turn = true;
    }
  }

  // A way to check the Game’s board data for win conditions
  // checkWinConditions() {
  //   // if same 3 icons in rows, columns, or diagonals, win for that player
  //   // if (btn 1=2=3 || 1=5=9 || 1=4=7 || 2=5=8 || 3=6=9 || 4=5=6= || 7=8=9)
  //   gameboardHeader.innerText = `${player1.token} wins!`
  //   gameboardHeader.innerText = `${player2.token} wins!`
  //   checkDraw();
  //
  //   saveGameToPlayerWin();
  // }

  // A way to detect when a game is a draw (no one has won)
  // checkDraw() {
  //   // if no rows / columns / diagonals are 3 in a row,
  //   gameboardHeader.innerText = "It's a draw!";
  //   resetBoard();
  // }

  // A way to save a winning Game’s board data to the correct player’s wins array
  // saveGameToPlayerWinCount() {
  //   if (p1 wins) {
  //     // add mini game to p1's wins array;
  //   } else if (p2 wins) {
  //     // add mini game to p2's wins array;
  //   }
  //   updatePlayerSidebar();
  //   resetBoard();
  // }

  // updatePlayerSidebar() {
  //   if (p1 wins) {
  //     p1WinCounter.innerText = "${player1.wins.length} wins";
  //     // add mini game to p2's wins display:
  //     // p1WinDisplay.insertAdjacentHTML("afterbegin", gameTemplate);
  //
  //   } else if (p2 wins) {
  //     p2WinCounter.innerText = "${player2.wins.length} wins";
  //     // add mini game to p2's wins display:
  //     // p2WinDisplay.insertAdjacentHTML("afterbegin", gameTemplate);
  //   }
  // }

  // A way to reset the Game’s board to begin a new game
  // resetBoard() {
  //   b1.value = "";
  //   b2.value = "";
  //   b3.value = "";
  //   b4.value = "";
  //   b5.value = "";
  //   b6.value = "";
  //   b7.value = "";
  //   b8.value = "";
  //   b9.value = "";
  //   b1.disabled = false;
  //   b2.disabled = false;
  //   b3.disabled = false;
  //   b4.disabled = false;
  //   b5.disabled = false;
  //   b6.disabled = false;
  //   b7.disabled = false;
  //   b8.disabled = false;
  //   b9.disabled = false;
  // }

}
