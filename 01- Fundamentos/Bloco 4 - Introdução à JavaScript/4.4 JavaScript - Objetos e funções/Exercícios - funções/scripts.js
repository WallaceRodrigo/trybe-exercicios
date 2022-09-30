function palindrome(word) {
  if (word.split('').reverse().join('') === word){
    return true;
  }else {
    return false;
  };
}
console.log(palindrome('arara'));

//
//AUXILIO DO GABARITO//

function higher(numbers) {
  let higherNumber = [0];
  for (let key in numbers) {
    if (numbers[higherNumber] < numbers[key]){
      higherNumber = key;
    }
  }
  return higherNumber
} 

console.log(higher([2, 3, 6, 7, 10, 1]));

function smallest(numbers) {
  let smallestNumber = [0];
  for (let key in numbers) {
    if (numbers[smallestNumber] > numbers[key]){
      smallestNumber = key;
    }
  }
  return smallestNumber
} 

console.log(smallest([2, 4, 6, 7, 10, 0, -3]));

//

function higherNames(names) {
  let higherName = names [0];
  for (let key in names) {
    if (names[key].length > higherName.length){
      higherName = names[key]
    }
  
  }
  
  return higherName
}

console.log(higherNames(['José', 'Lucas', 'Nádia', 'Fernanda', 'Cairo', 'Joana']))

//

function fizzBuzz(n) {
  let fizzBuzzArray = [];
  for (let index = 0; index < n.length; index += 1) {
      if (n[index] % 3 === 0 && n[index] % 5 === 0) {
          fizzBuzzArray.push('fizzBuzz');
      } else if (n[index] % 3 === 0) {
          fizzBuzzArray.push('Fizz');
      } else if (n[index] % 5 === 0) {
          fizzBuzzArray.push('Buzz');
      } else {
          fizzBuzzArray.push(n[index]);
      }
  }
  return fizzBuzzArray;
}
console.log(fizzBuzz([2, 15, 7, 9, 45]));

