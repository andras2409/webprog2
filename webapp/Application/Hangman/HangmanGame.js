import HangmanCanvas from "../Hangman/HangmanCanvas.js";

export default class HangmanGame{
    constructor()
    {
        this.Game();
    }

    Game(){
        const categories = document.querySelectorAll('.category');
        const categoryContainer = document.querySelector('#option-container');
        const hangmanContainer = document.querySelector('#hangman-container');
        const statusText = document.querySelector('h3');
        const canvas = new HangmanCanvas();

        let options = {
            Animals: [
                "Dog", 
                "Cat", 
                "Tiger", 
                "Panda", 
                "Bear", 
                "Zebra"
                ],
            Fruits: [
                    "Apple",
                    "Plum",
                    "Peach",
                    "Strawberry",
                    "Melon",
                    "Tomato"
                    ],
            Cars: [
                "Suzuki",
                "Audi",
                "Honda",
                "Mercedes",
                "Lexus",
                "Pontiac"
            ]
        };

        let chosenCategory = "";
        let categoryChosen = false;
        let chosenWord = "";
        let chosenWordArray = [];
        let clickedLetters = [];
        let maxError = 6;
        let errornumber = 0;
        let correct = true;
        let win = [""];
        let youWon = true;

        console.log('initGame started');
        initGame();

        function initGame(){
            categories.forEach(category => category.addEventListener('click', categoryClicked));
        }

        function categoryClicked(){
            chosenCategory = this.getAttribute('index');
            categoryChosen = true;
            this.setAttribute('chosen', true);
            
            if(categoryChosen == true){
                displayLetters();
                displayLines();
            }
            statusText.remove();

            disableButtons();
            chooseRandomWord(chosenCategory);
            canvas.initCanvas();
            canvas.gallows();
        }

        function chooseRandomWord(chosenCategory) {
            switch(parseInt(chosenCategory)){
                case 1: 
                    chosenWord = options.Animals[Math.floor(Math.random() * options.Animals.length)];
                    break;
                case 2: 
                    chosenWord = options.Fruits[Math.floor(Math.random() * options.Animals.length)];
                    break;
                case 3: 
                    chosenWord = options.Cars[Math.floor(Math.random() * options.Animals.length)];
                    break;
            }
            chosenWordArray = chosenWord.toUpperCase().split("");
            win.length = chosenWordArray.length;
            displayDashes();
        }

        function displayDashes(){
            const solutionContainer = document.querySelector('#solution-container');
            for(let i = 0; i < chosenWordArray.length; i++){
                solutionContainer.appendChild(document.createElement('span'));
                solutionContainer.lastChild.setAttribute('index', i);
                solutionContainer.lastChild.classList.add('dash');
                solutionContainer.lastChild.textContent = '_';
            }
        }

        function disableButtons(){
            const buttons = document.querySelectorAll('.category');
            buttons.forEach(button => {
                button.removeEventListener('click', categoryClicked);
                button.classList.add('.disabled');
                button.disabled = true;
            });
        }

        function displayLetters(){
            const letterContainer = document.createElement('div');
            hangmanContainer.appendChild(letterContainer);
            letterContainer.id = 'letter-container';
            for(let i = 65; i < 91; i++){
                var letter = String.fromCharCode(i);
                hangmanContainer.lastChild.appendChild(document.createElement('button'));
                hangmanContainer.lastChild.lastChild.class = 'letter';
                hangmanContainer.lastChild.lastChild.textContent = letter;
                hangmanContainer.lastChild.lastChild.addEventListener('click', letterClicked);
            }
        }

        function letterClicked(){
            this.classList.add('.disabled');
            this.disabled = true;
            clickedLetters.push(this.textContent);
            checkIfCorrect(this.textContent);
        }
        
        function checkIfCorrect(letter){
            const spans = document.querySelectorAll('.dash');
            correct = false;
            for(let i = 0; i < chosenWordArray.length; i++){
                if(letter == chosenWordArray[i]){
                    spans[i].textContent = letter;
                    win[i] = letter;
                    console.log(win);
                    correct = true;   
                }
            }
            if(correct){
                checkWin();
            }
            else{
                errornumber++;
                updateCanvas(errornumber);
                if(errornumber == maxError){
                    gameOver();
                }
            }
        }

        function checkWin(){
            console.log('checking win');
            for(let i = 0; i < chosenWordArray.length; i++){
                if(win[i] != chosenWordArray[i]){
                    youWon = false;
                }
            }
            if(youWon){
                victory();
            } 
            else{
                console.log('you did not win');
            }
            youWon = true;
        }

        function victory(){
            categoryContainer.remove();
            const letters = document.querySelector('#letter-container');
            letters.remove();
            const dashes = document.querySelector('#solution-container');
            dashes.remove();
            const endCenvas = document.querySelector('#canvas');
            endCenvas.remove();

            hangmanContainer.appendChild(document.createElement('div'));
            hangmanContainer.lastChild.id = 'endDiv';
            hangmanContainer.lastChild.appendChild(document.createElement('div'));
            hangmanContainer.lastChild.lastChild.textContent = 'Victory!';
            hangmanContainer.lastChild.lastChild.id = 'victory-div';
            hangmanContainer.lastChild.appendChild(document.createElement('div'));
            hangmanContainer.lastChild.lastChild.id = 'chosenWord-div';
            hangmanContainer.lastChild.lastChild.textContent = `Your word was ${chosenWord.toUpperCase()}`;

            hangmanRestartBtn();
        }

        function gameOver(){
            categoryContainer.remove();
            const letters = document.querySelector('#letter-container');
            letters.remove();
            const dashes = document.querySelector('#solution-container');
            dashes.remove();
            const endCenvas = document.querySelector('#canvas');
            endCenvas.remove();

            hangmanContainer.appendChild(document.createElement('div'));
            hangmanContainer.lastChild.id = 'endDiv';
            hangmanContainer.lastChild.appendChild(document.createElement('div'));
            hangmanContainer.lastChild.lastChild.textContent = 'Game Over!';
            hangmanContainer.lastChild.lastChild.id = 'game-over-div';
            hangmanContainer.lastChild.appendChild(document.createElement('div'));
            hangmanContainer.lastChild.lastChild.id = 'chosenWord-div';
            hangmanContainer.lastChild.lastChild.textContent = `Your word was ${chosenWord.toUpperCase()}`;

            hangmanRestartBtn();
        }

        function hangmanRestartBtn(){
            const hangmanRestartBtn = document.createElement('button');
            hangmanContainer.lastChild.appendChild(hangmanRestartBtn);
            hangmanContainer.lastChild.lastChild.id = 'hangman-restart-btn';
            hangmanContainer.lastChild.lastChild.textContent = 'RESTART';
            hangmanRestartBtn.addEventListener('click', restartHangman);
        }

        function updateCanvas(wrongChoices){
            switch(wrongChoices){
                case 1: canvas.head();
                    break;
                case 2: canvas.body();
                    break;
                case 3: canvas.leftArm();
                    break;
                case 4: canvas.rightArm();
                    break;
                case 5: canvas.leftLeg();
                    break;
                case 6: canvas.rightLeg();
                    break;
            }
        }

        function displayLines(){
            const solutionContainer = document.createElement('div');
            hangmanContainer.appendChild(solutionContainer);
            solutionContainer.id = 'solution-container';
        }

        function restartHangman(){
            chosenCategory = "";
            categoryChosen = false;
            chosenWord = "";
            chosenWordArray = [];
            clickedLetters = [];
            errornumber = 0;
            correct = false;

            const gameOverDiv = document.querySelector('#endDiv');
            gameOverDiv.remove();
            
            hangmanContainer.appendChild(categoryContainer);
            categories.forEach(category => {
                category.removeAttribute('disabled');
                category.setAttribute('chosen', false);
                category.addEventListener('click', categoryClicked);
            });
        }
    }
}