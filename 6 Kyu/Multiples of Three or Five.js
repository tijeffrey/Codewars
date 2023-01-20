// Multiples of 3 or 5

// DESCRIPTION:
// If we list all the natural numbers below 10 that are multiples of 3 or 5, we get 3, 5, 6 and 9. The sum of these multiples is 23.

// Finish the solution so that it returns the sum of all the multiples of 3 or 5 below the number passed in. Additionally, if the number is negative, return 0 (for languages that do have them).

// Note: If the number is a multiple of both 3 and 5, only count it once.

function solution(number){
    if (number < 0) return 0
    let out = Array.from(Array(number), (_,x) => x);
    let emptyArray = []
    for (let i = 0; i < out.length; i++){
      if (out[i] % 3 === 0){
        emptyArray.push(out[i])
      }
      else if (out[i] % 5 === 0){
        emptyArray.push(out[i])
      }    
    }
        return emptyArray.reduce((a, b) => a + b, 0)
  }