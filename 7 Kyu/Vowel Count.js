// Vowel Count

// DESCRIPTION:
// Return the number (count) of vowels in the given string.

// We will consider a, e, i, o, u as vowels for this Kata (but not y).

// The input string will only consist of lower case letters and/or spaces.

function getCount(str) {
    let count = 0 
    let vowels = 'aeiouAEIOU'
    for (let i = 0; i < str.length; i++){
      for (let j = 0; j < vowels.length; j++){
        if (str[i] === vowels[j]) count++
      }
    }
    return count
  }

  function getCount(str) {
    let y = str.split('')
    let count = 0 
    for (let i = 0; i < y.length; i++){
      if (y[i] === 'a' || y[i] === 'e' || y[i] === 'i' || y[i] === 'o' || y[i] === 'u'){
        count++
      }
    }
    return count
  }