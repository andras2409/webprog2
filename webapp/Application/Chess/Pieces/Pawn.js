import Pieces from "./Pieces.js";

export default class Pawn extends Pieces{
    initPiece(x,y,id){
        console.log(`Init ${id} ${x}, ${y}`);
        this.img = document.createElement('img');
        if(x == 1)
        {
            this.img.src = 'Application/Chess/src/bP.png';
        }
        else{
            this.img.src = 'Application/Chess/src/wP.png';
        }
        
        this.img.classList.add('chess-piece');
        this.img.classList.add('pawn');
        this.img.id = id;
        const cells = document.querySelectorAll('.chess-cell');
        for(let i=0;i<cells.length;i++){
            const cell_x = cells[i].getAttribute('x');
            const cell_y = cells[i].getAttribute('y');
            if(x==cell_x && y==cell_y){
                console.log(`true ${cell_x}, ${cell_y}`);
                cells[i].appendChild(this.img);
            }
        }
    }
}