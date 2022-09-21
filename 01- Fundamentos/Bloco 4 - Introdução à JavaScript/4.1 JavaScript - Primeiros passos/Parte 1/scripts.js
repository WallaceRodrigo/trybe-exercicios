//Crie uma constante chamada myName e atribua a ela o seu nome (Exemplo: Carolina).
//Crie uma constante chamada birthCity e atribua a ela a sua cidade natal.
//Crie uma variável let chamada birthYear e atribua a ela o ano em que você nasceu.
//Utilize o console.log() para imprimir as constantes e variáveis que você criou.
//Altere o valor atribuído à variável birthYear para 2030. Faça um console.log(birthYear) novamente para ver o que acontece!
//Altere o valor atribuído à constante birthCity. Faça um console.log(birthCity) novamente! Você saberia explicar por que recebemos uma mensagem de erro? 🤔

const myName = 'Wallace';
const birthCity = 'Pindamonhangaba';
let birthYear = 2004;
console.log(myName, birthCity, birthYear)

birthYear = 2030;
console.log(birthYear)

birthCity = 'Jaboatão dos Guararapes';
console.log(birthCity)
//Recebemos um erro porque 'const' não é alterável apos ser declarada