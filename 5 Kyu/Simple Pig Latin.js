<<<<<<< HEAD
// Simple Pig Latin

// DESCRIPTION:
// Move the first letter of each word to the end of it, then add "ay" to the end of the word. Leave punctuation marks untouched.

// Examples
// pigIt('Pig latin is cool'); // igPay atinlay siay oolcay
// pigIt('Hello world !');     // elloHay orldway !

function pigIt(str){
    return str.split(' ').map(word => {
      if (word === '!' || word === '?') return word
      if (word.length === 1) return word + "ay"
      return word.slice(1, word.length) + word.slice(0,1) + "ay"
    }).join(' ')
=======
// Simple Pig Latin

// DESCRIPTION:
// Move the first letter of each word to the end of it, then add "ay" to the end of the word. Leave punctuation marks untouched.

// Examples
// pigIt('Pig latin is cool'); // igPay atinlay siay oolcay
// pigIt('Hello world !');     // elloHay orldway !

function pigIt(str){
    return str.split(' ').map(word => {
      if (word === '!' || word === '?') return word
      if (word.length === 1) return word + "ay"
      return word.slice(1, word.length) + word.slice(0,1) + "ay"
    }).join(' ')
>>>>>>> 112fccda2d00a11d3ecd474e08806a13107ba977
  }