import Pieces from "./Pieces.js";

export default class Bishop extends Pieces{
    initPiece(x,y,id){
        console.log(`Init ${id} ${x}, ${y}`);
        this.x=x;
        this.y=y;
        this.id = id;
        this.img = document.createElement('img');
        if(x == 7 && (y == 2 || y == 5))
        {
            this.img.src = 'Application/Chess/src/wB.png';
        }
        if(x == 0 &&(y == 2 || y == 5))
        {
            this.img.src = 'Application/Chess/src/bB.png';
        }
        this.img.classList.add('chess-piece');
        this.img.classList.add('bishop');
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
        console.log(this.x);
        console.log(this.y);
    }

    highligth(metrix,cells){
        const bishopIndex = Array.from(cells).indexOf(this.img.parentElement);
        console.log(this.x);
        console.log(this.y);
        console.log(this.y+1)
        const tl=[[this.x-1,this.x-2,this.x-3,this.x-4,this.x-5,this.x-6,this.x-7],
                  [this.y-1,this.y-2,this.y-3,this.y-4,this.y-5,this.y-6,this.y-7]]
        const tr=[[this.x-1,this.x-2,this.x-3,this.x-4,this.x-5,this.x-6,this.x-7],
                  [this.y+1,this.y+2,this.y+3,this.y+4,this.y+5,this.y+6,this.y+7]]
        const bl=[[this.x+1,this.x+2,this.x+3,this.x+4,this.x+5,this.x+6,this.x+7],
                  [this.y-1,this.y-2,this.y-3,this.y-4,this.y-5,this.y-6,this.y-7]]
        const br=[[this.x+1,this.x+2,this.x+3,this.x+4,this.x+5,this.x+6,this.x+7],
                  [this.y+1,this.y+2,this.y+3,this.y+4,this.y+5,this.y+6,this.y+7]]
        let tlarray = new Array(7);
        let trarray = new Array(7);
        let blarray = new Array(7);
        let brarray = new Array(7);
        for(let i=0;i<7;i++){
            tlarray[i]=true;
            blarray[i]=true;
            trarray[i]=true;
            brarray[i]=true;
        }
        let tlindex=0;
        let trindex=0;
        let blindex=0;
        let brindex=0;

        for(let i=bishopIndex+1;i<cells.length;i++){
            if(cells[i].children.length<1){
                for(let j=0;j<7;j++){
                    if(cells[i].getAttribute('x')==br[0][j] && cells[i].getAttribute('y')==br[1][j]){
                        if(!(brarray.includes(false))){
                            cells[i].classList.add('highligthed');
                        }
                        brindex++;
                    }
                    else if(cells[i].getAttribute('x')==bl[0][j] && cells[i].getAttribute('y')==bl[1][j]){
                        if(!(blarray.includes(false))){
                            cells[i].classList.add('highligthed');
                        }
                        blindex++;
                    }
                }
            }
            else{
                if(this.id.includes('White')){
                    if(cells[i].children[0].getAttribute('id').includes('Black')){
                        for(let j=0;j<7;j++){
                            if(cells[i].getAttribute('x')==br[0][j] && cells[i].getAttribute('y')==br[1][j]){
                                if(!(brarray.includes(false))){
                                    cells[i].classList.add('strike');
                                }
                                brarray[brindex]=false;
                                brindex++;
                            }
                            else if(cells[i].getAttribute('x')==bl[0][j] && cells[i].getAttribute('y')==bl[1][j]){
                                if(!(blarray.includes(false))){
                                    cells[i].classList.add('strike');
                                }
                                blarray[blindex]=false;
                                blindex++;
                            }
                        }
                    }
                    else{
                        for(let j=0;j<7;j++){
                            if(cells[i].getAttribute('x')==br[0][j] && cells[i].getAttribute('y')==br[1][j]){
                                brarray[brindex]=false;
                                brindex++;
                            }
                            else if(cells[i].getAttribute('x')==bl[0][j] && cells[i].getAttribute('y')==bl[1][j]){
                                blarray[blindex]=false;
                                blindex++;
                            }
                        }
                    }
                }
                else if(this.id.includes('Black')){
                    if(cells[i].children[0].getAttribute('id').includes('White')){
                        for(let j=0;j<7;j++){
                            if(cells[i].getAttribute('x')==br[0][j] && cells[i].getAttribute('y')==br[1][j]){
                                if(!(brarray.includes(false))){
                                    cells[i].classList.add('strike');
                                }
                                brarray[brindex]=false;
                                brindex++;
                            }
                            else if(cells[i].getAttribute('x')==bl[0][j] && cells[i].getAttribute('y')==bl[1][j]){
                                if(!(blarray.includes(false))){
                                    cells[i].classList.add('strike');
                                }
                                blarray[blindex]=false;
                                blindex++;
                            }
                        }
                    }
                    else{
                        for(let j=0;j<7;j++){
                            if(cells[i].getAttribute('x')==br[0][j] && cells[i].getAttribute('y')==br[1][j]){
                                brarray[brindex]=false;
                                brindex++;
                            }
                            else if(cells[i].getAttribute('x')==bl[0][j] && cells[i].getAttribute('y')==bl[1][j]){
                                blarray[blindex]=false;
                                blindex++;
                            }
                        }
                    }
                }
            }
        }
        for(let i=bishopIndex-1;i>=0;i--){
            if(cells[i].children.length<1){
                for(let j=0;j<7;j++){
                    if(cells[i].getAttribute('x')==tl[0][j] && cells[i].getAttribute('y')==tl[1][j]){
                        if(!(tlarray.includes(false))){
                            cells[i].classList.add('highligthed');
                        }
                        tlindex++;
                    }
                    else if(cells[i].getAttribute('x')==tr[0][j] && cells[i].getAttribute('y')==tr[1][j]){
                        if(!(trarray.includes(false))){
                            cells[i].classList.add('highligthed');
                        }
                        trindex++;
                    }
                }
            }
            else{
                if(this.id.includes('White')){
                    if(cells[i].children[0].getAttribute('id').includes('Black')){
                        for(let j=0;j<7;j++){
                            if(cells[i].getAttribute('x')==tr[0][j] && cells[i].getAttribute('y')==tr[1][j]){
                                if(!(trarray.includes(false))){
                                    cells[i].classList.add('strike');
                                }
                                trarray[trindex]=false;
                                trindex++;
                            }
                            else if(cells[i].getAttribute('x')==tl[0][j] && cells[i].getAttribute('y')==tl[1][j]){
                                if(!(tlarray.includes(false))){
                                    cells[i].classList.add('strike');
                                }
                                tlarray[tlindex]=false;
                                tlindex++;
                            }
                        }
                    }
                    else{
                        for(let j=0;j<7;j++){
                            if(cells[i].getAttribute('x')==tr[0][j] && cells[i].getAttribute('y')==tr[1][j]){
                                trarray[trindex]=false;
                                trindex++;
                            }
                            else if(cells[i].getAttribute('x')==tl[0][j] && cells[i].getAttribute('y')==tl[1][j]){
                                tlarray[tlindex]=false;
                                tlindex++;
                            }
                        }
                    }
                }
                else if(this.id.includes('Black')){
                    if(cells[i].children[0].getAttribute('id').includes('White')){
                        for(let j=0;j<7;j++){
                            if(cells[i].getAttribute('x')==tr[0][j] && cells[i].getAttribute('y')==tr[1][j]){
                                if(!(trarray.includes(false))){
                                    cells[i].classList.add('strike');
                                }
                                trarray[trindex]=false;
                                trindex++;
                            }
                            else if(cells[i].getAttribute('x')==tl[0][j] && cells[i].getAttribute('y')==tl[1][j]){
                                if(!(tlarray.includes(false))){
                                    cells[i].classList.add('strike');
                                }
                                tlarray[tlindex]=false;
                                tlindex++;
                            }
                        }
                    }
                    else{
                        for(let j=0;j<7;j++){
                            if(cells[i].getAttribute('x')==tr[0][j] && cells[i].getAttribute('y')==tr[1][j]){
                                trarray[trindex]=false;
                                trindex++;
                            }
                            else if(cells[i].getAttribute('x')==tl[0][j] && cells[i].getAttribute('y')==tl[1][j]){
                                tlarray[tlindex]=false;
                                tlindex++;
                            }
                        }
                    }
                }
            }
        }
    }
}