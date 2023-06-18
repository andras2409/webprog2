import HangmanCanvas from "../Hangman/HangmanCanvas.js";

export default class HangmanGame{
    constructor()
    {
        this.Game();
    }

    Game(){
        const categories = document.querySelectorAll('.category');
        const hangmanContainer = document.querySelector('#hangman-container');
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
        let wrongChoices = 0;

        console.log('initGame started');
        initGame();

        function initGame(){
            categories.forEach(category => category.addEventListener('click', categoryClicked));
        }

        function categoryClicked(){
            chosenCategory = this.getAttribute('index');
            categoryChosen = true;
            this.setAttribute('chosen',true);
            
            if(categoryChosen === true){
                displayLetters();
                displayLines();
            }

            const statusText = document.querySelector('h3');
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
            console.log(chosenWordArray);

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

            console.log(clickedLetters);
            checkIfCorrect(this.textContent);
        }
        
        function checkIfCorrect(letter){
            const spans = document.querySelectorAll('.dash');
            const counter = 0;
            for(let i = 0; i < chosenWordArray.length; i++){
                if(letter == chosenWordArray[i]){
                    spans[i].textContent = letter;
                }
            }
            updateCanvas(wrongChoices);
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
    }
}