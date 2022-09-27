
function sumFunction(array){
  let sum = 0;
  for (let index = 0; index < array.length; index += 1) {
    sum += array[index];
  }
  return sum;
}

console.log(sumFunction([1, 2, 3, 4, 5]))