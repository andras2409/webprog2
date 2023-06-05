import Pieces from "./Pieces.js";

export default class King extends Pieces{
    initPiece(x,y,id){
        console.log(`Init ${id} ${x}, ${y}`);
        this.x=x;
        this.y=y;
        this.id = id;
        this.img = document.createElement('img');
        if(x == 0 && y == 4)
        {
            this.img.src = 'Application/Chess/src/bK.png';
        }
        if(x == 7 && y == 4)
        {
            this.img.src = 'Application/Chess/src/wK.png';
        }
        this.img.classList.add('chess-piece');
        this.img.classList.add('king');
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
        const tl = [this.x-1,this.y-1];
        const t = [this.x-1,this.y];
        const tr = [this.x-1,this.y+1];
        const l = [this.x,this.y-1];
        const r = [this.x,this.y+1];
        const bl = [this.x+1,this.y-1];
        const b = [this.x+1,this.y];
        const br = [this.x+1,this.y+1];

        cells.forEach(cell => {
            if(cell.children.length<1){
                if(cell.getAttribute('x')==tl[0] && cell.getAttribute('y')==tl[1]){
                    cell.classList.add('highligthed')
                }
                else if(cell.getAttribute('x')==t[0] && cell.getAttribute('y')==t[1]){
                    cell.classList.add('highligthed')
                }
                else if(cell.getAttribute('x')==tr[0] && cell.getAttribute('y')==tr[1]){
                    cell.classList.add('highligthed')
                }
                else if(cell.getAttribute('x')==l[0] && cell.getAttribute('y')==l[1]){
                    cell.classList.add('highligthed')
                }
                else if(cell.getAttribute('x')==r[0] && cell.getAttribute('y')==r[1]){
                    cell.classList.add('highligthed')
                }
                else if(cell.getAttribute('x')==bl[0] && cell.getAttribute('y')==bl[1]){
                    cell.classList.add('highligthed')
                }
                else if(cell.getAttribute('x')==b[0] && cell.getAttribute('y')==b[1]){
                    cell.classList.add('highligthed')
                }
                else if(cell.getAttribute('x')==br[0] && cell.getAttribute('y')==br[1]){
                    cell.classList.add('highligthed')
                }
            }
            else{
                if(this.id.includes('White')){
                    if(cell.children[0].getAttribute('id').includes('Black')){
                        if(cell.getAttribute('x')==tl[0] && cell.getAttribute('y')==tl[1]){
                            cell.classList.add('strike')
                        }
                        else if(cell.getAttribute('x')==t[0] && cell.getAttribute('y')==t[1]){
                            cell.classList.add('strike')
                        }
                        else if(cell.getAttribute('x')==tr[0] && cell.getAttribute('y')==tr[1]){
                            cell.classList.add('strike')
                        }
                        else if(cell.getAttribute('x')==l[0] && cell.getAttribute('y')==l[1]){
                            cell.classList.add('strike')
                        }
                        else if(cell.getAttribute('x')==r[0] && cell.getAttribute('y')==r[1]){
                            cell.classList.add('strike')
                        }
                        else if(cell.getAttribute('x')==bl[0] && cell.getAttribute('y')==bl[1]){
                            cell.classList.add('strike')
                        }
                        else if(cell.getAttribute('x')==b[0] && cell.getAttribute('y')==b[1]){
                            cell.classList.add('strike')
                        }
                        else if(cell.getAttribute('x')==br[0] && cell.getAttribute('y')==br[1]){
                            cell.classList.add('strike')
                        }
                    }
                }
                else if(this.id.includes('Black')){
                    if(cell.children[0].getAttribute('id').includes('White')){
                        if(cell.getAttribute('x')==tl[0] && cell.getAttribute('y')==tl[1]){
                            cell.classList.add('strike')
                        }
                        else if(cell.getAttribute('x')==t[0] && cell.getAttribute('y')==t[1]){
                            cell.classList.add('strike')
                        }
                        else if(cell.getAttribute('x')==tr[0] && cell.getAttribute('y')==tr[1]){
                            cell.classList.add('strike')
                        }
                        else if(cell.getAttribute('x')==l[0] && cell.getAttribute('y')==l[1]){
                            cell.classList.add('strike')
                        }
                        else if(cell.getAttribute('x')==r[0] && cell.getAttribute('y')==r[1]){
                            cell.classList.add('strike')
                        }
                        else if(cell.getAttribute('x')==bl[0] && cell.getAttribute('y')==bl[1]){
                            cell.classList.add('strike')
                        }
                        else if(cell.getAttribute('x')==b[0] && cell.getAttribute('y')==b[1]){
                            cell.classList.add('strike')
                        }
                        else if(cell.getAttribute('x')==br[0] && cell.getAttribute('y')==br[1]){
                            cell.classList.add('strike')
                        }
                    }
                }
            }
        });
    }
}