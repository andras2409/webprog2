import Pieces from "./Pieces.js";

export default class Knight extends Pieces{
    initPiece(x,y,id){
        console.log(`Init ${id} ${x}, ${y}`);
        const img = document.createElement('img');
        if(x == 0 && (y == 1 || y == 6))
        {
            img.src = 'Application/Chess/src/bN.png';
        }
        if(x == 7 && (y == 1 || y == 6))
        {
            img.src = 'Application/Chess/src/wN.png';
        }
        img.classList.add('chess-piece');
        img.classList.add('knight');
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