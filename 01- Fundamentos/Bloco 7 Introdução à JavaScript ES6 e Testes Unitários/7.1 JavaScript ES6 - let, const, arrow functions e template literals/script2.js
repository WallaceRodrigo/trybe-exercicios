const factorial = (number) => {
  let result = 1;
  for (let index = 2; index <= number; index += 1) {
    result *= index
  }

  return result
}

console.log(`O fatorial é ${factorial(5)}`);

//RESOLVIDO COM AUXILIO DO GABARITO//

const longestWord = (text) => {
  const wordArray = text.split(' ');
  let maxLength = 0;
  let result = '';

  for (const word of wordArray) {
      if (word.length > maxLength) {
          maxLength = word.length;
          result = word;
      }
  }

  return result;
}

console.log(longestWord('Antonio foi ao banheiro e não sabemos o que aconteceu'));

