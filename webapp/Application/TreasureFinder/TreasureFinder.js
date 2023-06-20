import Application from "../Application.js";

export default class TreasureFinder extends Application {
  tableSize = 10;
  treasureRow = Math.floor(Math.random() * this.tableSize);
  treasureCol = Math.floor(Math.random() * this.tableSize);
  gameOver = false;
  clickedTiles = [];

  init() {
    this.initDOM();
  }

  initDOM() {
    const gameContainer = document.getElementById('app');

    this.gameTable = document.createElement('table');
    this.gameTable.id = 'gameTable';
    gameContainer.appendChild(this.gameTable);

    const resultText = document.createElement('p');
    resultText.id = 'resultText';
    gameContainer.appendChild(resultText);
    this.createGameTable();
  }

  createGameTable() {
    for (let i = 0; i < 10; i++) {
      const row = document.createElement('tr');
      for (let j = 0; j < 10; j++) {
        const tile = document.createElement('td');
        tile.classList.add('tile'); // Add the 'tile' class
        tile.addEventListener('click', this.clickHandler.bind(this, i, j));
        row.appendChild(tile);
      }
      this.gameTable.appendChild(row);
    }
  }

  clickHandler(row, col) {
    if (this.gameOver || this.isTileClicked(row, col)) {
      return;
    }

    const tile = this.gameTable.rows[row].cells[col];
    tile.classList.add('brown'); // Add the 'brown' class
    this.clickedTiles.push({ row: row, col: col });

    if (row === this.treasureRow && col === this.treasureCol) {
      tile.classList.add('red'); // Add the 'red' class
      tile.classList.add('green');
      this.displayResult('YOU WIN!', 'green');
      this.gameOver = true;
    } else {
      this.computerTurn();
    }
  }

  isTileClicked(row, col) {
    for (let i = 0; i < this.clickedTiles.length; i++) {
      if (this.clickedTiles[i].row === row && this.clickedTiles[i].col === col) {
        return true;
      }
    }
    return false;
  }

  computerTurn() {
    if (this.gameOver) {
      return;
    }

    let computerRow, computerCol;
    do {
      computerRow = Math.floor(Math.random() * this.tableSize);
      computerCol = Math.floor(Math.random() * this.tableSize);
    } while (this.isTileClicked(computerRow, computerCol));

    const tile = this.gameTable.rows[computerRow].cells[computerCol];
    tile.classList.add('brown'); // Add the 'brown' class
    this.clickedTiles.push({ row: computerRow, col: computerCol });

    if (computerRow === this.treasureRow && computerCol === this.treasureCol) {
      tile.classList.add('red'); // Add the 'red' class
      this.displayResult('YOU LOST!', 'red');
      this.gameOver = true;
    }
  }

  displayResult(text,color) {
    const resultText = document.getElementById('resultText');
    resultText.textContent = text;
    resultText.style.color = color; // Set the color of the result text
  }
}