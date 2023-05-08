import Bishop from "./Pieces/Bishop.js";
import King from "./Pieces/King.js";
import Knight from "./Pieces/Knight.js";
import Pawn from "./Pieces/Pawn.js";
import Quenn from "./Pieces/Queen.js";
import Rook from "./Pieces/Rook.js";

export default class ChessBoard{

    constructor(){
        this.cells = document.querySelectorAll(".chess-cell");
        this.cells.forEach(cell => cell.addEventListener('click', this.cellClicked));
        this.BlackRook1 = new Rook(0,0,'BlackRook1');
        this.BlackRook2 = new Rook(0,7,'BlackRook2');
        this.BlackKnight1 = new Knight(0,1,'BlackKnight1');
        this.BlackKnight2 = new Knight(0,6,'BlackKnight2');
        this.BlackBishop1 = new Bishop(0,2,'BlackBishop1');
        this.BlackBishop2 = new Bishop(0,5,'BlackBishop2');
        this.BlackQueen = new Quenn(0,3,'BlackQueen');
        this.BlackKing = new King(0,4,'BlackKing');
        this.BlackPawn1 = new Pawn(1,0,`BlackPawn1`);
        this.BlackPawn2 = new Pawn(1,1,`BlackPawn2`);
        this.BlackPawn3 = new Pawn(1,2,`BlackPawn3`);
        this.BlackPawn4 = new Pawn(1,3,`BlackPawn4`);
        this.BlackPawn5 = new Pawn(1,4,`BlackPawn5`);
        this.BlackPawn6 = new Pawn(1,5,`BlackPawn6`);
        this.BlackPawn7 = new Pawn(1,6,`BlackPawn7`);
        this.BlackPawn8 = new Pawn(1,7,`BlackPawn8`);
        this.WhiteRook1 = new Rook(7,0,'WhiteRook1');
        this.WhiteRook2 = new Rook(7,7,'WhiteRook2');
        this.WhiteKnight1 = new Knight(7,1,'WhiteKnight1');
        this.WhiteKnight2 = new Knight(7,6,'WhiteKnight2');
        this.WhiteBishop1 = new Bishop(7,2,'WhiteBishop1');
        this.WhiteBishop2 = new Bishop(7,5,'WhiteBishop2');
        this.WhiteQueen = new Quenn(7,3,'WhiteQueen');
        this.WhiteKing = new King(7,4,'WhiteKing');
        this.WhitePawn1 = new Pawn(6,0,`WhitePawn1`);
        this.WhitePawn2 = new Pawn(6,1,`WhitePawn2`);
        this.WhitePawn3 = new Pawn(6,2,`WhitePawn3`);
        this.WhitePawn4 = new Pawn(6,3,`WhitePawn4`);
        this.WhitePawn5 = new Pawn(6,4,`WhitePawn5`);
        this.WhitePawn6 = new Pawn(6,5,`WhitePawn6`);
        this.WhitePawn7 = new Pawn(6,6,`WhitePawn7`);
        this.WhitePawn8 = new Pawn(6,7,`WhitePawn8`);
    }
    
    cellClicked() {
        const cells = document.querySelectorAll(".chess-cell");
        const x = this.getAttribute("x");
        const y = this.getAttribute("y");
        console.log(`x: ${x}, y: ${y}`);
        if((!this.classList.contains('selected')) && (this.children.length != 0)){
            cells.forEach(cell => cell.classList.remove('selected'));
            this.classList.add('selected')
            console.log(`selected ${this.children[0].id}`)
        }else if(this.classList.contains('selected')){
            this.classList.remove('selected');
        }else{
            cells.forEach(cell => cell.classList.remove('selected'));
        }
    }
    
}