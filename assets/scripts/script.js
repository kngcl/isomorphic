const str1 = document.querySelector('.str1')
const str2 = document.querySelector('.str2')
const display = document.querySelector('.display')
const check = document.querySelector('.check')
const map = {}
let assignStr1 = []
let assignStr2 = []
let var1, var2
let var3

check.onclick = function isomorphic () {
  var1 = str1.value
  var2 = str2.value
  assignStr1 = var1.split('')
  assignStr2 = var2.split('')
  if (assignStr1.length === assignStr2.length) {
    for (let i = 0; i < assignStr1.length; i++) {
      if (map[assignStr1[i]] === undefined) {
        map[assignStr1[i]] = assignStr2[i]
        var3 = true
      } else if (map[assignStr1[i]] !== assignStr2[i]) {
        var3 = false
      }
    }
    if (var3 !== true) {
      display.innerHTML = 'false'
    } else {
      display.innerHTML = 'true'
    }
    setTimeout(() => {
      str1.value = ''
      str2.value = ''
      display.innerHTML = ''
    }, 2000)
  } else {
    alert('the words should be of same size')
  }
}

/*
//isomorphic algorithm
function isomorphic(str1, str2) {
  // declare map holding the keys
  let map = {};
  //check if length is identical
  if (str1.length === str2.length) {
    for (let i = 0; i < str1.length; i++) {
      //check if the map kep has an assign value
      console.log(map);
      if (map[str1[i]] === undefined) {
        // if it is not assign then assign
        map[str1[i]] = str2[i];
      }
      //if map key has a value but different from value of the second string
      else if (map[str1[i]] !== str2[i]) {
        return false;
      }
    }
    //return true when none of the above function
    return true;
  }// if length is not equal return false
  else {
    return false;
  }
}
console.log(isomorphic("foo", "bar")); */
