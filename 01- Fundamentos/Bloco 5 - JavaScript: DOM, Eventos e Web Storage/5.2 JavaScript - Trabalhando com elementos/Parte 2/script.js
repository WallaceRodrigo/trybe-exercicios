//<!--Acesse o elemento elementoOndeVoceEsta.
//Acesse pai a partir de elementoOndeVoceEsta e adicione uma color a ele.
//Acesse o primeiroFilhoDoFilho e adicione um texto a ele. Você se lembra dos vídeos da aula anterior, como fazer isso?
//Acesse o primeiroFilho a partir de pai.
//Agora acesse o primeiroFilho a partir de elementoOndeVoceEsta.
//Agora acesse o texto Atenção! a partir de elementoOndeVoceEsta.
//Agora acesse o terceiroFilho a partir de elementoOndeVoceEsta.
//Agora acesse o terceiroFilho a partir de pai.-->

console.log(document.querySelector('#elementoOndeVoceEsta').parentNode.style.color = 'blue');

console.log(document.querySelector('#primeiroFilhoDoFilho').innerText = 'texto');

console.log(document.querySelector('#pai').firstElementChild);

console.log(document.querySelector('#elementoOndeVoceEsta').previousElementSibling);

console.log(document.querySelector('#elementoOndeVoceEsta').nextSibling);

console.log(document.querySelector('#elementoOndeVoceEsta').nextElementSibling);

console.log(document.querySelector('#pai').lastElementChild.previousElementSibling);
