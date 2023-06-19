import Application from "../Application.js";

export default class TreasureFinder extends Application {
  tableSize = 10;
  treasureRow = Math.floor(Math.random() * this.tableSize);
  treasureCol = Math.floor(Math.random() * this.tableSize);
  gameOver = false;
  clickedTiles = [];

  init() {
    this.initDOM();
    this.createGameTable();
  }

  initDOM() {
    const appElement = document.getElementById("app");
    
    const table = document.createElement("table");
    table.classList.add("treasure-grid");

    for (let row = 0; row < 10; row++) {
      const tr = document.createElement("tr");
      const rowTiles = [];

      for (let col = 0; col < 10; col++) {
        const td = document.createElement("td");
        td.classList.add("tile");
        td.style.backgroundColor = "yellow";
        td.addEventListener("click", () => {
          console.log("Tile clicked");
          this.game.handleTileClick(td);
        });
        tr.appendChild(td);
        rowTiles.push(td);
      }

      table.appendChild(tr);
    }

    appElement.appendChild(table);
  }

  createGameTable() {
    for (let i = 0; i < this.tableSize; i++) {
      const row = document.createElement('tr');
      for (let j = 0; j < this.tableSize; j++) {
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
      this.displayResult('YOU WIN!');
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
      this.displayResult('YOU LOST!');
      this.gameOver = true;
    }
  }

  displayResult(text) {
    const resultText = document.getElementById('resultText');
    resultText.textContent = text;
  }
}