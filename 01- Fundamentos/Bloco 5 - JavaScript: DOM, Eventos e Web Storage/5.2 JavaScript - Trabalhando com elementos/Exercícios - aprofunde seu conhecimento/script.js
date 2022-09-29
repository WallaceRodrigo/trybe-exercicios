//document.body.appendChild(createH1);

let body = document.querySelector('body');
let createH1 = document.createElement('h1');
createH1.innerHTML = 'Exercício - JavaScript DOM';
body.appendChild(createH1);

let createMain = document.createElement('main');
createMain.className = 'main-content';
body.appendChild(createMain);

let createSection = document.createElement('section');
createSection.className = 'center-content';
createMain.appendChild(createSection)

let createP = document.createElement('p');
createSection.appendChild(createP);

let createSectionLeft = document.createElement('section');
createSectionLeft.className = 'left-content';
createMain.appendChild(createSectionLeft)

let createSectionRight = document.createElement('section');
createSectionRight.className = 'right-content';
createMain.appendChild(createSectionRight)

let createImage = document.createElement('img');
createImage.src = 'https://picsum.photos/200';
createImage.className = 'small-image';
createSectionLeft.appendChild(createImage);

let createUnorderedList = document.createElement('ul');
createSectionRight.appendChild(createUnorderedList);
let numbers = ['Um', 'Dois', 'Três', 'Quatro', 'Cinco', 'Seis',
'Sete', 'Oito', 'Nove', 'Dez'];
for (let index = 0; index < numbers.length; index += 1){
  let CreateListItem = document.createElement('li');
  CreateListItem.innerHTML = numbers[index];
  createUnorderedList.appendChild(CreateListItem);
}
for (let index = 1; index <= 3; index += 1){
let createH3 = document.createElement('h3');
createMain.appendChild(createH3);
}
