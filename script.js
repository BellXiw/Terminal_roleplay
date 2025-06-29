// script.js

// Генерация случайного шаблона 3x3 из 0 и 1 function generatePattern() { const pattern = []; for (let y = 0; y < 3; y++) { const row = []; for (let x = 0; x < 3; x++) { row.push(Math.random() > 0.5 ? 1 : 0); } pattern.push(row); } return pattern; }

let gridData = generatePattern(); let targetPattern = generatePattern(); let currentY = 0; let currentX = 0; const gridElement = document.getElementById("grid");

function renderGrid() { gridElement.innerHTML = ""; for (let y = 0; y < gridData.length; y++) { for (let x = 0; x < gridData[y].length; x++) { const cell = document.createElement("div"); cell.className = "cell"; if (y === currentY && x === currentX) { cell.classList.add("selected"); } if (gridData[y][x] === 1) { cell.classList.add("active"); } cell.textContent = gridData[y][x]; gridElement.appendChild(cell); } } }

function move(dy, dx) { currentY = (currentY + dy + 3) % 3; currentX = (currentX + dx + 3) % 3; renderGrid(); }

function action() { if (gridData[currentY][currentX] === 0) { gridData[currentY][currentX] = 1; } renderGrid(); checkWin(); }

function checkWin() { for (let y = 0; y < 3; y++) { for (let x = 0; x < 3; x++) { if (gridData[y][x] !== targetPattern[y][x]) { return; } } } alert("ACCESS GRANTED\nSystem Matched"); targetPattern = generatePattern(); gridData = generatePattern(); currentX = 0; currentY = 0; renderGrid(); }

renderGrid();

