export default class TreasureFinderGame {
  constructor() {
    this.gridSize = 10;
    this.tiles = [];
    this.treasureTile = null;
  }

  createGrid() {
    const table = document.querySelector(".treasure-grid");

    for (let row = 0; row < this.gridSize; row++) {
      const tr = table.rows[row];
      const rowTiles = [];

      for (let col = 0; col < this.gridSize; col++) {
        const td = tr.cells[col];
        rowTiles.push(td);
      }

      this.tiles.push(rowTiles);
    }

    const treasureRow = Math.floor(Math.random() * this.gridSize);
    const treasureCol = Math.floor(Math.random() * this.gridSize);
    this.treasureTile = this.tiles[treasureRow][treasureCol];
    this.treasureTile.dataset.isTreasure = true;
  }

  handleTileClick(tile) {
    if (tile === this.treasureTile) {
      this.showResult("YOU WIN", "green");
    } else {
      this.computerPickTile();
      this.showResult("YOU LOST", "red");
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

  showResult(resultText, color) {
    const result = document.createElement("div");
    result.classList.add("result");
    result.textContent = resultText;
    result.style.color = color;
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
      tile.removeEventListener("click", () => {
        console.log("Tile clicked");
        this.handleTileClick(tile);
      });
    });
  }
}
