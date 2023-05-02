export default class ChessBoard{

    constructor(){
        this.cells = document.querySelectorAll(".chess-cell");
        this.cells.forEach(cell => cell.addEventListener('click', this.cellClicked));
    }
    
    cellClicked() {
        const cells = document.querySelectorAll(".chess-cell");
        const x = this.getAttribute("X");
        const y = this.getAttribute("Y");
        console.log(`x: ${x}, Y: ${y}`);
        if(!this.classList.contains('selected')){
            cells.forEach(cell => cell.classList.remove('selected'));
            this.classList.add('selected')
        }else{
            this.classList.remove('selected');
        }
    }
    
}