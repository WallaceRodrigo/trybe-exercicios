//Remova todos os elementos filhos de paiDoPai exceto pai, elementoOndeVoceEsta e primeiroFilhoDoFilho.
//AUXILIO DO GABARITO//


const dad = document.querySelector('#pai');
const allChilds = dad.childNodes;

for (let index = allChilds.length - 1; index >= 0; index -= 1){
  const actualChild = allChilds[index];
  if (actualChild.id !== 'elementoOndeVoceEsta'){
    actualChild.remove();
  }
}

const secondAndLastChild = document.querySelector('#segundoEUltimoFilhoDoFilho');
secondAndLastChild.remove();

//const pai = document.getElementById('pai');
//const todosOsFilhos = pai.childNodes;
//for (let index = todosOsFilhos.length - 1; index >= 0; index -= 1) {
//  const filhoAtual = todosOsFilhos[index];
//  if (filhoAtual.id !== 'elementoOndeVoceEsta') {
//    filhoAtual.remove();
//  }
//}
//const segundoEUltimoFilhoDoFilho = document.getElementById('segundoEUltimoFilhoDoFilho');
//segundoEUltimoFilhoDoFilho.remove();

