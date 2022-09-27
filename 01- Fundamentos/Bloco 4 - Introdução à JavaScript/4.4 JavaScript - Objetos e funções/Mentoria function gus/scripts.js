
function sumFunction(array){
  let sum = 0;
  for (let index = 0; index < array.length; index += 1) {
    sum += array[index];
  }
  return sum;
}

console.log(sumFunction([1, 2, 3, 4, 5]))


function nbaChampion(lakers, celtics){
  let countLakers = 0;
  let countCeltics = 0;

  for(let index = 0; index < lakers.length; index += 1){
    if(lakers[index] > celtics[index]){
      countLakers += 1;
    } else {
      countCeltics += 1;
    }
  }

  if(countLakers > countCeltics){
    return 'Lakers foi campeão com ' + countLakers + ' vitórias!';
  }else {
    return 'Celtics foi campeão com ' + countCeltics + ' vitórias!';
  }
}

console.log(nbaChampion([106, 98, 107], [108, 99, 110]))