import Pieces from "./Pieces.js";

export default class Rook extends Pieces{
    initPiece(x,y,id){
        console.log(`Init ${id} ${x}, ${y}`);
        const img = document.createElement('img');
        if(x == 0 && (y == 0 || y == 7))
        {
            img.src = 'Application/Chess/src/bR.png';
        }
        if(x == 7 && (y == 0 || y == 7))
        {
            img.src = 'Application/Chess/src/wR.png';
        }
        img.classList.add('chess-piece');
        img.classList.add('rook');
        img.id = id;
        const cells = document.querySelectorAll('.chess-cell');
        for(let i=0;i<cells.length;i++){
            const cell_x = cells[i].getAttribute('x');
            const cell_y = cells[i].getAttribute('y');
            if(x==cell_x && y==cell_y){
                console.log(`true ${cell_x}, ${cell_y}`);
                cells[i].appendChild(img);
            }
        }
    }
}