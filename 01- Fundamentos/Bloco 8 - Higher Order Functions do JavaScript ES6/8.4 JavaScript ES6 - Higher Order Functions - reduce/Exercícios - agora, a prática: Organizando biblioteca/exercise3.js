const books = require("./booksArray");

const expectedResult = 43;

function averageAge() {
  // escreva seu código aqui
  const sumOfAges = books.reduce((acc, curr) => (acc + (curr.releaseYear - curr.author.birthYear)), 0)
  return sumOfAges / books.length;
}

console.log(averageAge());