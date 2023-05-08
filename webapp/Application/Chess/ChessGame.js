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
        this.matrix = [["BR1", "BK1", "BB1", "BQ1", "BKi", "BB2", "BK2", "BR2"],
                       ["BP1", "BP2", "BP3", "BP4", "BP5", "BP6", "BP7", "BP8"],
                       [" 0 ", " 0 ", " 0 ", " 0 ", " 0 ", " 0 ", " 0 ", " 0 "],
                       [" 0 ", " 0 ", " 0 ", " 0 ", " 0 ", " 0 ", " 0 ", " 0 "],
                       [" 0 ", " 0 ", " 0 ", " 0 ", " 0 ", " 0 ", " 0 ", " 0 "],
                       [" 0 ", " 0 ", " 0 ", " 0 ", " 0 ", " 0 ", " 0 ", " 0 "],
                       ["WP1", "WP2", "WP3", "WP4", "WP5", "WP6", "WP7", "WP8"],
                       ["WR1", "WK1", "WB1", "WQ1", "WKi", "WB2", "WK2", "WR2"]];

        for(let i=0;i<8;i++){
            console.log(this.matrix[i]);
        }
    }

    
}