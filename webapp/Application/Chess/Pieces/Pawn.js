import Pieces from "./Pieces.js";

export default class Pawn extends Pieces{
    initPiece(x,y,id){
        console.log(`Init ${id} ${x}, ${y}`);
        this.moved=0;
        this.x=x;
        this.y=y;
        this.id = id;
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

    highligth(matrix,cells){
        const wb = [this.x-1,this.y];
        const wt = [this.x-2,this.y];
        const wl = [this.x-1,this.y-1];
        const wr = [this.x-1,this.y+1];
        const bb = [this.x+1,this.y];
        const bt = [this.x+2,this.y];
        const bl = [this.x+1,this.y-1];
        const br = [this.x+1,this.y+1];
        let wbh = false;
        let bbh = false;
        if(this.id.includes('White')){
            for(let i=cells.length-1;i>0;i--){
                console.log(cells.length);
                console.log(i);
                console.log(cells[i]);
                console.log(cells[i].getAttribute('x'));
                if(cells[i].children.length==0){
                    if(this.moved<1){
                        if((cells[i].getAttribute('x')==wb[0]) && (cells[i].getAttribute('y')==wb[1])){
                            cells[i].classList.add('highligthed');
                            wbh=true;
                        }
                        else if((cells[i].getAttribute('x')==wt[0]) && (cells[i].getAttribute('y')==wt[1])){
                            if(wbh){
                                cells[i].classList.add('highligthed');
                            }
                        }
                    }
                    else if(this.moved >= 1){
                        if((cells[i].getAttribute('x')==wb[0]) && (cells[i].getAttribute('y')==wb[1])){
                            cells[i].classList.add('highligthed');
                        }
                    }
                }
                else if(cells[i].children[0].getAttribute('id').includes('Black')){
                    if((cells[i].getAttribute('x')==wl[0] || cells[i].getAttribute('x')==wr[0]) && (cells[i].getAttribute('y')==wl[1] || cells[i].getAttribute('y')==wr[1])){
                        cells[i].classList.add('strike');
                    }
                }
            }
        }
        else if(this.id.includes('Black')){
            cells.forEach(cell => {
                if(cell.children.length==0){
                    if(this.moved<1){
                        if((cell.getAttribute('x')==bb[0]) && (cell.getAttribute('y')==bb[1])){
                            cell.classList.add('highligthed');
                            bbh=true;
                        }
                        else if((cell.getAttribute('x')==bt[0]) && (cell.getAttribute('y')==bt[1])){
                            if(bbh){
                                cell.classList.add('highligthed');
                            }
                        }
                    }
                    else if(this.moved >= 1){
                        if((cell.getAttribute('x')==bb[0]) && (cell.getAttribute('y')==bb[1])){
                            cell.classList.add('highligthed');
                        }
                    }
                }
                else if(cell.children[0].getAttribute('id').includes('Black')){
                    if((cell.getAttribute('x')==bl[0] || cell.getAttribute('x')==br[0]) && (cell.getAttribute('y')==bl[1] || cell.getAttribute('y')==br[1])){
                        cell.classList.add('strike');
                    }
                }
            });
        }
    }

    move(x,y){
        console.log(`Move ${this.id} to ${x}, ${y}`);
    }
}