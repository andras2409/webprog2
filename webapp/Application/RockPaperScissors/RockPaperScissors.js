import Application from "../Application.js";

export default class RockPaperScissors extends Application {
    constructor(app) {
        super(app);
        this.playerWins = 0;
        this.computerWins = 0;
        this.initGame();
    }

    initGame() {
        const choices = ["Rock", "Paper", "Scissors"];
        const rpsdiv = document.createElement('div');
        rpsdiv.id = 'rps-div';

        this.textdiv = document.createElement('div');
        this.textdiv.id = 'rps-text';
        const btndiv = document.createElement('div');
        btndiv.id = 'rps-btn';
        rpsdiv.appendChild(this.textdiv);
        rpsdiv.appendChild(btndiv);
        this.app.appendChild(rpsdiv);
        this.textdiv.innerHTML = 'Choose one:';

        for (let i = 0; i < 3; i++) {
            const button = document.createElement("button");
            button.id = choices[i];
            button.textContent = choices[i];
            btndiv.appendChild(button);
            button.addEventListener("click", this.playGame.bind(this));
        }
    }

    playGame(evt) {
        const playerChoice = evt.currentTarget.id;
        const choices = ["Rock", "Paper", "Scissors"];
        const computerChoice = choices[Math.floor(Math.random() * choices.length)];
        const result = this.determineWinner(playerChoice, computerChoice);
        this.updateScore(result);
        this.displayResult(playerChoice, computerChoice, result);
    }

    determineWinner(playerChoice, computerChoice) {
        if (playerChoice === computerChoice) {
            this.textdiv.style.color = "#ffffff";
            return "Draw!";
        } else if (
            (playerChoice === "Rock" && computerChoice === "Scissors") ||
            (playerChoice === "Paper" && computerChoice === "Rock") ||
            (playerChoice === "Scissors" && computerChoice === "Paper")
        ) {
            this.textdiv.style.color = "#00ff00";
            return "You win!";
        } else {
            this.textdiv.style.color = "#ff0000";
            return "You lose!";
        }
    }

    updateScore(result) {
        if (result === "You win!") {
            this.playerWins++;
        } else if (result === "You lose!") {
            this.computerWins++;
        }
    }

    displayResult(playerChoice, computerChoice, result) {
        const resultText = document.createElement('div');
        resultText.innerHTML = `${playerChoice} vs ${computerChoice} - ${result}`;
        resultText.innerHTML += `<br>Player Wins: ${this.playerWins}, Computer Wins: ${this.computerWins}`;

        const rpsResult = document.getElementById('rps-result');
        if (rpsResult) {
            rpsResult.remove();
        }

        const rpsdiv = document.getElementById('rps-div');
        rpsdiv.appendChild(resultText);
        resultText.id = 'rps-result';
    }
}