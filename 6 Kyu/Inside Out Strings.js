// Inside Out Strings

// DESCRIPTION:
// You are given a string of words (x), for each word within the string you need to turn the word 'inside out'. By this I mean the internal letters will move out, and the external letters move toward the centre.

// If the word is even length, all letters will move. If the length is odd, you are expected to leave the 'middle' letter of the word where it is.

// An example should clarify:

// 'taxi' would become 'atix' 'taxis' would become 'atxsi'


function insideOut(x){
  
    let y = Array.from(x.split(' '))
    
    return y.map((el) =>{
     if (el.length < 4) return el
     if (el.length > 3 && el.length % 2 === 0) return el.substring(1, el.length/2).split('').reverse().join('') + el[0] + el[el.length - 1] + el.substring(el.length/2, el.length - 1).split('').reverse().join('') 
     if (el.length > 3 && el.length % 2 !== 0) return el.substring(1, (el.length- 1)/2).split('').reverse().join('') + el[0] + el[(el.length - 1)/2] +el[el.length - 1] + el.substring((el.length + 1)/2, el.length - 1).split('').reverse().join('')
    }).join(' ')
  }  