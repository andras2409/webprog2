import Application from "../Application.js";
import TreasureFinderGame from "../TreasureFinder/TreasureFinderGame.js";

class TreasureFinder extends Application {
  init() {
    super.init();
    this.initDOM();
    this.game = new TreasureFinderGame();
    this.game.createGrid();
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
}

const app = new TreasureFinder();
app.init();
