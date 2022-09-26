function math (a , b) {
  function sum (a , b) {
    return a + b;
  }
  
  function minus (a , b) {
    return a - b;
  }

  function multi (a , b) {
    return a * b;
  }

  function div (a , b) {
    return a / b;
  }

  function mod (a , b) {
    return a % b;
  }
}
console.log(math)

//

function higherNumber (a , b) {
  if (a > b) {
    return a + ' é maior que ' + b;
  }else if (b > a) {
    return b + ' é maior que ' + a;
  }else {
    return 'os dois números são iguais';
  }
}
console.log(higherNumber(1, 3))

//

function higherNumber2 (a , b, c) {
  if (a > b && a > c) {
    return a + ' é maior';
  }else if (b > a && b > c) {
    return b + ' é maior';
  }else {
    return c + ' é maior';
  }
}
console.log(higherNumber2(5, 3, 2))

//

function isPositive (number) {
  if (number >=  1) {
    return 'positive';
  }else if (number < 0) {
    return 'negative';
  }else {
    return 'Zero';
  }
}
console.log(isPositive(0))

//
//AULA AO VIVO
//function generate(character, num){
//  let array = []
//  for(let index = 1; index <=num; index +=1){
//    array.push(character)
//  }
//  return array;
//}
//console.log(generate('a', 100))

//

function triangle (a1, a2, a3) {
  if (a1 + a2 + a3 === 180){
    return true
  }else if (a1 + a2 + a3 !== 180){
    return false
  }else {
    return 'ERROR'
  }
}

console.log(triangle(60, 60, 60))