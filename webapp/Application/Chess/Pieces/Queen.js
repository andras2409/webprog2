import Pieces from "./Pieces.js";

export default class Queen extends Pieces{
    initPiece(x,y,id){
        console.log(`Init ${id} ${x}, ${y}`);
        this.x=x;
        this.y=y;
        this.id = id;
        this.img = document.createElement('img');
        if(x == 0 && y == 3)
        {
            this.img.src = 'Application/Chess/src/bQ.png';
        }
        if(x == 7 && y == 3)
        {
            this.img.src = 'Application/Chess/src/wQ.png';
        }
        this.img.classList.add('chess-piece');
        this.img.classList.add('quenn');
        this.img.id = id;
        const cells = document.querySelectorAll('.chess-cell');
        for(let i=0;i<cells.length;i++){
            const cell_x = cells[i].getAttribute('x');
            const cell_y = cells[i].getAttribute('y');
            if(x==cell_x && y==cell_y){
                cells[i].appendChild(this.img);
            }
        }
    }

    highligth(matrix,cells){
        const queenIndex = Array.from(cells).indexOf(this.img.parentElement);
        let tarray = new Array(7);
        let barray = new Array(7);
        let larray = new Array(7);
        let rarray = new Array(7);
        let tindex = 0;
        let bindex = 0;
        let lindex = 0;
        let rindex = 0;
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
        for(let i=0;i<=7;i++){
            barray[i]=true;
            tarray[i]=true;
            larray[i]=true;
            rarray[i]=true;
        }
        for(let i=queenIndex-1;i>=0;i--){
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
                else{
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
                        else{
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
                        else{
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
        for(let i=queenIndex+1;i<cells.length;i++){
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
                else {
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
                        else if(cells[i].getAttribute('y')==this.y){
                            if(!(barray.includes(false))){
                                cells[i].classList.add('strike');
                            }
                            barray[bindex]=false;
                            bindex++;
                        }
                        else{
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
                        else{
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
        }
    }

    isCheck(matrix,cells){
        const queenIndex = Array.from(cells).indexOf(this.img.parentElement);
        let b=false;
        let tarray = new Array(7);
        let barray = new Array(7);
        let larray = new Array(7);
        let rarray = new Array(7);
        let tindex = 0;
        let bindex = 0;
        let lindex = 0;
        let rindex = 0;
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
        for(let i=0;i<=7;i++){
            barray[i]=true;
            tarray[i]=true;
            larray[i]=true;
            rarray[i]=true;
        }
        for(let i=queenIndex-1;i>=0;i--){
            if(cells[i].children.length<1){
                
            }
            else{
                if(this.id.includes("White")){
                    if(cells[i].children[0].getAttribute('id').includes("Black")){
                        if(cells[i].getAttribute('x')==this.x){
                            if(!(larray.includes(false))){
                                if(cells[i].children[0].getAttribute('id').includes('King')){
                                    b=true;
                                }
                            }
                            larray[lindex]=false;
                            lindex++;
                        }
                        else if(cells[i].getAttribute('y')==this.y){
                            if(!(tarray.includes(false))){
                                if(cells[i].children[0].getAttribute('id').includes('King')){
                                    b=true;
                                }
                            }
                            tarray[tindex]=false;
                            tindex++;
                        }
                        else{
                            for(let j=0;j<7;j++){
                                if(cells[i].getAttribute('x')==tr[0][j] && cells[i].getAttribute('y')==tr[1][j]){
                                    if(!(trarray.includes(false))){
                                        if(cells[i].children[0].getAttribute('id').includes('King')){
                                            b=true;
                                        }
                                    }
                                    trarray[trindex]=false;
                                    trindex++;
                                }
                                else if(cells[i].getAttribute('x')==tl[0][j] && cells[i].getAttribute('y')==tl[1][j]){
                                    if(!(tlarray.includes(false))){
                                        if(cells[i].children[0].getAttribute('id').includes('King')){
                                            b=true;
                                        }
                                    }
                                    tlarray[tlindex]=false;
                                    tlindex++;
                                }
                            }
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
                else if(this.id.includes("Black")){
                    if(cells[i].children[0].getAttribute('id').includes("White")){
                        if(cells[i].getAttribute('x')==this.x){
                            if(!(larray.includes(false))){
                                if(cells[i].children[0].getAttribute('id').includes('King')){
                                    b=true;
                                }
                            }
                            larray[lindex]=false;
                            lindex++;
                        }
                        else if(cells[i].getAttribute('y')==this.y){
                            if(!(tarray.includes(false))){
                                if(cells[i].children[0].getAttribute('id').includes('King')){
                                    b=true;
                                }
                            }
                            tarray[tindex]=false;
                            tindex++;
                        }
                        else{
                            for(let j=0;j<7;j++){
                                if(cells[i].getAttribute('x')==tr[0][j] && cells[i].getAttribute('y')==tr[1][j]){
                                    if(!(trarray.includes(false))){
                                        if(cells[i].children[0].getAttribute('id').includes('King')){
                                            b=true;
                                        }
                                    }
                                    trarray[trindex]=false;
                                    trindex++;
                                }
                                else if(cells[i].getAttribute('x')==tl[0][j] && cells[i].getAttribute('y')==tl[1][j]){
                                    if(!(tlarray.includes(false))){
                                        if(cells[i].children[0].getAttribute('id').includes('King')){
                                            b=true;
                                        }
                                    }
                                    tlarray[tlindex]=false;
                                    tlindex++;
                                }
                            }
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
        for(let i=queenIndex+1;i<cells.length;i++){
            if(cells[i].children.length<1){
                
            }
            else{
                if(this.id.includes("White")){
                    if(cells[i].children[0].getAttribute('id').includes("Black")){
                        if(cells[i].getAttribute('x')==this.x){
                            if(!(rarray.includes(false))){
                                if(cells[i].children[0].getAttribute('id').includes('King')){
                                    b=true;
                                }
                            }
                            rarray[rindex]=false;
                            rindex++;
                        }
                        else if(cells[i].getAttribute('y')==this.y){
                            if(!(barray.includes(false))){
                                if(cells[i].children[0].getAttribute('id').includes('King')){
                                    b=true;
                                }
                            }
                            barray[bindex]=false;
                            bindex++;
                        }
                        else{
                            for(let j=0;j<7;j++){
                                if(cells[i].getAttribute('x')==br[0][j] && cells[i].getAttribute('y')==br[1][j]){
                                    if(!(brarray.includes(false))){
                                        if(cells[i].children[0].getAttribute('id').includes('King')){
                                            b=true;
                                        }
                                    }
                                    brarray[brindex]=false;
                                    brindex++;
                                }
                                else if(cells[i].getAttribute('x')==bl[0][j] && cells[i].getAttribute('y')==bl[1][j]){
                                    if(!(blarray.includes(false))){
                                        if(cells[i].children[0].getAttribute('id').includes('King')){
                                            b=true;
                                        }
                                    }
                                    blarray[blindex]=false;
                                    blindex++;
                                }
                            }
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
                else if(this.id.includes("Black")){
                    if(cells[i].children[0].getAttribute('id').includes("White")){
                        if(cells[i].getAttribute('x')==this.x){
                            if(!(rarray.includes(false))){
                                if(cells[i].children[0].getAttribute('id').includes('King')){
                                    b=true;
                                }
                            }
                            rarray[rindex]=false;
                            rindex++;
                        }
                        else if(cells[i].getAttribute('y')==this.y){
                            if(!(barray.includes(false))){
                                if(cells[i].children[0].getAttribute('id').includes('King')){
                                    b=true;
                                }
                            }
                            barray[bindex]=false;
                            bindex++;
                        }
                        else{
                            for(let j=0;j<7;j++){
                                if(cells[i].getAttribute('x')==br[0][j] && cells[i].getAttribute('y')==br[1][j]){
                                    if(!(brarray.includes(false))){
                                        if(cells[i].children[0].getAttribute('id').includes('King')){
                                            b=true;
                                        }
                                    }
                                    brarray[brindex]=false;
                                    brindex++;
                                }
                                else if(cells[i].getAttribute('x')==bl[0][j] && cells[i].getAttribute('y')==bl[1][j]){
                                    if(!(blarray.includes(false))){
                                        if(cells[i].children[0].getAttribute('id').includes('King')){
                                            b=true;
                                        }
                                    }
                                    blarray[blindex]=false;
                                    blindex++;
                                }
                            }
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
        }
    }
}