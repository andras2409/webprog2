export default class HangmanGame{
    constructor()
    {
        this.Game();
    }

    Game(){
        const categories = document.querySelectorAll('.category');
        const hangmanContainer = document.querySelector('#hangman-container');

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

        console.log('initGame started');
        initGame();

        function initGame(){
            categories.forEach(category => category.addEventListener('click', categoryClicked));
        }

        function categoryClicked(){
            console.log('category clicked');
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
        }

        function chooseRandomWord(chosenCategory) {
            console.log('selecting random word');
            
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
        }

        function displayLines(){
            const solutionContainer = document.createElement('div');
            hangmanContainer.appendChild(solutionContainer);
            solutionContainer.id = 'solution-container';
        }
    }
}