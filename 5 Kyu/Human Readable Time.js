// Human Readable Time 

// DESCRIPTION:
// Write a function, which takes a non-negative integer (seconds) as input and returns the time in a human-readable format (HH:MM:SS)

// HH = hours, padded to 2 digits, range: 00 - 99
// MM = minutes, padded to 2 digits, range: 00 - 59
// SS = seconds, padded to 2 digits, range: 00 - 59
// The maximum time never exceeds 359999 (99:59:59)

// You can find some examples in the test fixtures.

function humanReadable (seconds) {
    let emptyString = ''
    
    let hours = Math.floor(seconds/3600);
    hours.toString().length === 1 ? emptyString += "0" + hours + ":" : emptyString += hours + ":"
    
    let minutes = Math.floor((seconds - (hours * 3600))/60);
    minutes.toString().length === 1 ? emptyString += "0" + minutes + ":" : emptyString += minutes + ":"
  
    let secs = seconds - (hours * 3600) - (minutes * 60)
    secs.toString().length === 1 ? emptyString += "0" + secs : emptyString += secs
  
    return emptyString
    }