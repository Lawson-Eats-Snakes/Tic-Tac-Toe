# Tic-Tac-Toe

A simple web-based Tic-Tac-Toe game

## Features

* Two-player Tic-Tac-Toe
* Alternating X and O turns
* Automatic win detection
* Draw detection
* Restart button
* Runs locally using a Node.js/Express server

## Technologies

* **HTML**
* **CSS**
* **JavaScript**
* **Node.js**
* **Express.js**

## How to Run

### 1. Install Node.js

Download and install Node.js from the official Node.js website.

### 2. Install dependencies

Open a terminal in the project directory and run:

npm install


This installs the Express dependency required by the server.

### 3. Start the server

Run:

node server.js


The terminal should display:

Server running at http://localhost:3000


### 4. Open the game

Open a web browser and visit:


http://localhost:3000


### How to Play

1. Player X goes first.
2. Click an empty square to place your mark.
3. Player O takes the next turn.
4. Continue until a player gets three marks in a row or the board is full.
5. Click **Restart Game** to start a new game.

### Game Logic

The JavaScript program maintains the current state of the board and checks for eight possible winning combinations:

0 | 1 | 2
---------
3 | 4 | 5
---------
6 | 7 | 8

The game checks:

* Three horizontal combinations
* Three vertical combinations
* Two diagonal combinations

When a winning combination is found, the game ends and the winning player is displayed.

### Future Improvements

Possible additions to the project include:
None

### Purpose

This project was created as a sample full-stack project to demonstrate foundational skills in frontend development, JavaScript programming, and Node.js/Express server setup.
