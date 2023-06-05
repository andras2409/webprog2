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

    highligth(matrix,cells){
        const rookIndex = Array.from(cells).indexOf(this.img.parentElement);
        let tarray = new Array(7);
        let barray = new Array(7);
        let larray = new Array(7);
        let rarray = new Array(7);
        let tindex = 0;
        let bindex = 0;
        let lindex = 0;
        let rindex = 0;
        for(let i=0;i<=7;i++){
            barray[i]=true;
            tarray[i]=true;
            larray[i]=true;
            rarray[i]=true;
        }
        for(let i=rookIndex-1;i>=0;i--){
            console.log(i);
            if(cells[i].children.length<1){
                if(cells[i].getAttribute('x')==this.x){
                    if(!(larray.includes(false))){
                        cells[i].classList.add('highligthed');
                    }
                    lindex++;
                }
                else if(cells[i].getAttribute('y')==this.y){
                    if(!(tarray.includes(false))){
                        cells[i].classList.add('highligthed');
                    }
                    tindex++;
                }
            }
            else{
                if(this.id.includes("White")){
                    if(cells[i].children[0].getAttribute('id').includes("Black")){
                        if(cells[i].getAttribute('x')==this.x){
                            if(!(larray.includes(false))){
                                cells[i].classList.add('strike');
                            }
                            larray[lindex]=false;
                            lindex++;
                        }
                        else if(cells[i].getAttribute('y')==this.y){
                            if(!(tarray.includes(false))){
                                cells[i].classList.add('strike');
                            }
                            tarray[tindex]=false;
                            tindex++;
                        }
                    }
                    else{
                        if(cells[i].getAttribute('x')==this.x){
                            larray[lindex]=false;
                            lindex++;
                        }
                        else if(cells[i].getAttribute('y')==this.y){
                            tarray[tindex]=false;
                            tindex++;
                        }
                    }
                }
                else if(this.id.includes("Black")){
                    if(cells[i].children[0].getAttribute('id').includes("White")){
                        if(cells[i].getAttribute('x')==this.x){
                            if(!(larray.includes(false))){
                                cells[i].classList.add('strike');
                            }
                            larray[lindex]=false;
                            lindex++;
                        }
                        else if(cells[i].getAttribute('y')==this.y){
                            if(!(tarray.includes(false))){
                                cells[i].classList.add('strike');
                            }
                            tarray[tindex]=false;
                            tindex++;
                        }
                    }
                    else{
                        if(cells[i].getAttribute('x')==this.x){
                            larray[lindex]=false;
                            lindex++;
                        }
                        else if(cells[i].getAttribute('y')==this.y){
                            tarray[tindex]=false;
                            tindex++;
                        }
                    }
                }
            }
        }
        console.log('---------------------');
        console.log(cells.length);
        console.log('---------------------');
        for(let i=rookIndex+1;i<cells.length;i++){
            console.log(i);
            if(cells[i].children.length<1){
                if(cells[i].getAttribute('x')==this.x){
                    if(!(rarray.includes(false))){
                        cells[i].classList.add('highligthed');
                    }
                    rindex++;
                }
                else if(cells[i].getAttribute('y')==this.y){
                    if(!(barray.includes(false))){
                        cells[i].classList.add('highligthed');
                    }
                    bindex++;
                }
            }
            else{
                if(this.id.includes("White")){
                    if(cells[i].children[0].getAttribute('id').includes("Black")){
                        if(cells[i].getAttribute('x')==this.x){
                            if(!(rarray.includes(false))){
                                cells[i].classList.add('strike');
                            }
                            rarray[rindex]=false;
                            rindex++;
                        }
                        /*
                        else if(cells[i].getAttribute('y')==this.y){
                            if(!(tarray.includes(false))){
                                cells[i].classList.add('strike');
                            }
                            tarray[tindex]=false;
                            tindex++;
                        }
                        */
                        else if(cells[i].getAttribute('y')==this.y){
                            if(!(barray.includes(false))){
                                cells[i].classList.add('strike');
                            }
                            barray[bindex]=false;
                            bindex++;
                        }
                    }
                    else{
                        if(cells[i].getAttribute('x')==this.x){
                            rarray[rindex]=false;
                            rindex++;
                        }
                        else if(cells[i].getAttribute('y')==this.y){
                            barray[bindex]=false;
                            bindex++;
                        }
                    }
                }
                else if(this.id.includes("Black")){
                    if(cells[i].children[0].getAttribute('id').includes("White")){
                        if(cells[i].getAttribute('x')==this.x){
                            if(!(rarray.includes(false))){
                                cells[i].classList.add('strike');
                            }
                            rarray[rindex]=false;
                            rindex++;
                        }
                        else if(cells[i].getAttribute('y')==this.y){
                            if(!(barray.includes(false))){
                                cells[i].classList.add('strike');
                            }
                            barray[bindex]=false;
                            bindex++;
                        }
                    }
                    else{
                        if(cells[i].getAttribute('x')==this.x){
                            rarray[rindex]=false;
                            rindex++;
                        }
                        else if(cells[i].getAttribute('y')==this.y){
                            barray[bindex]=false;
                            bindex++;
                        }
                    }
                }
            }
        }
    }
}