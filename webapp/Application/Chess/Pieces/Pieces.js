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

    move(x,y){
        console.log(`Move piece to ${x}, ${y}`)
    }
}