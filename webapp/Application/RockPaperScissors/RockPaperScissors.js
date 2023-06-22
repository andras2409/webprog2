import Application from "../Application.js";

export default class RockPaperScissors extends Application {
    constructor(app) {
      super(app);
      this.playerWins = 0;
      this.computerWins = 0;
      this.difficulty = 'Normal';
      this.initGame();
      this.initDifficultyButtons();
      this.initColorTable();
    }
  
    initGame() {
      const choices = ['Rock', 'Paper', 'Scissors'];
      const rpsdiv = document.createElement('div');
      rpsdiv.id = 'rps-div';
      rpsdiv.style.padding = '20px';
      rpsdiv.style.display = 'flex';
      rpsdiv.style.flexDirection = 'column';
      rpsdiv.style.alignItems = 'center';
    
      this.textdiv = document.createElement('div');
      this.textdiv.id = 'rps-text';
      this.textdiv.style.color = this.isDarkTheme ? 'white' : 'black';
      this.textdiv.style.fontSize = '24px';
      this.textdiv.style.marginBottom = '20px';
    
      const btndiv = document.createElement('div');
      btndiv.id = 'rps-btn';
      btndiv.style.display = 'flex';
      btndiv.style.gap = '10px';
    
      rpsdiv.appendChild(this.textdiv);
      rpsdiv.appendChild(btndiv);
      this.app.appendChild(rpsdiv);
      
      const chooseOneSpan = document.createElement('span');
      chooseOneSpan.textContent = 'Choose one:';
      chooseOneSpan.style.color = this.isDarkTheme ? 'white' : 'black';
      this.textdiv.appendChild(chooseOneSpan);
      
      this.textdiv.style.textAlign = 'center';
    
      for (let i = 0; i < 3; i++) {
        const button = document.createElement('button');
        button.id = choices[i];
        button.textContent = choices[i];
        button.style.backgroundColor = this.isDarkTheme ? 'white' : 'black';
        button.style.color = this.isDarkTheme ? 'black' : 'white';
        button.style.border = 'none';
        button.style.padding = '10px 20px';
        button.style.boxShadow = '0px 0px 5px rgba(0, 0, 0, 0.3)';
        btndiv.appendChild(button);
        button.addEventListener('click', this.playGame.bind(this));
        button.addEventListener('mousedown', () => {
          button.style.transform = 'scale(0.95)';
        });
        button.addEventListener('mouseup', () => {
          button.style.transform = 'scale(1)';
        });  
        btndiv.appendChild(button);
      }
          this.app.style.border = 'none';
    }
    
    
    initDifficultyButtons() {
      const difficultyButtons = document.createElement('div');
      difficultyButtons.id = 'rps-difficulty-buttons';
      difficultyButtons.style.textAlign = 'center';
      difficultyButtons.style.marginTop = '20px';
  
      const normalButton = document.createElement('button');
      normalButton.textContent = 'Normal';
      normalButton.style.backgroundColor = 'black';
      normalButton.style.color = 'white';
      normalButton.style.border = 'none';
      normalButton.style.padding = '10px 20px';
      normalButton.style.marginRight = '10px';
      normalButton.style.boxShadow = '0px 0px 5px rgba(0, 0, 0, 0.3)';
      normalButton.addEventListener('click', () => this.setDifficulty('Normal'));
      difficultyButtons.appendChild(normalButton);
  
      const hardButton = document.createElement('button');
      hardButton.textContent = 'Baby mode';
      hardButton.style.backgroundColor = 'black';
      hardButton.style.color = 'white';
      hardButton.style.border = 'none';
      hardButton.style.padding = '10px 20px';
      hardButton.style.boxShadow = '0px 0px 5px rgba(0, 0, 0, 0.3)';
      hardButton.addEventListener('click', () => this.setDifficulty('Hard'));
      difficultyButtons.appendChild(hardButton);
  
      this.app.appendChild(difficultyButtons);
    }
  
    setDifficulty(difficulty) {
      if (this.difficulty !== difficulty) {
        this.playerWins = 0;
        this.computerWins = 0;
      }
      this.difficulty = difficulty;
    }
  
    playGame(evt) {
      const playerChoice = evt.currentTarget.id;
      const choices = ['Rock', 'Paper', 'Scissors'];
      let computerChoice;
  
      if (this.difficulty === 'Normal') {
        computerChoice = choices[Math.floor(Math.random() * choices.length)];
      } else if (this.difficulty === 'Hard') {
        computerChoice = this.getHardDifficultyChoice(choices);
      }
  
      const result = this.determineWinner(playerChoice, computerChoice);
      this.updateScore(result);
      this.displayResult(playerChoice, computerChoice, result);
    }
  
    getHardDifficultyChoice(choices) {
      const winningMoves = {
        Rock: 'Paper',
        Paper: 'Scissors',
        Scissors: 'Rock',
      };
  
      const playerLastChoice = choices[choices.length - 1];
      return winningMoves[playerLastChoice];
    }
  
    determineWinner(playerChoice, computerChoice) {
      if (playerChoice === computerChoice) {
        this.textdiv.style.color = 'black';
        return 'Draw!';
      } else if (
        (playerChoice === 'Rock' && computerChoice === 'Scissors') ||
        (playerChoice === 'Paper' && computerChoice === 'Rock') ||
        (playerChoice === 'Scissors' && computerChoice === 'Paper')
      ) {
        this.textdiv.style.color = 'black';
        return 'You win!';
      } else {
        this.textdiv.style.color = 'black';
        return 'You lose!';
      }
    }
  
    updateScore(result) {
      if (result === 'You win!') {
        this.playerWins++;
      } else if (result === 'You lose!') {
        this.computerWins++;
      }
    }
  
    displayResult(playerChoice, computerChoice, result) {
    const textColor = this.isDarkTheme ? 'white' : 'black';
    const numberColor = this.isDarkTheme ? 'white' : 'black';
    const choiceColor = this.isDarkTheme ? 'white' : 'black';
  
    this.textdiv.innerHTML = `
      <p><span style="color: ${textColor}">Player:</span> <span style="color: ${choiceColor}">${playerChoice}</span></p>
      <p><span style="color: ${textColor}">Computer:</span> <span style="color: ${choiceColor}">${computerChoice}</span></p>
      <p><span style="color: ${textColor}">${result}</span></p>
      <p><span style="color: ${textColor}">Player wins:</span> <span style="color: ${numberColor}">${this.playerWins}</span></p>
      <p><span style="color: ${textColor}">Computer wins:</span> <span style="color: ${numberColor}">${this.computerWins}</span></p>
    `;
  }
    
    initColorTable() {
      const colorTable = document.createElement('table');
      colorTable.style.marginTop = '20px';
      colorTable.style.width = '100%';
      colorTable.style.borderCollapse = 'collapse';
  
      const colors = [
        'blue',
        'red',
        'lime',
        'black',
        'salmon',
        'pink',
        'peachpuff',
        'goldenrod',
        'saddlebrown',
        'white',
      ];
  
      const headerRow = document.createElement('tr');
      headerRow.innerHTML = `<th colspan="2" style="font-size: 18px;">Choose a theme color:</th>`;
      colorTable.appendChild(headerRow);
  
      for (let i = 0; i < 5; i++) {
        const row = document.createElement('tr');
        for (let j = 0; j < 2; j++) {
          const cell = document.createElement('td');
          cell.style.padding = '10px';
          cell.style.textAlign = 'center';
          cell.style.backgroundColor = colors[i * 2 + j];
          cell.style.boxShadow = '0px 0px 5px rgba(0, 0, 0, 0.3)';
          cell.addEventListener('click', () => {
            document.body.style.backgroundColor = colors[i * 2 + j];
          });
          row.appendChild(cell);
        }
        colorTable.appendChild(row);
      }
  
      this.app.appendChild(colorTable);
    }
  }