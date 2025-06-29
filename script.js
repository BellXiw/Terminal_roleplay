const gridSize = 3;
let gridData = Array.from({ length: gridSize }, () =>
  Array.from({ length: gridSize }, () => Math.round(Math.random()))
);
let targetPattern = JSON.parse(JSON.stringify(gridData)); // Копируем как цель
let currentX = 0;
let currentY = 0;

const gridElement = document.getElementById("grid");

function renderGrid() {
  gridElement.innerHTML = "";
  for (let y = 0; y < gridSize; y++) {
    for (let x = 0; x < gridSize; x++) {
      const cell = document.createElement("div");
      cell.className = "cell";
      if (gridData[y][x] === 1) {
        cell.classList.add("on");
      }
      if (x === currentX && y === currentY) {
        cell.classList.add("active");
      }
      gridElement.appendChild(cell);
    }
    const br = document.createElement("br");
    gridElement.appendChild(br);
  }
}

function move(dx, dy) {
  const newX = currentX + dx;
  const newY = currentY + dy;
  if (newX >= 0 && newX < gridSize) currentX = newX;
  if (newY >= 0 && newY < gridSize) currentY = newY;
  renderGrid();
}

function action() {
  if (gridData[currentY][currentX] === 0) {
    gridData[currentY][currentX] = 1;
    renderGrid();
    checkWin();
  }
}

function checkWin() {
  for (let y = 0; y < gridSize; y++) {
    for (let x = 0; x < gridSize; x++) {
      if (gridData[y][x] !== targetPattern[y][x]) {
        return;
      }
    }
  }

  // Победа — мигающая рамка
  gridElement.style.animation = "flash 0.5s infinite alternate";
}

renderGrid();
