//Auxilio do Gabarito//
let factorial = 1;

for (let index = 10; index > 0; index -= 1) {
  factorial *= index;
}

console.log(factorial);

//
//Auxilio do Gabarito//
let word = 'Banana';
let reverseWord = '';

for (let index = 0; index < word.length; index += 1) {
  reverseWord += word[word.length - 1 - index];
}

console.log(reverseWord);