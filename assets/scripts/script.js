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
  } else {
    alert('the words should be of same size')
  }
}
