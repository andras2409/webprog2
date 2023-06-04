import Pieces from "./Pieces.js";

export default class Rook extends Pieces{
    initPiece(x,y,id){
        console.log(`Init ${id} ${x}, ${y}`);
        this.x=x;
        this.y=y;
        this.id = id;
        this.img = document.createElement('img');
        if(x == 0 && (y == 0 || y == 7))
        {
            this.img.src = 'Application/Chess/src/bR.png';
        }
        if(x == 7 && (y == 0 || y == 7))
        {
            this.img.src = 'Application/Chess/src/wR.png';
        }
        this.img.classList.add('chess-piece');
        this.img.classList.add('rook');
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

    move(x,y){
        console.log(`Move ${this.id} to ${x}, ${y}`);
    }
}