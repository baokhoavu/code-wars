// 1st
function multiply(a, b){
  return a * b;
}

// 2nd
function capitals(word) {
  return word
          .split('')
          .map(function(item, i) {

              return item == item.toUpperCase() ? i : null;
          }).filter(function(x) {


              return x != null;
          });
}

// 3rd
function spinWords(words){
  return words.split(' ').map(function (word) {
    return (word.length > 4) ? word.split('').reverse().join('') : word;
  }).join(' ');
}

//4th
function validPhoneNumber(phoneNumber){
  if (typeof phoneNumber == 'string') {
      if (phoneNumber.includes(" ") && phoneNumber.includes("-") && phoneNumber.includes('(') && phoneNumber.includes(')') && phoneNumber.length == 14) {
        return true
      } else {
        return false
      }
  }
}
