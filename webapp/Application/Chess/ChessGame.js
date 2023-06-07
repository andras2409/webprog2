import Bishop from "./Pieces/Bishop.js";
import King from "./Pieces/King.js";
import Knight from "./Pieces/Knight.js";
import Pawn from "./Pieces/Pawn.js";
import Pieces from "./Pieces/Pieces.js";
import Queen from "./Pieces/Queen.js";
import Rook from "./Pieces/Rook.js";
import Placeholder from "./Pieces/Placeholder.js";

export default class ChessGame{
    
    

    constructor(){
        this.selected = new Placeholder();
        this.initPieces();
        this.initMatrix();
        this.cells = document.querySelectorAll(".chess-cell");
        this.matrix.forEach(cell => {
            cell.forEach(piece => {
                if(piece instanceof Pieces){
                    piece.img.addEventListener('click',this.pieceClicked.bind(this),true);
                }

                    
                
            })
        });
        this.cells.forEach(ccell => {
                        
            ccell.addEventListener('click',this.cellClicked.bind(this),true);
        
    })
    }

    initMatrix(){
        this.matrix = [[this.BlackRook1,this.BlackKnight1,this.BlackBishop1,
                        this.BlackQueen,this.BlackKing,this.BlackBishop2,
                        this.BlackKnight2,this.BlackRook2],
                       [this.BlackPawn1,this.BlackPawn2,this.BlackPawn3,
                        this.BlackPawn4,this.BlackPawn5,this.BlackPawn6,
                        this.BlackPawn7,this.BlackPawn8],
                       ["20", "21", "22", "23", "24", "25", "26", "27"],
                       ["30", "31", "32", "33", "34", "35", "36", "37"],
                       ["40", "41", "42", "43", "44", "45", "46", "47"],
                       ["50", "51", "52", "53", "54", "55", "56", "57"],
                       [this.WhitePawn1,this.WhitePawn2,this.WhitePawn3,
                        this.WhitePawn4,this.WhitePawn5,this.WhitePawn6,
                        this.WhitePawn7,this.WhitePawn8],
                       [this.WhiteRook1,this.WhiteKnight1,this.WhiteBishop1,
                        this.WhiteQueen,this.WhiteKing,this.WhiteBishop2,
                        this.WhiteKnight2,this.WhiteRook2]];

        for(let i=0;i<8;i++){
            console.log(this.matrix[i]);
        }
    }

    pieceClicked(evt) {
        console.log(evt.currentTarget);
        console.log(this);
        const cells = document.querySelectorAll(".chess-cell");
        const x = evt.currentTarget.parentElement.getAttribute("x");
        const y = evt.currentTarget.parentElement.getAttribute("y");
        if(this.selected instanceof Placeholder){
        if((!evt.currentTarget.parentElement.classList.contains('selected')) && (evt.currentTarget.parentElement.children.length != 0)){
            evt.currentTarget.parentElement.classList.add('selected')
            this.selectedID=evt.currentTarget.id;
            this.getSelected(this.selectedID);
            console.log(`selected ${this.selected}`);
            console.log()
        }
        else if(evt.currentTarget.parentElement.classList.contains('selected')){
            this.selectedID = "None";
            this.getSelected(this.selectedID);
            console.log(`selected ${this.selected}`);
        }
        
        this.highligth();
        }
        else{
            if((!evt.currentTarget.parentElement.classList.contains('selected')) && (evt.currentTarget.parentElement.children.length != 0)){
                evt.currentTarget.parentElement.classList.add('selected')
                this.selectedID=evt.currentTarget.id;
                this.getSelected(this.selectedID);
                console.log(`selected ${this.selected}`);
                console.log()
            }
            else if(evt.currentTarget.parentElement.classList.contains('selected')){
                this.selectedID = "None";
                this.getSelected(this.selectedID);
                console.log(`selected ${this.selected}`);
            }
            
            this.highligth();
        }
        console.log(`x: ${x}, y: ${y}`);
        
    }

    cellClicked(evt) {
        console.log(evt.currentTarget);
        console.log(this);
        const x = evt.currentTarget.getAttribute("x");
        const y = evt.currentTarget.getAttribute("y");
        
        
        if((this.selected instanceof Pieces) && !(this.selected instanceof Placeholder)){
            if(evt.currentTarget.classList.contains('highligthed')){
                this.matrix=this.selected.move(evt.currentTarget.getAttribute('x'),evt.currentTarget.getAttribute('y'),this.cells,this.matrix);
                console.log(this.matrix);
            }
        }
        this.cells.forEach(cell => cell.classList.remove('selected'));
        this.cells.forEach(cell => cell.classList.remove('highligthed'));
        this.cells.forEach(cell => cell.classList.remove('strike'));
        this.selectedID = "None";
        this.getSelected("None");
        console.log(`selected ${this.selected}`);
        console.log(`x: ${x}, y: ${y}`);
        
    }

    highligth(){
        if(this.selected instanceof Placeholder){
            this.cells.forEach(cell => cell.classList.remove('highligthed'));
        }
        else{
            this.selected.highligth(this.matrix,this.cells);
        }
        
        
    }

















    initPieces(){
        this.Placeholder = new Placeholder();
        this.BlackRook1 = new Rook(0,0,'BlackRook1');
        this.BlackRook2 = new Rook(0,7,'BlackRook2');
        this.BlackKnight1 = new Knight(0,1,'BlackKnight1');
        this.BlackKnight2 = new Knight(0,6,'BlackKnight2');
        this.BlackBishop1 = new Bishop(0,2,'BlackBishop1');
        this.BlackBishop2 = new Bishop(0,5,'BlackBishop2');
        this.BlackQueen = new Queen(0,3,'BlackQueen');
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
        this.WhiteQueen = new Queen(7,3,'WhiteQueen');
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

    getSelected(selectedID){
        console.log(selectedID);
        switch(selectedID){
            case "None": this.selected=this.Placeholder;break;
            
            case "BlackRook1":this.selected=this.BlackRook1;break;
            case "BlackRook2":this.selected=this.BlackRook2;break;
            case "BlackKnight1":this.selected=this.BlackKnight1;break;
            case "BlackKnight2":this.selected=this.BlackKnight2;break;
            case "BlackBishop1":this.selected=this.BlackBishop1;break;
            case "BlackBishop2":this.selected=this.BlackBishop2;break;
            case "BlackQueen":this.selected=this.BlackQueen;break;
            case "BlackKing":this.selected=this.BlackKing;break;

            case "BlackPawn1":this.selected=this.BlackPawn1;break;
            case "BlackPawn2":this.selected=this.BlackPawn2;break;
            case "BlackPawn3":this.selected=this.BlackPawn3;break;
            case "BlackPawn4":this.selected=this.BlackPawn4;break;
            case "BlackPawn5":this.selected=this.BlackPawn5;break;
            case "BlackPawn6":this.selected=this.BlackPawn6;break;
            case "BlackPawn7":this.selected=this.BlackPawn7;break;
            case "BlackPawn8":this.selected=this.BlackPawn8;break;



            case "WhiteRook1":this.selected=this.WhiteRook1;break;
            case "WhiteRook2":this.selected=this.WhiteRook2;break;
            case "WhiteKnight1":this.selected=this.WhiteKnight1;break;
            case "WhiteKnight2":this.selected=this.WhiteKnight2;break;
            case "WhiteBishop1":this.selected=this.WhiteBishop1;break;
            case "WhiteBishop2":this.selected=this.WhiteBishop2;break;
            case "WhiteQueen":this.selected=this.WhiteQueen;break;
            case "WhiteKing":this.selected=this.WhiteKing;break;

            case "WhitePawn1":this.selected=this.WhitePawn1;break;
            case "WhitePawn2":this.selected=this.WhitePawn2;break;
            case "WhitePawn3":this.selected=this.WhitePawn3;break;
            case "WhitePawn4":this.selected=this.WhitePawn4;break;
            case "WhitePawn5":this.selected=this.WhitePawn5;break;
            case "WhitePawn6":this.selected=this.WhitePawn6;break;
            case "WhitePawn7":this.selected=this.WhitePawn7;break;
            case "WhitePawn8":this.selected=this.WhitePawn8;break;
        }
    }
}