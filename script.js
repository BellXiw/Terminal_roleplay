let gridData = [
  [1, 0, 1],
  [1, 1, 0],
  [0, 1, 1]
];

let selectedRow = 0;

function renderGrid() {
  const grid = document.getElementById('grid');
  grid.innerHTML = '';
  gridData.forEach((row, rowIndex) => {
    row.forEach(cell => {
      const div = document.createElement('div');
      div.className = 'cell';
      div.textContent = cell;
      if (rowIndex === selectedRow) div.style.border = '2px solid yellow';
      grid.appendChild(div);
    });
  });
}

function move(direction) {
  if (direction === 'up' && selectedRow > 0) selectedRow--;
  else if (direction === 'down' && selectedRow < 2) selectedRow++;
  renderGrid();
}

function action() {
  gridData[selectedRow] = gridData[selectedRow].map(val => val === 0 ? 1 : 0);
  renderGrid();
}

window.onload = renderGrid;
