import Application from "../Application.js";

export default class Chess extends Application{

    init(){
        this.initDOM();
        this.game = new HangmanGame();
    }

    initDOM(){
        const gameContainer = document.createElement('div');
        gameContainer.id = 'hangman-container';
        this.app.appendChild(gameContainer);

        gameContainer.appendChild(document.createElement('div'));
        gameContainer.lastChild.id = 'option-container';

        gameContainer.lastChild.appendChild(document.createElement('h3'));
        gameContainer.lastChild.lastChild.textContent = 'Choose a category';

        gameContainer.lastChild.appendChild(document.createElement('div'));

        gameContainer.lastChild.lastChild.appendChild(document.createElement('button'));
        gameContainer.lastChild.lastChild.lastChild.textContent = 'Animals';
        gameContainer.lastChild.lastChild.appendChild(document.createElement('button'));
        gameContainer.lastChild.lastChild.lastChild.textContent = 'Fruits';
        gameContainer.lastChild.lastChild.appendChild(document.createElement('button'));
        gameContainer.lastChild.lastChild.lastChild.textContent = 'Cars';

        gameContainer.appendChild(document.createElement('div'));
        gameContainer.lastChild.id = 'letter-container';

        for(let i = 65; i < 91; i++){
            gameContainer.lastChild.appendChild(document.createElement('button'));
            gameContainer.lastChild.lastChild.classList.add("letter");
            gameContainer.lastChild.lastChild.textContent = String.fromCharCode(i);
        }

        gameContainer.appendChild(document.createElement('div'));
        gameContainer.lastChild.id = 'user-input-section';
        
        gameContainer.appendChild(document.createElement('canvas'));
        gameContainer.lastChild.id = 'canvas';

        this.canvas = new Canvas();
        
         gameContainer.appendChild(document.createElement('div'));
        gameContainer.lastChild.id = 'new-game-container';
        gameContainer.lastChild.appendChild(document.createElement('div'));
        gameContainer.lastChild.lastChild.id = 'result-text';
        gameContainer.lastChild.appendChild(document.createElement('button'));
        gameContainer.lastChild.lastChild.textContent = 'Új játék';

        winCount = 0;
        count = 0;

        let { initialDrawing } = canvasCreator();
        initialDrawing();
    }
}

class Canvas{
    constructor(){
        this.initCanvas();
    }

    initCanvas(){
        console.log('initCanvas started');
    }
}
