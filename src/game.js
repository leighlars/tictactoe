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
    this.checkWinConditions();
  }

  playerTurn(e) {
    var player = this.turn ? this.player1 : this.player2;
    this.board[e.target.dataset.i] = player.id;
    e.target.innerText = player.token;
    this.turn = !this.turn;
    this.updateGameboardHeader();
  }

  checkWin(groupOf3) {
    var set = new Set(groupOf3);
    if (!(set.has(0)) && set.size === 1) {
      this.updateWinner(Array.from(set)[0]);
    } else {
      this.checkDraw();
    }
  }

  updateWinner(winner) {
    var winningPlayer = this[`player${winner}`];
    winningPlayer.wins.push(this);
    this.updateGameboardHeader("win", winningPlayer);
    this.updatePlayerSidebar(winningPlayer);
    setTimeout(this.resetBoard, 500);
    setTimeout(this.updateGameboardHeader, 1000);
    return winningPlayer;
  }

  checkDraw() {
    if (!this.board.includes(0)) {
      this.updateGameboardHeader("draw");
      setTimeout(this.resetBoard, 1000);
    }
  }

  updateGameboardHeader(condition, winningPlayer) {
    if (condition === "win") {
      gameboardHeader.innerText = `${winningPlayer.token} wins!`;
    } else if (condition === "draw") {
      gameboardHeader.innerText = "It's a draw!";
    } else {
      gameboardHeader.innerText = `It's ${this.turn ? "X" : "O"}'s turn!`;
    }
  }

  updatePlayerSidebar(winningPlayer) {
    if (winningPlayer.id === 1) {
      p1WinCounter.innerText = `${winningPlayer.wins.length} wins`;
    } else {
      p2WinCounter.innerText = `${winningPlayer.wins.length} wins`;
    }
  }

  // createMiniBoard(miniboard) {
  //   for (var i = 0; i < winningPlayer.wins; i++) {
  //     p1WinDisplay.insertAdjacentHTML("afterbegin", miniboard);
  //   }
  //   for (var i = 0; i < winningPlayer.wins; i++) {
  //     p2WinDisplay.insertAdjacentHTML("afterbegin", miniboard);
  //   }
  // }

  checkRows() {
    var rows = [];
    for (var i = 0; i < this.board.length; i += 3) {
      var slicedRow = this.board.slice(i, i + 3);
      this.checkWin(slicedRow);
    }
  }

  checkColumns() {
    var firstColumn = [this.board[0], this.board[3], this.board[6]];
    var secondColumn = [this.board[1], this.board[4], this.board[7]];
    var thirdColumn = [this.board[2], this.board[5], this.board[8]];
    var columns = [firstColumn, secondColumn, thirdColumn];
    for (var i = 0; i < columns.length; i++) {
      this.checkWin(columns[i]);
    }
  }

  checkDiagonals() {
    var forwardDiagonal = [this.board[0], this.board[4], this.board[8]];
    var backwardDiagonal = [this.board[2], this.board[4], this.board[6]];
    this.checkWin(forwardDiagonal);
    this.checkWin(backwardDiagonal);
  }

  checkWinConditions() {
    this.checkRows();
    this.checkColumns();
    this.checkDiagonals();
  }

  resetBoard() {
    this.board = [0, 0, 0, 0, 0, 0, 0, 0, 0];
    for (var i = 0; i < gameboard.children.length; i++) {
      gameboard.children[i].innerText = "";
      gameboard.children[i].disabled = false;
    }
  }

}
