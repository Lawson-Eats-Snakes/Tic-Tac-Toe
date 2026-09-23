const cells = document.querySelectorAll(".cell");
const status = document.getElementById("status");
const restartButton = document.getElementById("restart");

let currentPlayer = "X";
let gameActive = true;

let board = ["", "", "", "", "", "", "", "", ""];

const winningCombinations = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6]
];

function handleCellClick(event) {
    const index = event.target.dataset.index;

    // Don't allow moves on occupied squares
    if (board[index] !== "" || !gameActive) {
        return;
    }

    board[index] = currentPlayer;
    event.target.textContent = currentPlayer;

    checkGameResult();
}

function checkGameResult() {
    for (const combination of winningCombinations) {
        const [a, b, c] = combination;

        if (
            board[a] !== "" &&
            board[a] === board[b] &&
            board[a] === board[c]
        ) {
            status.textContent = `Player ${currentPlayer} wins!`;
            gameActive = false;
            return;
        }
    }

    // Check for a draw
    if (!board.includes("")) {
        status.textContent = "It's a draw!";
        gameActive = false;
        return;
    }

    // Switch players
    currentPlayer = currentPlayer === "X" ? "O" : "X";
    status.textContent = `Player ${currentPlayer}'s turn`;
}

function restartGame() {
    board = ["", "", "", "", "", "", "", "", ""];
    currentPlayer = "X";
    gameActive = true;

    cells.forEach(cell => {
        cell.textContent = "";
    });

}

// Assign each square its position
cells.forEach((cell, index) => {
    cell.dataset.index = index;
    cell.addEventListener("click", handleCellClick);
});

restartButton.addEventListener("click", restartGame);