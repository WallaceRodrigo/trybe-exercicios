// Faça uma lista com as suas frutas favoritas
const specialFruit = ['Goiaba', 'Banana', 'Morango'];

// Faça uma lista de complementos que você gostaria de adicionar
const additionalItens = ['Maçã', 'Pera', 'Manga'];

const fruitSalad = (fruit, additional) => {
  // Escreva sua função aqui
  return [...fruit, ...additional]
};

console.log(fruitSalad(specialFruit, additionalItens));