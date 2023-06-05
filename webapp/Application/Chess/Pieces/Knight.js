import Pieces from "./Pieces.js";

export default class Knight extends Pieces{
    initPiece(x,y,id){
        console.log(`Init ${id} ${x}, ${y}`);
        this.x=x;
        this.y=y;
        this.id = id;
        this.img = document.createElement('img');
        if(x == 0 && (y == 1 || y == 6))
        {
            this.img.src = 'Application/Chess/src/bN.png';
        }
        if(x == 7 && (y == 1 || y == 6))
        {
            this.img.src = 'Application/Chess/src/wN.png';
        }
        this.img.classList.add('chess-piece');
        this.img.classList.add('knight');
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

    highligth(matrix, cells){
        const tl = [this.x-2,this.y-1];
        const tr = [this.x-2,this.y+1];
        const tln = [this.x-1,this.y-2];
        const trn = [this.x-1,this.y+2];
        const bl = [this.x+2,this.y-1];
        const br = [this.x+2,this.y+1];
        const bln = [this.x+1,this.y-2];
        const brn = [this.x+1,this.y+2];

        cells.forEach(cell => {
            if(cell.children.length==0){
                if(cell.getAttribute('x')==tl[0]&&cell.getAttribute('y')==tl[1]){
                    cell.classList.add('highligthed');
                }
                else if(cell.getAttribute('x')==tr[0]&&cell.getAttribute('y')==tr[1]){
                    cell.classList.add('highligthed');
                }
                else if(cell.getAttribute('x')==tln[0]&&cell.getAttribute('y')==tln[1]){
                    cell.classList.add('highligthed');
                }
                else if(cell.getAttribute('x')==trn[0]&&cell.getAttribute('y')==trn[1]){
                    cell.classList.add('highligthed');
                }
                else if(cell.getAttribute('x')==bl[0]&&cell.getAttribute('y')==bl[1]){
                    cell.classList.add('highligthed');
                }
                else if(cell.getAttribute('x')==br[0]&&cell.getAttribute('y')==br[1]){
                    cell.classList.add('highligthed');
                }
                else if(cell.getAttribute('x')==bln[0]&&cell.getAttribute('y')==bln[1]){
                    cell.classList.add('highligthed');
                }
                else if(cell.getAttribute('x')==brn[0]&&cell.getAttribute('y')==brn[1]){
                    cell.classList.add('highligthed');
                }
            }
            else{
                if(this.id.includes('White')){
                    if(cell.children[0].getAttribute('id').includes('Black')){
                        if(cell.getAttribute('x')==tl[0]&&cell.getAttribute('y')==tl[1]){
                            cell.classList.add('strike');
                        }
                        else if(cell.getAttribute('x')==tr[0]&&cell.getAttribute('y')==tr[1]){
                            cell.classList.add('strike');
                        }
                        else if(cell.getAttribute('x')==tln[0]&&cell.getAttribute('y')==tln[1]){
                            cell.classList.add('strike');
                        }
                        else if(cell.getAttribute('x')==trn[0]&&cell.getAttribute('y')==trn[1]){
                            cell.classList.add('strike');
                        }
                        else if(cell.getAttribute('x')==bl[0]&&cell.getAttribute('y')==bl[1]){
                            cell.classList.add('strike');
                        }
                        else if(cell.getAttribute('x')==br[0]&&cell.getAttribute('y')==br[1]){
                            cell.classList.add('strike');
                        }
                        else if(cell.getAttribute('x')==bln[0]&&cell.getAttribute('y')==bln[1]){
                            cell.classList.add('strike');
                        }
                        else if(cell.getAttribute('x')==brn[0]&&cell.getAttribute('y')==brn[1]){
                            cell.classList.add('strike');
                        }
                    }
                }
                else if(this.id.includes('Black')){
                    if(cell.children[0].getAttribute('id').includes('White')){
                        if(cell.getAttribute('x')==tl[0]&&cell.getAttribute('y')==tl[1]){
                            cell.classList.add('strike');
                        }
                        else if(cell.getAttribute('x')==tr[0]&&cell.getAttribute('y')==tr[1]){
                            cell.classList.add('strike');
                        }
                        else if(cell.getAttribute('x')==tln[0]&&cell.getAttribute('y')==tln[1]){
                            cell.classList.add('strike');
                        }
                        else if(cell.getAttribute('x')==trn[0]&&cell.getAttribute('y')==trn[1]){
                            cell.classList.add('strike');
                        }
                        else if(cell.getAttribute('x')==bl[0]&&cell.getAttribute('y')==bl[1]){
                            cell.classList.add('strike');
                        }
                        else if(cell.getAttribute('x')==br[0]&&cell.getAttribute('y')==br[1]){
                            cell.classList.add('strike');
                        }
                        else if(cell.getAttribute('x')==bln[0]&&cell.getAttribute('y')==bln[1]){
                            cell.classList.add('strike');
                        }
                        else if(cell.getAttribute('x')==brn[0]&&cell.getAttribute('y')==brn[1]){
                            cell.classList.add('strike');
                        }
                    }
                    }
                }
            }
        );
    }
}