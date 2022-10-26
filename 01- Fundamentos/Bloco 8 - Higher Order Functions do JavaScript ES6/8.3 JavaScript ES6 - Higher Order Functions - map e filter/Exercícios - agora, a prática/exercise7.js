const books = require ('./baseArray');

const expectedResult = 'O Senhor dos Anéis';

function authorWith3DotsOnName() {
  // escreva seu código aqui
  return books.find((book) => (book.author.name[1] === '.' && book.author.name[4] === '.' && book.author.name[7] === '.')).name;
}

console.log(authorWith3DotsOnName());