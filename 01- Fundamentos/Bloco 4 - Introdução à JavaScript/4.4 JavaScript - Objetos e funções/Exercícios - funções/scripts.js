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

console.log(smallest([2, 3, 6, 7, 10, 1]));