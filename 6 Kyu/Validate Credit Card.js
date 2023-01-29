// Validate Credit Card

// function validate(n){
//     n = n.toString().split('').reverse().map(Number)
    
//     return n.reduce(function(sum, digit, index){
//       if (index & 1) digit <<= 1;
//       if (digit > 9) digit -= 9;
//       return sum + digit;}, 0) % 10 === 0 ? true : false
//     }

function validate(n){
    n = n.toString().split('').reverse().map(Number)
    
    return n.reduce(function(sum, digit, index){
      if (index & 1) digit <<= 1;
      if (digit > 9) digit -= 9;
      return sum + digit;}, 0) % 10 === 0 ? true : false
    }