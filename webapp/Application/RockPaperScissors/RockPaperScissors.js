import Application from "../Application.js";

export default class RockPaperScissors extends Application{
    
init(){
    super.init();
    this.initGame();
}
initGame() {
    var choices = ["Rock", "Paper", "Scissors"];
    const rpsdiv = document.createElement('div');
    rpsdiv.id='rps-div';
    

    this.textdiv = document.createElement('div');
    this.textdiv.id='rps-text';
    const btndiv=document.createElement('div');
    btndiv.id='rps-btn';
    rpsdiv.appendChild(this.textdiv);
    rpsdiv.appendChild(btndiv);
    this.app.appendChild(rpsdiv);
    this.textdiv.innerHTML='Choose one:';
    for(let i=0;i<3;i++){
        console.log(this);
        var button = document.createElement("button");
        button.id=choices[i];
        button.textContent = choices[i];
        btndiv.appendChild(button);
        button.addEventListener("click", this.playGame.bind(this));
    }
}

playGame(evt) {
    console.log(evt.currentTarget);
    const playerChoice = evt.currentTarget.id;
    var choices = ["Rock", "Paper", "Scissors"];
    var computerChoice = choices[Math.floor(Math.random() * choices.length)];
    var result = this.determineWinner(playerChoice, computerChoice);
    this.textdiv.innerHTML=result;
}

determineWinner(playerChoice, computerChoice) {
    if (playerChoice === computerChoice) {
        this.textdiv.style.color="#ffffff";
        return "Draw!";
    } else if (
        (playerChoice === "Rock" && computerChoice === "Scissors") ||
        (playerChoice === "Paper" && computerChoice === "Rock") ||
        (playerChoice === "Scissors" && computerChoice === "Paper")
    ) {
        this.textdiv.style.color="#00ff00";
        return "You win!";
    } else {
        this.textdiv.style.color="#ff0000";
        return "You lose!";
    }}}