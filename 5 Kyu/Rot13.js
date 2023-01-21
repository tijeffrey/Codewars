// Rot13

// DESCRIPTION:
// ROT13 is a simple letter substitution cipher that replaces a letter with the letter 13 letters after it in the alphabet. ROT13 is an example of the Caesar cipher.

// Create a function that takes a string and returns the string ciphered with Rot13. If there are numbers or special characters included in the string, they should be returned as they are. Only letters from the latin/english alphabet should be shifted, like in the original Rot13 "implementation".

function rot13(message){
    if (message.length == 0) return ''
    let x = message.split('')
    
    return x.map((el) => {
      if (el.toUpperCase() == el.toLowerCase()) return el
      if ((el.charCodeAt(0) + 13) >= 78 && (el.charCodeAt(0) + 13) <= 90) return String.fromCharCode(el.charCodeAt(0) + 13)
      if ((el.charCodeAt(0) + 13) >= 110 && (el.charCodeAt(0) + 13) <= 122) return String.fromCharCode(el.charCodeAt(0) + 13)
      if ((el.charCodeAt(0) + 13) > 90) return String.fromCharCode(el.charCodeAt(0) - 13)
      if ((el.charCodeAt(0) + 13) > 122) return String.fromCharCode(el.charCodeAt(0) - 13)
    }).join('') 
  }