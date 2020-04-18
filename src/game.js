class Game {
  constructor() {
    this.player1 = new Player(1, "X");
    this.player2 = new Player(2, "O");
    this.board = [
      0, 0, 0,
      0, 0, 0,
      0, 0, 0
    ];
    this.turn = true;
  }

  gameplayProgression(e) {
    this.playerTurn(e);
    e.target.disabled = true;
    this.checkRows();
  }

  playerTurn(e) {
    var player = this.turn ? this.player1 : this.player2;
    this.board[e.target.dataset.i] = player.id;
    e.target.innerText = player.token;
    player = this.turn ? this.player2 : this.player1;
    gameboardHeader.innerText = `It's ${player.token}'s turn!`;
    this.turn = !this.turn;
  }

  checkRows() {
    var rows = [];
    for (var i = 0; i < this.board.length; i += 3) {
      var slicedRow = this.board.slice(i, i + 3);
      this.checkSet(slicedRow);
    }
  }

  checkSet(groupOf3) {
    var set = new Set(groupOf3);
    if (!(set.has(0)) && set.size === 1) {
      var winner = Array.from(set)[0];
      var winningPlayer = this[`player${winner}`];
      winningPlayer.wins.push(this);
      gameboardHeader.innerText = `${winningPlayer.token} wins!`;
      if (winner === 1) {
        p1WinCounter.innerText = `${winningPlayer.wins.length} wins`;
      } else {
        p2WinCounter.innerText = `${winningPlayer.wins.length} wins`;
      }
    }
  }

  checkColumns() {
    var columns = [];
    for (var i = 0; i < this.board.length; i+= 4) {
      var slicedColumn = this.board.slice(i, i + 4);
      this.checkSet(slicedColumn);
    }
  }


}





// resetBoard();
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
  //   topLeftButton1.value = "";
  //   topMidButton2 = "";
  //   topRightButton3.value = "";
  //   midLeftButton4.value = "";
  //   midMidButton5.value = "";
  //   midRightButton6.value = "";
  //   botLeftButton7.value = "";
  //   botMidButton8.value = "";
  //   botRightButton9.value = "";
  //   topLeftButton1.disabled = false;
  //   topMidButton2.disabled = false;
  //   topRightButton3.disabled = false;
  //   midLeftButton4.disabled = false;
  //   midMidButton5.disabled = false;
  //   midRightButton6.disabled = false;
  //   botLeftButton7.disabled = false;
  //   botMidButton8.disabled = false;
  //   botRightButton9.disabled = false;
