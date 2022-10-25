const books = require("./firstArray");

// const expectedResult = false;

function everyoneWasBornOnSecXX() {
  // escreva seu código aqui
  return books.every((book) => book.author.birthYear > 2000);
}

console.log(everyoneWasBornOnSecXX());