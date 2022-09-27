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















function sumFunction(array){
  let sum = 0;
  for (let index = 0; index < array.length; index += 1) {
    sum += array[index];
  }
  return sum;
}

console.log(sumFunction([1, 2, 3, 4, 5]))