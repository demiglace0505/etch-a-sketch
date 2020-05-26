// On page load, initialize grid to be 16x16

window.addEventListener('load', () => {
    makeGrid(16);
});

const mouseOverEvent = (e) => {
    if (rainbowCheckbox.checked) {
        const randColor = '#' + (0x1000000 + (Math.random()) * 0xffffff).toString(16).substr(1, 6);
        e.target.style.backgroundColor = randColor;
        return;
    }
    e.target.style.backgroundColor = 'black';
}

const clearGrid = () => {
    const cell = document.querySelectorAll('.gridCell');
    cell.forEach(currCell => {
        currCell.style.backgroundColor = 'white';
    });
};

const makeGrid = (rowcol) => {
    gridContainer.style.setProperty('--grid-rows', rowcol);
    gridContainer.style.setProperty('--grid-cols', rowcol);
    for (let i = 0; i < rowcol * rowcol; i++) {
        const cell = document.createElement('div');
        // cell.innerText = (i + 1); // for debugging only
        cell.classList.add('gridCell');
        cell.addEventListener('mouseenter', mouseOverEvent);

        gridContainer.appendChild(cell);
    };
}

const destroyGrid = () => {
    while (gridContainer.firstChild) {
        gridContainer.removeChild(gridContainer.lastChild);
    }
}

const newGrid = () => {
    const rowcol = prompt('How many rows and columns?')
    destroyGrid();
    makeGrid(rowcol);
}


document.querySelector('#clearButton').addEventListener('click', clearGrid);
document.querySelector('#newGridButton').addEventListener('click', newGrid);

const gridContainer = document.querySelector('#gridContainer')
const rainbowCheckbox = document.querySelector('#rainbowCheckbox')

