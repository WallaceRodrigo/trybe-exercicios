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

let piece = 'Bishop';

switch(piece.toLowerCase()) {
	case 'bishop':
		console.log('Se move nas diagonais');
	break;

	default:
		console.log('peça invalida');
}

//

let note = 80;

if (note < 0 || note > 100) {
	console.log('Invalido');
}else if (note >= 90) {
	console.log('A');
}else if (note >= 80){
	console.log('B');
}else if (note >= 70){
	console.log('C');
}else if (note >= 60){
	console.log('D');
}else if (note >= 50){
	console.log('E');
}else if (note < 50){
	console.log('F');
}

//

const A = 10;
const B = 2;
const C = 4;
let even = false;

if((A % 2 === 0 || B % 2 === 0 || C % 2 === 0)) {
	even = true
};
console.log(even);

let odd = false;

if((A % 2 !== 0 || B % 2 !== 0 || C % 2 !== 0)) {
	odd = true
};
console.log(odd);

//
//Auxilio do Gabarito//

const cost = 10;
const sale = 30;

if (cost >= 0 && sale >= 0) {
  const totalCost = cost * 1.2;
  const profit = (sale - totalCost) * 1000;
  console.log(profit);
} else {
  console.log("Error, os valores não podem ser negativos");
};

//
//Auxilio do Gabarito//

let aliquotINSS;
let aliquotIR;
let grossSalary = 5000.00;

if (grossSalary <= 1556.94) {
	aliquotINSS = grossSalary * 0.08;
}else if (grossSalary <= 2594.92) {
	aliquotINSS = grossSalary *0.09;
}else if (grossSalary <= 5189.82) {
	aliquotINSS = grossSalary * 0.11;
}else {
	aliquotINSS = 570.88;
}

let baseSalary = grossSalary - aliquotINSS;

if(baseSalary <= 1903.98) {
	aliquotIR = 0;
}else if (baseSalary <= 2826.65) {
	aliquotIR = (baseSalary * 0.075) - 142.80;
}else if (baseSalary <= 3751.05) {
	aliquotIR = (baseSalary * 0.15) - 354,80;
}else if (baseSalary <= 4664.68) {
	aliquotIR = (baseSalary * 0.225) - 636,13;
}else {
	aliquotIR = (baseSalary * 0.275) - 869.36;
}

console.log('Salário Líquido: ' + (baseSalary - aliquotIR))