// Сетка игрока (3x3)
let gridData = [
  [0, 0, 0],
  [0, 0, 0],
  [0, 0, 0],
];

// Целевой узор (миссия)
let missionPattern = generateRandomPattern();

let cursorX = 0;
let cursorY = 0;

const gridElement = document.getElementById("grid");

// Генерация случайной миссии
function generateRandomPattern() {
  let pattern = [];
  for (let y = 0; y < 3; y++) {
    let row = [];
    for (let x = 0; x < 3; x++) {
      row.push(Math.random() < 0.5 ? 0 : 1);
    }
    pattern.push(row);
  }
  return pattern;
}

// Отображение сетки
function renderGrid() {
  gridElement.innerHTML = "";
  for (let y = 0; y < 3; y++) {
    for (let x = 0; x < 3; x++) {
      const cell = document.createElement("div");
      cell.className = "cell";
      cell.textContent = gridData[y][x];
      if (x === cursorX && y === cursorY) {
        cell.classList.add("active");
      }
      gridElement.appendChild(cell);
    }
  }
}

// Движение курсора
function move(dx, dy) {
  let newX = cursorX + dx;
  let newY = cursorY + dy;

  if (newX >= 0 && newX < 3 && newY >= 0 && newY < 3) {
    cursorX = newX;
    cursorY = newY;
    renderGrid();
  }
}

// Изменить 0 на 1
function action() {
  if (gridData[cursorY][cursorX] === 0) {
    gridData[cursorY][cursorX] = 1;
    renderGrid();
    checkMission();
  }
}

// Проверка прохождения уровня
function checkMission() {
  let success = true;
  for (let y = 0; y < 3; y++) {
    for (let x = 0; x < 3; x++) {
      if (gridData[y][x] !== missionPattern[y][x]) {
        success = false;
        break;
      }
    }
  }

  if (success) {
    blinkVictory(() => {
      setTimeout(() => {
        nextLevel();
      }, 1000);
    });
  }
}

// Мигать рамкой при победе
function blinkVictory(callback) {
  let count = 0;
  const interval = setInterval(() => {
    gridElement.style.border = (count % 2 === 0) ? "2px solid lime" : "2px solid black";
    count++;
    if (count > 6) {
      clearInterval(interval);
      gridElement.style.border = "2px solid lime";
      if (callback) callback();
    }
  }, 200);
}

// Следующий уровень
function nextLevel() {
  gridData = [
    [0, 0, 0],
    [0, 0, 0],
    [0, 0, 0],
  ];
  missionPattern = generateRandomPattern();
  cursorX = 0;
  cursorY = 0;
  renderGrid();
}

renderGrid();
