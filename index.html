<!DOCTYPE html><html lang="en">
<head>
  <meta charset="UTF-8">
  <title>Terminal Roleplay</title>
  <style>
    body {
      background-color: black;
      color: lime;
      font-family: monospace;
      text-align: center;
    }
    #grid, #target {
      display: inline-grid;
      grid-template-columns: repeat(3, 40px);
      gap: 5px;
      margin: 10px;
    }
    .cell, .target-cell {
      width: 40px;
      height: 40px;
      border: 1px solid lime;
      display: flex;
      align-items: center;
      justify-content: center;
      color: lime;
    }
    .active {
      background-color: lime;
      color: black;
    }
    #controls button {
      margin: 5px;
    }
    #message {
      margin-top: 10px;
      font-weight: bold;
    }
  </style>
</head>
<body>
  <h2>Access Terminal</h2>
  <div id="target"></div>
  <div id="grid"></div>
  <p>Use ⬅️⬆️⬇️➡️ to move. Tap "ACTION" to change 0 to 1.</p>
  <div id="controls">
    <button onclick="move(-1, 0)">⬅️</button>
    <button onclick="move(0, -1)">⬆️</button>
    <button onclick="action()">✅ ACTION</button>
    <button onclick="move(0, 1)">⬇️</button>
    <button onclick="move(1, 0)">➡️</button>
  </div>
  <div id="message"></div>  <script>
    let gridData = Array(3).fill().map(() => Array(3).fill(0));
    let missionPattern = generateRandomPattern();

    let cursorX = 0;
    let cursorY = 0;

    const gridElement = document.getElementById("grid");
    const targetElement = document.getElementById("target");
    const messageElement = document.getElementById("message");

    function generateRandomPattern() {
      let pattern = Array(3).fill().map(() => Array(3).fill(0));
      for (let i = 0; i < 3; i++) {
        for (let j = 0; j < 3; j++) {
          pattern[i][j] = Math.random() > 0.6 ? 1 : 0;
        }
      }
      return pattern;
    }

    function renderGrid() {
      gridElement.innerHTML = "";
      for (let y = 0; y < 3; y++) {
        for (let x = 0; x < 3; x++) {
          const cell = document.createElement("div");
          cell.className = "cell";
          if (x === cursorX && y === cursorY) {
            cell.classList.add("active");
          }
          cell.textContent = gridData[y][x];
          gridElement.appendChild(cell);
        }
      }
    }

    function renderTarget() {
      targetElement.innerHTML = "";
      for (let y = 0; y < 3; y++) {
        for (let x = 0; x < 3; x++) {
          const cell = document.createElement("div");
          cell.className = "target-cell";
          cell.textContent = missionPattern[y][x];
          targetElement.appendChild(cell);
        }
      }
    }

    function move(dx, dy) {
      cursorX = Math.max(0, Math.min(2, cursorX + dx));
      cursorY = Math.max(0, Math.min(2, cursorY + dy));
      renderGrid();
    }

    function action() {
      if (gridData[cursorY][cursorX] === 0) {
        gridData[cursorY][cursorX] = 1;
        renderGrid();
        checkPattern();
      }
    }

    function checkPattern() {
      for (let y = 0; y < 3; y++) {
        for (let x = 0; x < 3; x++) {
          if (gridData[y][x] !== missionPattern[y][x]) {
            return;
          }
        }
      }
      messageElement.textContent = "✅ ACCESS GRANTED! Generating new pattern...";
      setTimeout(() => {
        gridData = Array(3).fill().map(() => Array(3).fill(0));
        missionPattern = generateRandomPattern();
        messageElement.textContent = "";
        renderTarget();
        renderGrid();
      }, 1500);
    }

    renderTarget();
    renderGrid();
  </script></body>
</html>
