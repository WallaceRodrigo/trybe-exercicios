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

//

let array = ['java', 'javascript', 'python', 'html', 'css'];
let biggerWord = array[0];
let smallestWord = array[0];

for (let index = 0; index < array.length; index += 1) {
	if (array[index].length > biggerWord.length){
		biggerWord = array[index];
	}
}

for (let index = 0; index < array.length; index += 1) {
  if (array[index].length < smallestWord.length) {
    smallestWord = array[index];
  }
}

console.log(biggerWord)
console.log(smallestWord)

//
//Auxilio do Gabarito//

let biggestPrimeNumber = 0;

for (let indexN = 2; indexN <= 50; indexN += 1) {
  let isPrime = true;
  for (let indexDiv = 2; indexDiv < indexN; indexDiv += 1) {
    if (indexN % indexDiv === 0) {
      isPrime = false;
    }
  }
  if (isPrime) {
    biggestPrimeNumber = indexN;
  }
}

console.log(biggestPrimeNumber);