const books = require ('./baseArray');

const expectedResult = [
  'O Senhor dos Anéis',
  'Fundação',
  'O Chamado de Cthulhu',
];

function oldBooks() {
  // escreva seu código aqui
  return books.filter((book) => (2022 - book.releaseYear >= 60)).map((book) => book.name);
}

console.log(oldBooks());