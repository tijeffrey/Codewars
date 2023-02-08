// Rotate Matrix

// DESCRIPTION:
// Your task is to rotate a matrix 90 degree to the left. The matrix is an array of integers with dimension n,m. So this kata checks some basics, it's not too difficult.

// There's nothing more to explain, no tricks, no "bad cases";-). Perhaps you take a look at the testcases...

// One easy example:

// Input: {{-1, 4, 5},
//         { 2, 3, 4}}

// Output: {{ 5, 4},
//          { 4, 3},
//          {-1, 2}}
// First there are some static tests, later on random tests too...

var rotateMatrix = arr => {
    var copy = [];
    for (var i = 0; i < arr.length; ++i) {
        for (var j = 0; j < arr[i].length; ++j) {
            if (copy[j] === undefined) copy[j] = [];
            copy[j][i] = arr[i][j];
        }}
  return copy.reverse()
  
}