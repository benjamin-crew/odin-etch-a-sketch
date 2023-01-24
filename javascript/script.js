// Generate grid
const gridSize = 16;
var gridContainer = document.querySelector('.main-container');

// Rows
for (let i = 0; i < gridSize; i++) {
    console.log(`Creating gridRow-${i}`)
    let gridRow = document.createElement('div');
    gridRow.classList.add(`gridRow-${i}`);
    gridRow.style.cssText = 'border-style: solid; border-color: red;';

    // Columns    
    for (let j = 0; j < gridSize; j++) {
        console.log(`Creating gridDiv-${i} index ${j}`)
        let gridRowIndex = document.createElement('div');
        gridRowIndex.classList.add(`gridRowIndex-${j}`);
        gridRowIndex.style.cssText = 'border-style: solid; border-color: green;'; 
        gridContainer = gridContainer.appendChild(gridRowIndex);
        console.log(`Created gridDiv-${i} index ${j}`)
    }
    // Append to main container
    gridContainer.appendChild(gridRow);
}
