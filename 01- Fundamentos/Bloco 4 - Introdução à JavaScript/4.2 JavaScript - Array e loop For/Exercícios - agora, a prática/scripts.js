let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27,];
let sum = 0;

for (number of numbers) {
	console.log(number);
}


//

for (let index = 0; index < numbers.length; index += 1) {
  sum += numbers[index]
}
console.log(sum);

//
let average = sum / numbers.length
console.log(average)

//

if (average > 20) {
  console.log('valor maior que 20')
}else {
  console.log ('valor menor ou igual a 20')
}

//
//Auxilio do Gabarito//
let higherNumber = numbers[0];

for (let index = 0; index < numbers.length; index += 1) {
   if ( numbers[index] > higherNumber ) {
			higherNumber = numbers[index];
   }
}
console.log(higherNumber)

//
//Auxilio do Gabarito//
let smallerNumber = numbers[0];

for (let index = 0; index < numbers.length; index += 1) {
   if ( numbers[index] < smallerNumber ) {
      smallerNumber = numbers[index];
   }
}
console.log(smallerNumber)

//

let results = 0;

for (let index = 0; index < numbers.length; index += 1) {
  if( numbers[index] % 2 === 0){
		results += 1;
	}
}
if (results === 0) {
  console.log('nenhum valor ímpar encontrado');
} else {
  console.log(results);
}

//
//Auxilio do Gabarito//
let numbers25 = [];

for (let index = 1; index <= 25; index += 1) {
	numbers25.push(index);
}
console.log(numbers25);

//
//Auxilio do Gabarito//
let div = 0;

for (let index = 0; index < numbers25.length; index += 1) {
	console.log(numbers25[index] / 2)
}