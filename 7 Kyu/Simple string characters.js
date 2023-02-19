// Simple string characters

// DESCRIPTION:
// In this Kata, you will be given a string and your task will be to return a list of ints detailing the count of uppercase letters, lowercase, numbers and special characters, as follows.

// Solve("*'&ABCDabcde12345") = [4,5,5,3]. 
// --the order is: uppercase letters, lowercase, numbers and special characters.
// More examples in the test cases.

function solve(s){
    let upperCase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    let lowerCase = "abcdefghijklmnopqrstuvwxyz";
    let numbers = '1234567890';
    let up = 0;
    let low = 0;
    let num = 0;
    let char = 0;
    
    for(let i = 0; i < s.length; i++){
      if(upperCase.includes(s[i])){up++};
      if(lowerCase.includes(s[i])){low++};
      if(numbers.includes(s[i])){num++};
      if(!upperCase.includes(s[i]) && !lowerCase.includes(s[i]) && !numbers.includes(s[i])){char++};
    }
    return [up,low,num,char];
  }