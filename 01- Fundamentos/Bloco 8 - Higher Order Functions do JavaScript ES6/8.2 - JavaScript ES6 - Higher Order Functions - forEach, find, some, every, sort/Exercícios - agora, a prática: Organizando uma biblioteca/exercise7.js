const books = require("./firstArray");

// const expectedResult = false;

function authorUnique() {
  // escreva seu código aqui
  return books.every((book) => 
  !books.some((bookSome) =>
  (bookSome.author.birthYear === book.author.birthYear)
  && (bookSome.author.name !== book.author.name)));
}

console.log(authorUnique());