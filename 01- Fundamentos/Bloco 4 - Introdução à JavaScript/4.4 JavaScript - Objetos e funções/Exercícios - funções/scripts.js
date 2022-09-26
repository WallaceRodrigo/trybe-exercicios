function palindrome(word) {
  if (word.split('').reverse().join('') === word){
    return true
  }else {
    return false
  }
}
console.log(palindrome('arara'))

