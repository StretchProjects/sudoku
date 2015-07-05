var grid = [
    [1,2,3,4,5,6,7,8,9],
    [2,3,4,5,6,7,8,9,1],
    [3,4,5,6,7,8,9,1,2],
    [4,5,6,7,8,9,1,2,3],
    [5,6,7,8,9,1,2,3,4],
    [6,7,8,9,1,2,3,4,5],
    [7,8,9,1,2,3,4,5,6],
    [8,9,1,2,3,4,5,6,7],
    [9,1,2,3,4,5,6,7,8]
],
gridPossibilities = [],
targetCell = '';

// ensure all cells have values 
function ensureCellsPopulated(grid) {
    //processing goes here
    var modifiedGrid = grid;
    return modifiedGrid;
}

// identify all possible values for all cells
function identifyPossibilities(grid) {
    //populate gridPossibilities
    var gridPossibilities = grid;
    return gridPossibilities;
}

// sort cells by count of possibilities (ascending)
function sortPossibilities(gridPossibilities) {
    var sortedGridPossibilities = gridPossibilities;
    return sortedGridPossibilities;
}

// if multiple cells exist with the same number of possibilities,
    // select a cell at random from the pool
function identifyCell(gridPossibilities) {
    var cellReference = 0;
    return cellReference;
}

// assign a value from the list of possibilities
function assignValue(grid, gridPossibilities, targetCell) {
    return grid;
}

//run
function run() {
    grid = ensureCellsPopulated(grid);
    gridPossibilities = identifyPossibilities(grid);
    gridPossibilities = sortPossibilities(gridPossibilities);
    targetCell = identifyCell(gridPossibilities);
    grid = assignValue(grid, gridPossibilities, targetCell);
}

run();
console.log(grid);