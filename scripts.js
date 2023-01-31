"use strict";

// --- DOM references ---
const container = document.querySelector('.grid-container');
const body = document.querySelector('body');
const rowCount = document.querySelector('.range-slider');
const selectedGridSize = document.querySelectorAll('.slider-value');
const clearGridButton = document.querySelector('.clear-grid');

// --- Main Code ---
// calls "createGrid()" with the selected value from range input as the argument
selectedGridSize.forEach((n) => {
  n.innerHTML = rowCount.value;
  createGrid(rowCount.value);
  rowCount.addEventListener('input', () => {
    n.innerHTML = rowCount.value;
    createGrid(rowCount.value);
  });
});

container.addEventListener('mousedown', startDrawing);
body.addEventListener('mouseup', stopDrawing);

clearGridButton.addEventListener('click', clearGrid);

// --- Function Declarations ---
// Creates a grid using flexbox method, and adds relevant classes to each grid-row and grid-cell
// By default, it creates a 16x16 grid, because range input value by default is set to 16
function createGrid(inputRows) {
  container.innerHTML = '';
  let i = 1;
  while (i <= inputRows) {
    const row = document.createElement('div');
    row.classList.add('grid-row');
    container.appendChild(row);
    let j = 1;
    while (j <= inputRows) {
      const cell = document.createElement('div');
      cell.classList.add('grid-cell');
      row.appendChild(cell);
      j++;
    }
    i++;
  }
}

function startDrawing() {
  for (let n of container.getElementsByClassName('grid-cell')) {
    n.addEventListener('mousemove', changeCellColor);
  }
}

function stopDrawing() {
  for (let n of container.getElementsByClassName('grid-cell')) {
    n.removeEventListener('mousemove', changeCellColor);
  }
}

// When called, adds ".active" class to the drawn grid-cell elements in DOM
function changeCellColor(e) {
  e.target.classList.add('active');
}

// When called, removes ".active" class from all grid-cells elements in DOM
function clearGrid() {
  for (let n of container.getElementsByClassName('grid-cell')) {
    n.classList.remove('active');
  }
}