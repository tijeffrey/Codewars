//Alternate Capitalization

// DESCRIPTION:
// Given a string, capitalize the letters that occupy even indexes and odd indexes separately, and return as shown below. Index 0 will be considered even.

// For example, capitalize("abcdef") = ['AbCdEf', 'aBcDeF']. See test cases for more examples.

// The input will be a lowercase string with no spaces.

function capitalize(s){
    let x = [...s].map((val, ind) => ind % 2 == 0 ? val.toUpperCase() : val).join('')
    let y = [...s].map((val, ind) => ind % 2 !== 0 ? val.toUpperCase() : val).join('')
    
    let letters = [`${x}`, `${y}`]
    return letters
  };