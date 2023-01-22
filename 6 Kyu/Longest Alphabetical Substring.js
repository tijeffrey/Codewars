// Longest alphabetical substring

// DESCRIPTION:
// Find the longest substring in alphabetical order.

// Example: the longest alphabetical substring in "asdfaaaabbbbcttavvfffffdf" is "aaaabbbbctt".

// There are tests with strings up to 10 000 characters long so your code will need to be efficient.

// The input will only consist of lowercase characters and will be at least one letter long.

// If there are multiple solutions, return the one that appears first.

function isAlphabetical(char, nextChar){
var alphabet = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p",
"q", "r", "s", "t", "u", "v", "w", "x", "y", "z"]

return alphabet.indexOf(char) <= alphabet.indexOf(nextChar)
}

function longest(str){
    let longestStreak = ''
    let currentStreak = ''

    for (let i = 0; i < str.length; i++){
        var char = str[i];
        var nextChar = str[i+1];

        if (isAlphabetical(char, nextChar)){
            currentStreak += char;
        }
        else{
            currentStreak += char;
            if(currentStreak.length > longestStreak.length){
                longestStreak = currentStreak;
            }
            currentStreak = '';
        }
    }
    return longestStreak;
}