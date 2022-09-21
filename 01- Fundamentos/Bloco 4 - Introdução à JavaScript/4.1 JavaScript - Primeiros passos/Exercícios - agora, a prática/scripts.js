const num1 = 10;
const num2 = 15;
const num3 = 8;

let Adição = num1 + num2;
	console.log(Adição);
let Subtração = num1 - num2;
	console.log(Subtração);
let Multiplicação = num1 * num2;
	console.log(Multiplicação);
let Divisão = num1 / num2;
	console.log(Divisão);
let Módulo = num1 % num2;
	console.log(Módulo);

//

if (num1 > num2 && num1 > num3) {
	console.log('num1 é maior');
 }else if (num2 > num1 && num2 > num3){
	console.log('num2 é maior');
} else {
	console.log('num3 é maior');
}

//

if (Subtração > 1){
	console.log('Positive');
}else if (Subtração < 0) {
	console.log('Negative');
}else {
	console.log('zero')
}

//

let l1 = 60;
let l2 = 60;
let l3 = 60;

if (l1 + l2 + l3 === 180) {
	console.log(true);
}else if (l1 + l2 + l3 < 180) {
	console.log(false)
}else if (typeof(l1, l2, l3) != 'number'){
	console.log('ERROR')
}

//

