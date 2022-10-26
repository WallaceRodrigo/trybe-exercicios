const books = require ('./baseArray');

const expectedResult = [
  'Frank Herbert',
  'George R. R. Martin',
  'Isaac Asimov',
  'J. R. R. Tolkien',
];

function fantasyOrScienceFictionAuthors() {
  // escreva seu código aqui
  const authors = [];
  books.filter((book) => (book.genre === 'Fantasia' || book.genre === 'Ficção Científica' ? authors.push(book.author.name) : ''));
  return authors.sort();
}

console.log(fantasyOrScienceFictionAuthors());