/* Write a program that Creates a string that represents and 8x8 grid, using new line character to separate lines.
At each position of the grid there is either a space or a “#� */

// Passing the string to console.log should show something like this:

// # # # #
//  # # # #
// # # # #
//  # # # #
// # # # #
//  # # # #
// # # # #
//  # # # #

let size = 8;
let grid = "";

for (let row = 0; row <  size; row++) {
    for (let col = 0; col < size; col++) {
        if ((row + col) % 2 === 0) {
            grid += " ";
        } else {
            grid += "#";
        }
    }
    grid += "\n";
}

console.log(grid);