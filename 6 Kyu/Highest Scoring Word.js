// Highest Scoring Word

// DESCRIPTION:
// Given a string of words, you need to find the highest scoring word.

// Each letter of a word scores points according to its position in the alphabet: a = 1, b = 2, c = 3 etc.

// For example, the score of abad is 8 (1 + 2 + 1 + 4).

// You need to return the highest scoring word as a string.

// If two words score the same, return the word that appears earliest in the original string.

// All letters will be lowercase and all inputs will be valid.

function high(x){
    let highestScore = 0 
    let highestScoringWord = ''
    
     let words = x.split(' ')
    for (let i = words.length - 1; i >= 0; i--){
      let word = words[i];
      let wordScore = 0;
      word.split('').forEach(letter=>{
        
      wordScore = wordScore + (letter.charCodeAt(0) - 96)
        
    })
      console.log(word, wordScore)
      
      if (wordScore >= highestScore){
        highestScore = wordScore;
        highestScoringWord = word 
      }
    }
    return highestScoringWord 
  }

  function high(x){
    let as =  x.split(' ').map(x => [...x].reduce((a, b) => a+b.charCodeAt(0) - 96, 0))
    return x.split(' ')[as.indexOf(Math.max(...as))]
  }