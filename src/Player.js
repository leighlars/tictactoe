class Player {
  constructor(id, token) {
    this.id = id;
    this.token = token;
    this.wins = [];
    this.retrieveWinsFromStorage()
  }

  saveWinsToStorage() {
    localStorage.setItem(`player-${this.id}-wins`, JSON.stringify(this.wins));
  }

  retrieveWinsFromStorage() {
    this.wins = JSON.parse(localStorage.getItem(`player-${this.id}-wins`)) || [];
    updatePlayerSidebar(this);
  }
}
