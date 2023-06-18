import Application from "../Application.js";
import HangmanGame from "../Hangman/HangmanGame.js";

export default class Chess extends Application{

    init(){
        super.init();
        this.initDOM();
        this.game = new HangmanGame();
    }

    initDOM(){
        const gameContainer = document.createElement('div');
        gameContainer.id = 'hangman-container';
        this.app.appendChild(gameContainer);

        this.initCategories();
    }

    initCategories(){
        const categories = document.createElement('div');
        this.app.lastChild.appendChild(categories);
        categories.id = 'option-container';

        categories.appendChild(document.createElement('h3'));
        categories.lastChild.textContent = 'Choose a category';
        categories.lastChild.classList.add('chosen-category');

        categories.appendChild(document.createElement('div'));
        categories.lastChild.appendChild(document.createElement('button'));
        categories.lastChild.lastChild.textContent = 'Animals';
        categories.lastChild.lastChild.classList.add('category');
        categories.lastChild.lastChild.setAttribute('index',1);
        categories.lastChild.appendChild(document.createElement('button'));
        categories.lastChild.lastChild.textContent = 'Fruits';
        categories.lastChild.lastChild.classList.add('category');
        categories.lastChild.lastChild.setAttribute('index',2);
        categories.lastChild.appendChild(document.createElement('button'));
        categories.lastChild.lastChild.textContent = 'Cars';
        categories.lastChild.lastChild.classList.add('category');
        categories.lastChild.lastChild.setAttribute('index',3);
    }
}