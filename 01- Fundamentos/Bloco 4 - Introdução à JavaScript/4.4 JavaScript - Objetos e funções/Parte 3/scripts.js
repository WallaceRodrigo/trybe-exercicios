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
  if (number >= 1) {
    return 'positive';
  }else if (number < 0) {
    return 'negative';
  }else {
    return 'Zero';
  }
}
console.log(isPositive(-10))