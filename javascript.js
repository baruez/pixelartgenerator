// notes for me: read more on foreach, css grid.

const container = document.querySelector('.container');
var totalRows = 0;
// function to create sizexsize grid:
function createGrid(size){
    for (i = 0; i < size; i++){
        for (x = 0; x < size; x++){
            let grid = document.createElement('div');
            container.appendChild(grid);
        }
    totalRows = totalRows + 1;
    }
    // add event listener to each div in grid
    const divs = document.querySelectorAll('.container div');
    divs.forEach( function(divs){
        divs.addEventListener('mouseover', function(e){
            e.target.classList.add('hover');
        });
    });
}
function clearGrid(){
    const divs = document.querySelectorAll('.container div');
    divs.forEach( function(e){
        e.parentNode.removeChild(e);
        });
  totalRows = 0;
}
// start program
createGrid(16);

// prompt user for squares on button click, and make grid of size (min 1 max 70)
const button = document.querySelector('.size-button');
button.addEventListener('click', function(){
    let numOfSquares = prompt("How many squares per side for new grid?");

    // make sure prompt doesn't break it.
    while (numOfSquares > 100 || numOfSquares < 1){
        numOfSquares = prompt("Allowed values 1 <= x <= 70");
    }
    clearGrid();
    // Create new grid
    createGrid(numOfSquares);
    container.style.gridTemplateColumns = `repeat(${numOfSquares}, 1fr)`;
    container.style.gridTemplateRows = `repeat(${numOfSquares}, 1fr)`;
});

const clearbutton = document.querySelector('.clear-button');
clearbutton.addEventListener('click', function(){
  let currentRows =  totalRows;
    clearGrid();
    createGrid(currentRows);
    container.style.gridTemplateColumns = `repeat(${currentRows}, 1fr)`;
    container.style.gridTemplateRows = `repeat(${currentRows}, 1fr)`;
});
