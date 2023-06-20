export default class Pieces{
    constructor(x,y,id){
        this.initPiece(x,y,id);
    }

    initPiece(x,y,id){
        console.log(`Init piece ${x}, ${y}, ${id}`);
    }

    highligth(matrix,cells){
        console.log(matrix);
        console.log(cells);
        
    }

    move(x,y,cells,matrix){
        x=Number(x);
        y=Number(y);
        console.log(`Move ${this.id} from (${this.x},${this.y}) to (${x}, ${y})`);
        let dcell;
        cells.forEach(cell => {
            if(x==cell.getAttribute('x') && y==cell.getAttribute('y')){
                dcell=cell;
            }
        });
        cells.forEach(cell => {
            if(this.x==cell.getAttribute('x') && this.y==cell.getAttribute('y')){
                
                this.img.parentElement.removeChild(this.img.parentElement.children[0]);
                dcell.appendChild(this.img);
                let str = `${this.x}${this.y}`;
                matrix[this.x][this.y]=str;
                this.x=x;
                this.y=y;
                matrix[x][y]=this;
            }
        });
        return matrix;
    }

    strike(x,y,cells,matrix){
        const blackremoved=document.querySelector('#black-removed');
        const whiteremoved=document.querySelector('#white-removed');
        let b;
        let w;
        if(blackremoved.children[0].children.length<8){
            b=0;
        }
        else{
            b=1;
        }
        if(whiteremoved.children[1].children.length<8){
            w=1;
        }
        else{
            w=0;
        }
        x=Number(x);
        y=Number(y);
        let dcell;
        cells.forEach(cell => {
            if(x==cell.getAttribute('x') && y==cell.getAttribute('y')){
                dcell=cell;
            }
        });
        const rpiece = dcell.lastChild;
        console.log(`Strike ${rpiece.id} on (${x},${y}) with ${this.id} from (${this.x},${this.y})`);
        rpiece.classList.add('removed');
        cells.forEach(cell => {
            if(this.x==cell.getAttribute('x') && this.y==cell.getAttribute('y')){
                this.img.parentElement.removeChild(this.img.parentElement.children[0]);
                if(rpiece.id.includes('White')){
                    whiteremoved.children[w].appendChild(rpiece);
                }
                else if(rpiece.id.includes('Black')){
                    blackremoved.children[b].appendChild(rpiece);
                }
                dcell.appendChild(this.img);
                let str = `${this.x}${this.y}`;
                matrix[this.x][this.y]=str;
                this.x=x;
                this.y=y;
                matrix[x][y]=this;
            }
        });
        return matrix;
    }
}