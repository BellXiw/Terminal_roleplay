const Telegram = window.Telegram.WebApp;
Telegram.expand();

let matrix = [
  [1, 0, 1],
  [0, 1, 0],
  [0, 1, 0]
];

let selectedRow = 0;
let completed = false;

function drawGrid() {
  const grid = document.getElementById("grid");
  grid.innerHTML = "";
  matrix.forEach((row, rowIndex) => {
    const rowDiv = document.createElement("div");
    rowDiv.classList.add("row");
    row.forEach((cell, colIndex) => {
      const cellDiv = document.createElement("div");
      cellDiv.classList.add("cell");
      cellDiv.textContent = cell;
      if (rowIndex === selectedRow && cell === 0) {
        cellDiv.classList.add("selected");
      }
      rowDiv.appendChild(cellDiv);
    });
    grid.appendChild(rowDiv);
  });
}

function move(dir) {
  if (completed) return;
  selectedRow = (selectedRow + dir + matrix.length) % matrix.length;
  drawGrid();
}

function action() {
  if (completed) return;
  for (let i = 0; i < matrix[selectedRow].length; i++) {
    if (matrix[selectedRow][i] === 0) {
      matrix[selectedRow][i] = 1;
      break;
    }
  }
  drawGrid();
  checkWin();
}

function checkWin() {
  for (let row of matrix) {
    if (row.includes(0)) return;
  }
  completed = true;
  Telegram.sendData("ACCESS_GRANTED");
}

function fail() {
  Telegram.sendData("FAILED");
}

window.onload = drawGrid;