//Crie um irmão para elementoOndeVoceEsta.
//Crie um filho para elementoOndeVoceEsta.
//Crie um filho para primeiroFilhoDoFilho.
//A partir desse filho criado, acesse terceiroFilho.

let brother = document.querySelector('#elementoOndeVoceEsta').parentNode;
let son = document.createElement('div')
brother.appendChild(son);

let elementWhereAreYou = document.querySelector('#elementoOndeVoceEsta');
elementWhereAreYou.appendChild(son);

let firstSonOfSon = document.querySelector('#primeiroFilhoDoFilho');
firstSonOfSon.appendChild(son);

document.querySelector('#primeiroFilhoDoFilho').firstElementChild.parentNode.parentNode.parentNode.lastElementChild.previousElementSibling;