export default class TreasureFinderGame {
    constructor() {
      this.Game();
      this.gridSize = 10;
      this.tiles = [];
      this.treasureTile = null;
    }
  
    Game() {

        function createGrid() {
            const table = document.createElement("table");
    table.classList.add("treasure-grid");

    for (let row = 0; row < this.gridSize; row++) {
      const tr = document.createElement("tr");
      const rowTiles = [];

      for (let col = 0; col < this.gridSize; col++) {
        const td = document.createElement("td");
        td.classList.add("tile");
        td.style.backgroundColor = "yellow";
        tr.appendChild(td);
        rowTiles.push(td);
      }

      table.appendChild(tr);
      this.tiles.push(rowTiles);
    }

    document.body.appendChild(table);
}
      this.createGrid();
      this.addEventListeners();
      const table = document.createElement("table");
      table.classList.add("treasure-grid");
  
      for (let row = 0; row < this.gridSize; row++) {
        const tr = document.createElement("tr");
        const rowTiles = [];
  
        for (let col = 0; col < this.gridSize; col++) {
          const td = document.createElement("td");
          td.classList.add("tile");
          td.style.backgroundColor = "yellow";
          tr.appendChild(td);
          rowTiles.push(td);
        }
  
        table.appendChild(tr);
        this.tiles.push(rowTiles);
      }
  
      document.body.appendChild(table);
  
      this.createGrid();
      const treasureRow = Math.floor(Math.random() * this.gridSize);
      const treasureCol = Math.floor(Math.random() * this.gridSize);
      this.treasureTile = this.tiles[treasureRow][treasureCol];
      this.treasureTile.dataset.isTreasure = true;
  
      const tiles = document.querySelectorAll(".tile");
      tiles.forEach((tile) => {
        tile.addEventListener("click", () => {
          this.handleTileClick(tile);
        });
      });
  
      const tile = this.treasureTile;
      if (tile === this.treasureTile) {
        this.showResult("YOU WIN");
      } else {
        this.computerPickTile();
        this.showResult("YOU LOST");
      }
  
      this.revealTiles();
      this.removeEventListeners();
    }
  
    computerPickTile() {
      let availableTiles = [];
      this.tiles.forEach((row) => {
        row.forEach((tile) => {
          if (!tile.dataset.clicked && !tile.dataset.isTreasure) {
            availableTiles.push(tile);
          }
        });
      });
  
      if (availableTiles.length > 0) {
        const randomIndex = Math.floor(Math.random() * availableTiles.length);
        const computerTile = availableTiles[randomIndex];
        computerTile.dataset.clicked = true;
      }
    }
  
    handleTileClick(tile) {
      if (tile === this.treasureTile) {
        this.showResult("YOU WIN");
      } else {
        this.computerPickTile();
        this.showResult("YOU LOST");
      }
  
      this.revealTiles();
      this.removeEventListeners();
    }
  
    showResult(resultText) {
      const result = document.createElement("div");
      result.classList.add("result");
      result.textContent = resultText;
      document.body.appendChild(result);
    }
  
    revealTiles() {
      this.tiles.forEach((row) => {
        row.forEach((tile) => {
          tile.style.backgroundColor = tile === this.treasureTile ? "red" : "brown";
        });
      });
    }
  
    removeEventListeners() {
      const tiles = document.querySelectorAll(".tile");
      tiles.forEach((tile) => {
        tile.removeEventListener("click", this.handleTileClick);
      });
    }
  }
  