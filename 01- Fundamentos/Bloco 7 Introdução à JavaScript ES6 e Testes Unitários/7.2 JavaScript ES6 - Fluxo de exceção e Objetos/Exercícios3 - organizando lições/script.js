//AUXILIO DO GABARITO//

const lesson1 = {
  materia: 'Matemática',
  numeroEstudantes: 20,
  professor: 'Maria Clara',
  turno: 'manhã',
};

const lesson2 = {
  materia: 'História',
  numeroEstudantes: 20,
  professor: 'Carlos',
};

const lesson3 = {
  materia: 'Matemática',
  numeroEstudantes: 10,
  professor: 'Maria Clara',
  turno: 'noite',
};

const addNewKey = (obj, key, value) => {
  obj[key] = value;
  // através do "obj[key]" acessamos a chave do objeto cujo valor queremos modificar. A partir daí basta atribuir o valor desejado, que em nossa função é o terceiro parâmetro (value).
};

addNewKey(lesson2, 'turno', 'noite');
console.log(lesson2);

const listKeys = (obj) =>  Object.keys(obj);
// O metodo "Object.keys()" faz essa listagem, basta passarmos o objeto que queremos referenciar como parâmetro.

console.log(listKeys(lesson1));

const sizeObj = (obj) =>  Object.keys(obj).length;
// Como o "Object.keys()" devolve um array, podemos utilizar o método ".length" para obter seu tamanho
console.log(sizeObj(lesson1));

const listValues = (obj) =>  Object.values(obj);
// Quando queremos recuperar as chaves usamos o "Object.keys()", de forma similar, para recuperar os valores em um array usamos o método "Object.values()"

console.log(listValues(lesson1));

const allLessons = Object.assign({}, { lesson1, lesson2, lesson3 });
// O método "Object.assing()" recebe dois parametros, um objeto, e o que queremos atribuir à ele. Se no primeiro parametro passarmos um objeto vazio ele criará um objeto novo com as carateristicas do segundo parâmetro.

console.log(allLessons);

const getNumberOfStudents = (obj) => {
  let total = 0;

  const array = Object.keys(obj);
    
  for (index in array) {
    total += obj[array[index]].numeroEstudantes; // incremente a variável total a cada iteração
  }
  return total; // a função retorna o total de alunos após as iterações do "for/in"
};
console.log(getNumberOfStudents(allLessons));

const getValueByNumber = (obj,number) => Object.values(obj)[number];
  // usamos o "Object.values()" para criarmos um array com os valores do objeto, e então acessamos a sua posição passando o índice.
console.log(getValueByNumber(lesson1, 2));

//JEITO DO GABARITO//
//const verifyPair = (obj, key, value) => {
//  const arr = Object.entries(obj);
//  let isEqual = false;
//  for (let index in arr) {
//    if (arr[index][0] === key && arr[index][1] === value) isEqual = true;
//  }
//  return isEqual;
//};
//console.log(verifyPair(lesson2,'professor','Carlos'));

//MEU JEITO//
const verify = (obj, key, value) => {
  let isTrue = false;
  if (Object.keys(obj).includes(key) && Object.values(obj).includes(value)) {
    isTrue = true;
  }
  return isTrue;
}
console.log(verify(lesson2,'materia','História'));