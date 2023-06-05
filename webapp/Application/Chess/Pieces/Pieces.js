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