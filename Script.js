const grid = document.getElementById("grid");
const scoreDisplay = document.getElementById("score");
let board = [];
let score = 0;

function createBoard() {
  board = Array(4).fill().map(() => Array(4).fill(0));
  score = 0;
  addNumber();
  addNumber();
  drawBoard();
}

function drawBoard() {
  grid.innerHTML = "";
  board.forEach(row => {
    row.forEach(cell => {
      const cellDiv = document.createElement("div");
      cellDiv.classList.add("cell");
      if (cell !== 0) {
        cellDiv.textContent = cell;
        cellDiv.setAttribute("data-value", cell);
      }
      grid.appendChild(cellDiv);
    });
  });
  scoreDisplay.textContent = "Score: " + score;
}

function addNumber() {
  let empty = [];
  for (let r = 0; r < 4; r++) {
    for (let c = 0; c < 4; c++) {
      if (board[r][c] === 0) empty.push({r, c});
    }
  }
  if (empty.length === 0) return;
  let spot = empty[Math.floor(Math.random() * empty.length)];
  board[spot.r][spot.c] = Math.random() > 0.1 ? 2 : 4;
}

function slide(row) {
  row = row.filter(val => val);
  for (let i = 0; i < row.length - 1; i++) {
    if (row[i] === row[i + 1]) {
      row[i] *= 2;
      score += row[i];
      row[i + 1] = 0;
    }
  }
  row = row.filter(val => val);
  while (row.length < 4) row.push(0);
  return row;
}

function rotateBoard() {
  board = board[0].map((_, i) => board.map(row => row[i])).reverse();
}

function move(direction) {
  let rotated = 0;
  if (direction === "up") { rotateBoard(); rotated = 1; }
  if (direction === "right") { rotateBoard(); rotateBoard(); rotated = 2; }
  if (direction === "down") { rotateBoard(); rotateBoard(); rotateBoard(); rotated = 3; }

  let oldBoard = JSON.stringify(board);
  board = board.map(row => slide(row));

  for (let i = 0; i < rotated; i++) rotateBoard();

  if (JSON.stringify(board) !== oldBoard) {
    addNumber();
    drawBoard();
  }
}

document.addEventListener("keydown", e => {
  if (e.key === "ArrowLeft") move("left");
  if (e.key === "ArrowRight") move("right");
  if (e.key === "ArrowUp") move("up");
  if (e.key === "ArrowDown") move("down");
});

function restartGame() {
  createBoard();
}

createBoard();
