export default class TicTacToeGame{
    constructor()
    {
        this.Game();
    }

    Game()
    {
        const cells = document.querySelectorAll('.cell');
        const restartButton = document.querySelector('#restart-btn');
        const statusText = document.querySelector('#statusText');
        const winConditions = [
            [0, 1, 2],
            [3, 4, 5],
            [6, 7, 8],
            [0, 3, 6],
            [1, 4, 7],
            [2, 5, 8],
            [0, 4, 8],
            [2, 4, 6]
        ];
        let options = ["", "", "", "", "", "", "", "", ""];
        let currentPlayer = "X";
        let running = false;

        console.log('Game started');

        initGame();

        function initGame()
        {
            console.log('initGame started');
            cells.forEach(cell => cell.addEventListener('click', cellClicked));
            restartButton.addEventListener('click', restartGame);
            statusText.textContent = `${currentPlayer}'s turn`;
            running = true;
        }

        function cellClicked() {
            console.log('Cell clicked');
        
            const index = this.getAttribute('index');
        
            if (options[index] != "" || !running) {
                return;
            }
        
            updateCell(this, index);
            checkWinner();
        
            if (currentPlayer == "X") {
                changePlayer();
            } else {
                setTimeout(chooseRandomCell(), 999);
            }
        }

        function chooseRandomCell() {
            console.log('Choosing random cell');
            const emptyCells = [];
            cells.forEach((cell, index) => {
                if (options[index] === "") {
                    emptyCells.push(index);
                }
            });
        
            if (emptyCells.length > 0) {
                const randomIndex = Math.floor(Math.random() * emptyCells.length);
                const randomCellIndex = emptyCells[randomIndex];
                const randomCell = cells[randomCellIndex];
                updateCell(randomCell, randomCellIndex);
                checkWinner();
            }
        }

        function updateCell(cell, index)
        {
            console.log('Update cell');
            options[index] = currentPlayer;
            cell.textContent = currentPlayer;
        }

        function changePlayer()
        {
            console.log('Change player');
            currentPlayer = (currentPlayer == "X") ? "O" : "X";
        }

        function checkWinner()
        {
            let roundWon = false;

            for(let i = 0; i < winConditions.length; i++)
            {
                const condition = winConditions[i];
                const cellA = options[condition[0]];
                const cellB = options[condition[1]];
                const cellC = options[condition[2]];

                if(cellA == "" || cellB == "" || cellC == ""){
                    continue;
                }
                if(cellA == cellB && cellB == cellC){
                    roundWon = true;
                    break;
                }
            }

            if(roundWon == true){
                statusText.textContent = `${currentPlayer} wins!`;
                running = false;
            }
            else if(!options.includes("")){
                statusText.textContent = `Draw!`;
                running = false;
            }
            else{
                changePlayer();
            }
        }

        function restartGame(){
            currentPlayer = "X";
            options = ["", "", "", "", "", "", "", "", ""];
            statusText.textContent = `${currentPlayer}'s turn`;
            cells.forEach(cell => cell.textContent = "");
            running = true;
        }
    }
}