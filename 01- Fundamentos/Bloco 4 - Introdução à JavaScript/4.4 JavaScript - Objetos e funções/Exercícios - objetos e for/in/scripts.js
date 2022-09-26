let info = {
  personagem: 'Margarida',
  origem: 'Pato Donald',
  nota: 'Namorada do personagem principal nos quadrinhos do Pato Donald',
};

console.log("Seja bem vinda(o)", info.personagem);

//

info['recorrente'] = 'Sim';

console.log(info)

//

for(let key in info){
  console.log(key)
}

for(let key in info){
  console.log(info[key])
}

//
//AUXILIO DO GABARITO//
let info2 = {
  personagem: 'Tio Patinhas',
  origem: 'Christmas on Bear Mountain, Dell´s Four Color Comics #178',
  nota: 'O último MacPatinhas',
  recorrente: 'Sim',
};

for(key in info){
  if(key === 'recorrente' && info[key] === 'Sim' && info2[key] === "Sim") {
    console.log('Ambos Recorrentes')
  }else {
    console.log(info[key], 'e', info2[key]);
  };
}

//

let leitor = {
  nome: 'Julia',
  sobrenome: 'Pessoa',
  idade: 21,
  livrosFavoritos: [
    {
      titulo: 'O Pior Dia de Todos',
      autor: 'Daniela Kopsch',
      editora: 'Tordesilhas',
    },

    {
      titulo: 'Harry Potter e o Prisioneiro de Azkaban',
      autor: 'JK Rowling',
      editora: 'Rocco',
    }
  ],
};

console.log('O livro favorito de', leitor.nome, leitor.sobrenome, 'se chama', leitor.livrosFavoritos[0].titulo);
console.log(leitor.nome, 'tem', leitor.livrosFavoritos.length, 'livros favoritos');