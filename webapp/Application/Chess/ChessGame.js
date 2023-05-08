import ChessBoard from "./ChessBoard.js";

export default class ChessGame{
    
    /**
     * @type {ChessBoard}
     */
    board;
    
    constructor(board){
        this.board=board;
        this.initMatrix();
    }

    initMatrix(){
        this.matrix = [["bR","bk","bB","bQ","bK","bB","bk","bR"],
                       ["bP","bP","bP","bP","bP","bP","bP","bP"],
                       ["0", "0", "0", "0", "0", "0", "0", "0"],
                       ["0", "0", "0", "0", "0", "0", "0", "0"],
                       ["0", "0", "0", "0", "0", "0", "0", "0"],
                       ["0", "0", "0", "0", "0", "0", "0", "0"],
                       ["wP","wP","wP","wP","wP","wP","wP","wP"],
                       ["wR","wk","wB","wQ","wK","wB","wk","wR"]];

        for(let i=0;i<8;i++){
            console.log(this.matrix[i]);
        }
    }

    
}