// Make the Deadfish Swim

// DESCRIPTION:
// Write a simple parser that will parse and run Deadfish.

// Deadfish has 4 commands, each 1 character long:

// i increments the value (initially 0)
// d decrements the value
// s squares the value
// o outputs the value into the return array
// Invalid characters should be ignored.

// parse("iiisdoso") => [ 8, 64 ]

function parse( data )
{
  data = [...data]
  let numVal = 0
  let emptyArray = []
  for (let i = 0; i < data.length; i++){
    if (data[i] === 'i'){
      numVal++
    }
    else if (data[i] === 'd'){
      numVal--
    }
    
    else if (data[i] === 's'){
      numVal *= numVal 
    }
    
    else if (data[i] === 'o'){
      emptyArray.push(numVal)
    }
  }
  return emptyArray
}