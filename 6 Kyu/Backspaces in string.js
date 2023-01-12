// Backspaces in String

// DESCRIPTION:
// Assume "#" is like a backspace in string. This means that string "a#bc#d" actually is "bd"

// Your task is to process a string with "#" symbols.

// Examples
// "abc#d##c"      ==>  "ac"
// "abc##d######"  ==>  ""
// "#######"       ==>  ""
// ""              ==>  ""

function cleanString(s) {
    s = s.split('')
    let emptyArray = []
    for(let i = 0; i < s.length; i++){
      if (s[i] != '#'){
        emptyArray.push(s[i])
      }
      else{
        emptyArray.pop()
      }
    }
      return emptyArray.join('')
    }
