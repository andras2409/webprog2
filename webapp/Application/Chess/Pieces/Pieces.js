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
        console.log(typeof x);
        console.log(typeof y);
        x=Number(x);
        y=Number(y);
        console.log(typeof x);
        console.log(typeof y);
        console.log(`Move ${this.id} to ${x}, ${y}`);
        console.log(this.img.parentElement.children[0]);
        let dcell;
        cells.forEach(cell => {
            if(x==cell.getAttribute('x') && y==cell.getAttribute('y')){
                dcell=cell;
            }
        });
        cells.forEach(cell => {
            console.log(cell.getAttribute('x'));
            if(this.x==cell.getAttribute('x') && this.y==cell.getAttribute('y')){
                
                this.img.parentElement.removeChild(this.img.parentElement.children[0]);
                dcell.appendChild(this.img);
                console.log(typeof this.y)
                let str = `${this.x}${this.y}`;
                console.log(typeof this.y)
                matrix[this.x][this.y]=str;
                console.log(typeof this.y)
                this.x=x;
                this.y=y;
                console.log(typeof this.y)
                matrix[x][y]=this;
            }
        });
        return matrix;
    }
}