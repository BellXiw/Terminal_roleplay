const gridElement = document.getElementById("grid");
const gridSize = 3;
let playerX = 0;
let playerY = 0;

// Генерация 3x3 сетки со случайными 0 и 1
let grid = Array.from({ length: gridSize }, () =>
  Array.from({ length: gridSize }, () => Math.round(Math.random()))
);

function renderGrid() {
  gridElement.innerHTML = "";
  for (let y = 0; y < gridSize; y++) {
    for (let x = 0; x < gridSize; x++) {
      const cell = document.createElement("div");
      cell.className = "cell";
      cell.textContent = x === playerX && y === playerY ? "▲" : grid[y][x];
      gridElement.appendChild(cell);
    }
  }
}

function move(direction) {
  const newY = playerY + direction;
  if (newY >= 0 && newY < gridSize) {
    playerY = newY;
    renderGrid();
  }
}

function action() {
  grid[playerY][playerX] = grid[playerY][playerX] === 0 ? 1 : 0;
  renderGrid();
}

renderGrid();
