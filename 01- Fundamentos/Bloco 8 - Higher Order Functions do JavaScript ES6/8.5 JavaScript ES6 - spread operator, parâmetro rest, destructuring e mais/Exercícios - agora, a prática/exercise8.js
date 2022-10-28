// escreva greet abaixo
const greet = (name, geretting = 'hi') => `${geretting} ${name}` 

// Retornos esperados:
console.log(greet('John')); // 'Hi John'
console.log(greet('John', 'Good morning')); // 'Good morning John'
console.log(greet('Isabela', 'Oi')); // 'Oi Isabela'