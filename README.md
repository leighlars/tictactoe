# TicTacToe
Mod 1 Solo Project

# Objective
The objective for this project is to design a 2-player interactive and responsive TicTacToe game. I will demonstrate my understanding of DOM and design in HTML/CSS files; functions and event delegation in JS in 3 different JS files for their respective purposes; and local storage to persist and display users' win records.

# Planning
This solo project will use Atom as a text editor, Github Projects as a project management tool (https://github.com/leighlars/tictactoe/projects), MDN and lesson plans as references, and the employment of mentors for code feedback, guidance, and the "rubber duck" code comprehension method.

This is a 6-day project. The estimated timeline is as follows:
* Thursday pm: complete set-up, wireframes, build crude yet functional HTML/CSS, create classes for JS files
* Friday / Saturday: establish functionality for a functional game completion, including resetting the game board
* Sunday: displaying and persisting player data in sidebars (local storage)
* Monday: make the game pretty!! Polish code for DRY, SRP, dev empathy.

# Progression
4/16/2020: Created private repo, cloned repo into local folder, wire-framed the HTML/CSS and wrote out expected functions, crude rendering of HTML/CSS, created src folder with 3 JS files.
I wrote two methods for the game class that allowed 2 players to alternate their square selection, and the gameplay header prompted user for their respective turn to play. I also updated the color palette for the app. I added a board property to the game class, and the value is an object of key/values for the 9 gameboard buttons set to null as a placeholder. To plan for the method-implementation, I drafted a logic flow chart for the functions then rubber-ducked with Mod 4 student, Grayson Palmer, to ensure proper understanding of flow.

![screenshot of crude app](/readme-imgs/crude-render-html-css.png)
![screenshot of crude app](/readme-imgs/crude-functional-game-play.png)

4/17/2020: I changed the font family and size on CSS, commented out my reset board function, refactored my checkGameProgression function (it was too long, and 5/8 of the statements didn't work anyway).

I added a dataset to my HTML for each button square so I could reference them and update each square to be the id of either one of the players (1 or 2). I also changed my "this.board" array values to zero each.
From these new changes, I added a checkRows function, which took the three rows as sets (something I learned was an array-like object that uses unique values). If all three squares in the row were the same token, the unique value is 1, and that row is won by whichever player token occupies all 3 squares. I also updated the gameBoardHeader to reflect a message for the winner.

I initially had a function of 10+ lines for my gameWinProgression, but I took out the code and made new functions for checkRows and checkSet to better check my win conditions along the rows. I changed gameWinProgression to be a handler for multiple game win conditions, and playerTurn. I also refactored my playerTurn function to include ternary statements, and to utilize the data-id of each button from the DOM.
