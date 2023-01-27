function generateGrid(size){

    // Start fresh
    while (gridContainer.firstChild) {
        gridContainer.removeChild(gridContainer.firstChild);
    }

    // Rows
    for (let i = 0; i < size; i++) {
        const gridRow = document.createElement('div');
        gridRow.classList.add('gridRow', `gridRow-${i}`);
        // gridRow.style.cssText = 'border-style: solid; border-color: red;';

        // Columns    
        for (let j = 0; j < size; j++) {
            const gridColumnIndex = document.createElement('div');
            gridColumnIndex.classList.add('grid-item', 'gridColumn', `gridColumnIndex-${j}`);
            gridColumnIndex.style.cssText = 'border-style: solid;';
            gridRow.appendChild(gridColumnIndex);
        }
        // Append to main container
        gridContainer.appendChild(gridRow);

        // Output grid size
        const gridSizeLabel = document.querySelector("#gridSizeValue");
        gridSizeLabel.textContent = size;
    }

    // Add the event listeners
    const gridItems = document.querySelectorAll('.grid-item')

    gridItems.forEach(function (item) {
        item.addEventListener('mouseover', () => {
            item.style.backgroundColor = colors[colorSelector];
            if (colorSelector < colors.length) {
                colorSelector++;
            } else {
                colorSelector = 0;
            }
        });
        // item.addEventListener('mouseout', () => {
        //     console.log(item.className);
        //     item.style.backgroundColor = 'white';
        // });
    });
}

// Generate grid
let gridSize = 16;
const gridContainer = document.querySelector('.grid-container');

generateGrid(gridSize)

// Set colours
const colors = [
    'red',
    'orange',
    'yellow',
    'green',
    'blue',
    'indigo',
    'violet'
];
let colorSelector = 0;

// Clear screen
const clearBtn = document.getElementById("clear-button");
clearBtn.addEventListener('click', () => {
    const gridItems = document.querySelectorAll('.grid-item')
    gridItems.forEach(function (item) {
        item.style.backgroundColor = 'white';
    });
});

// Change grid size
let gridSizeInput = document.querySelector("#gridSizeRange");
gridSizeInput.addEventListener('input', () => {
    const gridSizeValue = document.getElementById("gridSizeRange").value;
    generateGrid(gridSizeValue);
});