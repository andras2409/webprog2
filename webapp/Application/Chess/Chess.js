import Application from "../Application.js";
import ChessGame from "./ChessGame.js";

export default class Chess extends Application{

    init()
    {
        this.initBoard();
        this.game = new ChessGame();
    }

    initBoard()
    {
        const black = document.createElement('div');
        black.id= 'black-removed';
        this.app.appendChild(black);
        for(let i=0;i<2;i++){
           black.appendChild(document.createElement('div'));
           black.lastChild.classList.add('removed-col');
           black.lastChild.setAttribute('row',i);
        }
        
        const board = document.createElement('div');
        board.id = 'chess-board-container';
        this.app.appendChild(board);

        for(let i = 0; i < 8; i++)
        {
            board.appendChild(document.createElement('div'));
            board.lastChild.className = 'chess-board-row';

            

            for(let j = 0; j < 8; j++)
            {
                board.lastChild.appendChild(document.createElement('div'));
                board.lastChild.lastChild.setAttribute('X', i);
                board.lastChild.lastChild.setAttribute('Y', j);
                board.lastChild.lastChild.setAttribute('pieceIndex', 0);
                /*
                if(i == 1){
                    board.lastChild.lastChild.setAttribute('data', 'bP');
                }
                if(i == 6){
                    board.lastChild.lastChild.setAttribute('data', 'wP');
                }
                */

                if(i % 2 == 0)
                {
                    if(j % 2 == 0)
                    {
                        board.lastChild.lastChild.className = 'chess-cell white';
                    }
                    else
                    {
                        board.lastChild.lastChild.className = 'chess-cell black';
                    }
                }
                else
                {
                    if(j % 2 == 0)
                    {
                        board.lastChild.lastChild.className = 'chess-cell black';
                    }
                    else
                    {
                        board.lastChild.lastChild.className = 'chess-cell white';
                    }
                }
            }
        }

        const white = document.createElement('div');
        white.id='white-removed';
        this.app.appendChild(white);

        for(let i=0;i<2;i++){
            white.appendChild(document.createElement('div'));
            white.lastChild.classList.add('removed-col');
            white.lastChild.setAttribute('row',i);
         }
    }
}