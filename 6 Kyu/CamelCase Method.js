// CamelCase Method

// DESCRIPTION:
// Write simple .camelCase method (camel_case function in PHP, CamelCase in C# or camelCase in Java) for strings. All words must have their first letter capitalized without spaces.

// For instance:

// "hello case".camelCase() => HelloCase
// "camel case word".camelCase() => CamelCaseWord

String.prototype.camelCase=function(){
    return this.split(' ').map((word) =>{
      return word.charAt(0).toUpperCase() + word.slice(1)
    }).join('')
  }

  String.prototype.camelCase=function(){
    let emptyArray = []
    
    let x = this.split(' ')
    for (let i = 0; i < x.length; i++){
      emptyArray.push(x[i].charAt(0).toUpperCase() + x[i].slice(1))
    }
    return emptyArray.join('')
  }