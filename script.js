let mission = [];
let gridData = [];
let currentY = 0;
const gridElement = document.getElementById("grid");

function generateMission() {
  mission = [];
  for (let y = 0; y < 3; y++) {
    mission[y] = [];
    for (let x = 0; x < 3; x++) {
      mission[y][x] = Math.random() > 0.5 ? 1 : 0;
    }
  }
  gridData = mission.map(row => [...row]); // Копия
  currentY = 0;
  renderGrid();
}

function renderGrid() {
  gridElement.innerHTML = "";

  for (let y = 0; y < 3; y++) {
    for (let x = 0; x < 3; x++) {
      const cell = document.createElement("span");
      cell.textContent = gridData[y][x];
      cell.style.border = "1px solid green";
      cell.style.padding = "10px";
      cell.style.margin = "1px";
      cell.style.display = "inline-block";
      cell.style.width = "20px";
      cell.style.textAlign = "center";
      if (y === currentY) {
        cell.style.backgroundColor = "#00ff00";
        cell.style.color = "#000";
      }
      gridElement.appendChild(cell);
    }
    gridElement.appendChild(document.createElement("br"));
  }
}

function move(direction) {
  currentY += direction;
  if (currentY < 0) currentY = 2;
  if (currentY > 2) currentY = 0;
  renderGrid();
}

function action() {
  for (let x = 0; x < 3; x++) {
    if (gridData[currentY][x] === 0) {
      gridData[currentY][x] = 1;
    }
  }
  renderGrid();
  checkMission();
}

function checkMission() {
  for (let y = 0; y < 3; y++) {
    for (let x = 0; x < 3; x++) {
      if (gridData[y][x] !== mission[y][x]) return;
    }
  }

  alert("✅ Миссия выполнена!");
  generateMission();
}

generateMission();
