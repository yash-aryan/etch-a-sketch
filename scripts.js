const container = document.querySelector('.grid-container');
const body = document.querySelector('body');
let gridCells = Array.from(container.getElementsByClassName('grid-cell'));

createGrid();
container.addEventListener('mousedown', drawOnGrid);
body.addEventListener('mouseup', stopDrawing);

// Function Declarations Below

// Creates a grid that utlises flexbox technique, and adds relevant class to each grid-row and grid-cell
// By default, it creates a 16x16 grid
function createGrid(inputRows = 16) {
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

function drawOnGrid() {
    for (let n of gridCells) n.addEventListener('mousemove', changeCellColor);
}

function stopDrawing() {
    for (let n of gridCells) n.removeEventListener('mousemove', changeCellColor);
}

// .active class is added to each grid-cell element in DOM, check the style properties of .active class in styles.css
function changeCellColor(e) {
    e.target.classList.add('active');
}