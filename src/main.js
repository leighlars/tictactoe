var gameboard = document.querySelector(".gameboard");
var topLeftButton1 = document.querySelector(".top-left-btn");
var topMidButton2 = document.querySelector(".top-mid-btn");
var topRightButton3 = document.querySelector(".top-right-btn");
var midLeftButton4 = document.querySelector(".mid-left-btn");
var midMidButton5 = document.querySelector(".mid-mid-btn");
var midRightButton6 = document.querySelector(".mid-right-btn");
var botLeftButton7 = document.querySelector(".bot-left-btn");
var botMidButton8 = document.querySelector(".bot-mid-btn");
var botRightButton9 = document.querySelector(".bot-right-btn");
var gameboardHeader = document.querySelector(".gameboard-header")
var p1WinCounter = document.querySelector(".p1-wins-counter");
var p2WinCounter = document.querySelector(".p2-wins-counter");
var p1WinDisplay = document.querySelector(".p1-mini-game-win-display");
var p2WinDisplay = document.querySelector(".p2-mini-game-win-display");
var savedWins = [];


var game = new Game();


// window.onload = retrieveWinsFromStorage();
gameboard.addEventListener("click", selectSquare);


function selectSquare(event) {
  event.preventDefault();
}
