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

  playerTurn = (e) => {
    var player = this.turn ? this.player1 : this.player2;
    this.board[e.target.dataset.i] = player.id;
    updateBoard(e.target, player.token);
    this.turn = !this.turn;
    updateGameboardHeader();
    this.checkWinConditions();
  }

  gameOver(winner) {
    var winningPlayer = this[`player${winner}`];
    winningPlayer.wins.push(this.board);
    winningPlayer.saveWinsToStorage();
    updateGameboardHeader("win", winningPlayer);
    updatePlayerSidebar(winningPlayer);
    setTimeout(this.resetBoard, 500);
    setTimeout(updateGameboardHeader, 500);
  }


  getCombos() {
    return [
      [this.board[0], this.board[1], this.board[2]],
      [this.board[3], this.board[4], this.board[5]],
      [this.board[6], this.board[7], this.board[8]],
      [this.board[0], this.board[3], this.board[6]],
      [this.board[1], this.board[4], this.board[7]],
      [this.board[2], this.board[5], this.board[8]],
      [this.board[0], this.board[4], this.board[8]],
      [this.board[2], this.board[4], this.board[6]]
    ]
  }

  checkDraw() {
    if (!this.board.includes(0)) {
      updateGameboardHeader("draw");
      setTimeout(this.resetBoard, 500);
    }
  }

  checkWin(groupOf3) {
    var set = new Set(groupOf3);
    if (!(set.has(0)) && set.size === 1) {
      this.gameOver(Array.from(set)[0]);
    } else {
      this.checkDraw();
    }
  }

  checkWinConditions() {
    var combos = this.getCombos();
    for (var i = 0; i < combos.length; i++) {
      this.checkWin(combos[i])
    }
  }

  resetBoard = () => {
    this.board = [0, 0, 0, 0, 0, 0, 0, 0, 0];
    clearBoardDOM();
  }

}
