export default class HangmanCanvas {
  
    initCanvas() {
        const hangmanContainer = document.querySelector('#hangman-container');

        this.canvas = document.createElement('canvas');
        hangmanContainer.appendChild(this.canvas);
        this.canvas.id = 'canvas';

        this.context = this.canvas.getContext('2d');
        this.context.beginPath();
        this.context.strokeStyle = '#000';
        this.context.lineWidth = 2;
    }
  
    drawLine(fromX, fromY, toX, toY) {
        this.context.moveTo(fromX, fromY);
        this.context.lineTo(toX, toY);
        this.context.stroke();
    }
  
    gallows() {
        this.drawLine(10, 130, 130, 130);
        this.drawLine(10, 10, 10, 131);
        this.drawLine(10, 10, 70, 10);
        this.drawLine(70, 10, 70, 20);
    }

    head(){
        this.context.beginPath();
        this.context.arc(70, 30, 10, 0, Math.PI * 2, true);
        this.context.stroke();
    }

    body(){
        this.drawLine(70, 40, 70, 80);
    }
    
    leftArm(){
        this.drawLine(70, 50, 50, 70);
    }
    
    rightArm (){
        this.drawLine(70, 50, 90, 70);
    }
    
    leftLeg(){
        this.drawLine(70, 80, 50, 110);
    }
    
    rightLeg(){
        this.drawLine(70, 80, 90, 110);
    }
}
  