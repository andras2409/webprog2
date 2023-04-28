import Application from "../Application.js";
import Cell from "../TicTacToe/Cell.js"
import TicTacToeGame from "../TicTacToe/TicTacToeGame.js";

export default class TicTacToe extends Application{

    init()
    {
        this.initDOM();
        this.game = new TicTacToeGame();
    }

    initDOM()
    {
        const cellContainer = document.createElement('div');
        cellContainer.id = 'cellContainer';
        this.app.appendChild(cellContainer);
        this.initCells(9);
        this.initStatusMessage();
        this.initRestartButton();
    }

    initStatusMessage()
    {
        const statusContainer = document.createElement('div');
        this.app.appendChild(statusContainer);
        statusContainer.id = 'statusText';
    }

    initCells(numberOfCells)
    {
        for(let i = 0; i < numberOfCells; i++)
        {
            this.cell = new Cell(i);
        }
    }

    initRestartButton()
    {
        const restartButtonContainer = document.createElement('div');
        restartButtonContainer.id = 'restart-btn-container';
        this.app.appendChild(restartButtonContainer);

        restartButtonContainer.appendChild(document.createElement('button'));
        restartButtonContainer.lastChild.id = 'restart-btn';
        restartButtonContainer.lastChild.textContent = 'Restart';
    } 
}