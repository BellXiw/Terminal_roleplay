let gridData = [
  [1, 0, 1],
  [1, 1, 0],
  [0, 1, 1]
];

let currentY = 0;
const gridElement = document.getElementById("grid");

function renderGrid() {
  gridElement.innerHTML = "";
  for (let y = 0; y < gridData.length; y++) {
    const row = document.createElement("div");
    row.style.display = "flex";
    for (let x = 0; x < gridData[y].length; x++) {
      const cell = document.createElement("div");
      cell.textContent = gridData[y][x];
      cell.style.border = "1px solid #0f0";
      cell.style.width = "40px";
      cell.style.height = "40px";
      cell.style.display = "flex";
      cell.style.alignItems = "center";
      cell.style.justifyContent = "center";
      cell.style.color = "#0f0";
      cell.style.backgroundColor = y === currentY ? "#003300" : "black";
      row.appendChild(cell);
    }
    gridElement.appendChild(row);
  }
}

function move(dy) {
  currentY = (currentY + dy + gridData.length) % gridData.length;
  renderGrid();
}

function action() {
  for (let x = 0; x < gridData[currentY].length; x++) {
    if (gridData[currentY][x] === 0) {
      gridData[currentY][x] = 1;
      break;
    }
  }
  renderGrid();
}

renderGrid();
