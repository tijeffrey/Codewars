// Largest Product in a Series

// DESCRIPTION:
// Complete the greatestProduct method so that it'll find the greatest product of five consecutive digits in the given string of digits.

// For example:

// greatestProduct("123834539327238239583") // should return 3240
// The input string always has more than five digits.


function greatestProduct(input) {
    let x = input.split('').map(Number);
    let currentHighest = 0;
    
    for (let i = 0; i < x.length-4; i++){
     let localMax = x.slice(i, i + 5).reduce((acc, cur) => {
       acc = acc * cur;
      return acc;
    }, 1);
      
      if (localMax > currentHighest){
        currentHighest = localMax
      }
    }
      return currentHighest
    }