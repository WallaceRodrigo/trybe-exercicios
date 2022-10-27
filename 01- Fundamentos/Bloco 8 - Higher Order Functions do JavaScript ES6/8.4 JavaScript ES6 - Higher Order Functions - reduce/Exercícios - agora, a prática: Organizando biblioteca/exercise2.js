const books = require("./booksArray");

const expectedResult = "George R. R. Martin, J. R. R. Tolkien, Isaac Asimov, Frank Herbert, Stephen King, H. P. Lovecraft.";

function reduceNames() {
  // escreva seu código aqui
  return books.reduce((acc, curr) => `${acc} ${curr.author.name}.`, '');
}

console.log(reduceNames());