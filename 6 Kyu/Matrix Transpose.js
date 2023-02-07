// Matrix transpose

// DESCRIPTION:
// Write a function that outputs the transpose of a matrix - a new matrix where the columns and rows of the original are swapped.

// For example, the transpose of:

// | 1 2 3 |
// | 4 5 6 |
// is

// | 1 4 |
// | 2 5 |
// | 3 6 |
// The input to your function will be an array of matrix rows. You can assume that each row has the same length, and that the height and width of the matrix are both positive.

function transpose(matrix) {
    var copy = [];
    for (var i = 0; i < matrix.length; ++i) {
        for (var j = 0; j < matrix[i].length; ++j) {
            if (copy[j] === undefined) copy[j] = [];
            copy[j][i] = matrix[i][j];
        }}
  return copy
  }

// Alternate Solution...

function transpose(matrix) {
    return matrix[0].map((_, i) => matrix.map(r => r[i]))
  }


