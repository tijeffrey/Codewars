// Mirror object - tcejbo rorriM

// DESCRIPTION:
// Mirror - Mirror
// Can you mirror the properties on an object?

// Given an object with properties with no value

// abc: -
// arara: -
// xyz: -
// Return a new object that have the properties with its mirrored key!

// abc: cba
// arara: arara
// xyz: zyx

function mirror (obj) {
    var nob={};
    for (var i in obj){
      nob[i]=i.split("").reverse().join("");
    }
    return nob;
  };

const mirror = obj => {
    return Object.keys(obj).reduce((pre, val) => (pre[val] = [...val].reverse().join(''), pre), {})
    };