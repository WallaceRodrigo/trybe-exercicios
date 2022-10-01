// Função que cria o elemento quadro de pixels
function createPixelBoardElement() {
  const boardContainer = document.querySelector('#board-container');
  pixelBoard = document.createElement('div');
  pixelBoard.id = 'pixel-board';
  boardContainer.appendChild(pixelBoard);
}

createPixelBoardElement();

// Tamanho do quadro inicial
let numberOfRows = 5;
let numberOfColumns = 5;

// Função que cria e adiciona os pixels ao quadro
function createPixelBoard() {
  for (let rows = 0; rows < numberOfRows; rows += 1) {
    const newRow = document.createElement('div');
    newRow.className = 'tr';
    pixelBoard.appendChild(newRow);
    for (let columns = 0; columns < numberOfColumns; columns += 1) {
      const newPixel = document.createElement('div');
      newPixel.className = 'pixel td';
      newRow.appendChild(newPixel);
    }
  }
}

createPixelBoard();
