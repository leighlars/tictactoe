// variables
var b1 = document.querySelector(".top-left-btn");
var b2 = document.querySelector(".top-mid-btn");
var b3 = document.querySelector(".top-right-btn");
var b4 = document.querySelector(".mid-left-btn");
var b5 = document.querySelector(".mid-mid-btn");
var b6 = document.querySelector(".mid-right-btn");
var b7 = document.querySelector(".bot-left-btn");
var b8 = document.querySelector(".bot-mid-btn");
var b9 = document.querySelector(".bot-right-btn");
var p1WinCounter = document.querySelector(".p1-wins-counter");
var p2WinCounter = document.querySelector(".p2-wins-counter");
var p1WinDisplay = document.querySelector(".p1-mini-game-win-display");
var p2WinDisplay = document.querySelector(".p2-mini-game-win-display");
var savedWins = [];

// eventlisteners


// functions

function disableSelectedSquare() {
  b1.disabled = true;
  b2.disabled = true;
  b3.disabled = true;
  b4.disabled = true;
  b5.disabled = true;
  b6.disabled = true;
  b7.disabled = true;
  b8.disabled = true;
  b9.disabled = true;
}
