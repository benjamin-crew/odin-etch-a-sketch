// Generate grid
const gridSize = 16;
const gridContainer = document.querySelector('.main-container');

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

// Rows
for (let i = 0; i < gridSize; i++) {
    const gridRow = document.createElement('div');
    gridRow.classList.add('gridRow', `gridRow-${i}`);
    // gridRow.style.cssText = 'border-style: solid; border-color: red;';

    // Columns    
    for (let j = 0; j < gridSize; j++) {
        const gridColumnIndex = document.createElement('div');
        gridColumnIndex.classList.add('grid-item', 'gridColumn', `gridColumnIndex-${j}`);
        gridColumnIndex.style.cssText = 'border-style: solid;';
        gridRow.appendChild(gridColumnIndex);
    }
    // Append to main container
    gridContainer.appendChild(gridRow);
}

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

// Clear screen
const clearBtn = document.getElementById("clear-button");
clearBtn.addEventListener('click', () => {
    gridItems.forEach(function (item) {
        item.style.backgroundColor = 'white';
    });
});