const saudações = ['Olá', (saudacao) => console.log(saudacao)];

saudações[1](saudações[0]); // Olá

// Produza o mesmo resultado acima, porém utilizando array destructuring

const [greetings] = saudações;

console.log(greetings);

let comida = 'gato';
let animal = 'água';
let bebida = 'arroz';

console.log(comida, animal, bebida); // arroz gato água

// Utilizando array destructuring, faça com que os valores apareçam nas variáveis correspondentes ao seu verdadeiro tipo

[animal, bebida, comida] = [comida, animal, bebida]

console.log(comida, animal, bebida);


let numerosPares = [1, 3, 5, 6, 8, 10, 12];

console.log(numerosPares); // [6, 8, 10, 12];

// Utilize array destructuring para produzir o resultado esperado pelo console.log abaixo

[,,, ...numerosPares] = numerosPares;

console.log(numerosPares);