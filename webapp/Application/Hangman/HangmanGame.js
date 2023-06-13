export default class HangmanGame{
    constructor()
    {
        this.Game();
    }

    Game(){
        const letterContainer = document.getElementById("letter-container");
        const optionsContainer = document.getElementById("options-container");
        const userInputSection = document.getElementById("user-input-section");
        const newGameContainer = document.getElementById("new-game-container");
        const newGameButton = document.getElementById("new-game-button");
        const canvas = document.getElementById("canvas");
        const resultText = document.getElementById("result-text");

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
        ],
        };

        let winCount = 0;
        let count = 0;

        let chosenWord = "";

        const displayOptions = () => {
            optionsContainer.innerHTML += `<h3>Choose a category!</h3>`;
            let buttonCon = document.createElement("div");
            for (let value in options) {
              buttonCon.innerHTML += `<button class="options" onclick="generateWord('${value}')">${value}</button>`;
            }
            optionsContainer.appendChild(buttonCon);
          };

        //Gombok tiltása
        const blocker = () => {
            let optionsButtons = document.querySelectorAll(".options");
            let letterButtons = document.querySelectorAll(".letters");
            //kategóriák tiltása
            optionsButtons.forEach((button) => {
                button.disabled = true;
            });
        
            //betűk tiltása
            letterButtons.forEach((button) => {
                button.disabled.true;
            });
            newGameContainer.classList.remove("hide");
        };

        //Szó generáló
        const generateWord = (optionValue) => {
        let optionsButtons = document.querySelectorAll(".options");

        //Belső gomb kijelölése kiválasztásra
        optionsButtons.forEach((button) => {
            if (button.innerText.toLowerCase() === optionValue) {
            button.classList.add("active");
            }
            button.disabled = true;
        });

        //korábbi szó, betűk törlése
        letterContainer.classList.remove("hide");
        userInputSection.innerText = "";

        let optionArray = options[optionValue];

        //random szó kiválasztása
        chosenWord = optionArray[Math.floor(Math.random() * optionArray.length)];
        chosenWord = chosenWord.toUpperCase();
        console.log(chosenWord);

        //gondolatjelek a betűk helyére
        let displayItem = chosenWord.replace(/./g, '<span class="dashes">_</span>');
        userInputSection.innerHTML = displayItem;
        };

        //Akasztófa felülete
        const canvasCreator = () => {
            let context = canvas.getContext("2d");
            context.beginPath();
            context.strokeStyle = "#000";
            context.lineWidth = 2;
        
            const drawLine = (fromX, fromY, toX, toY) => {
            context.moveTo(fromX, fromY);
            context.lineTo(toX, toY);
            context.stroke();
            };
        
            const head = () => {
            context.beginPath();
            context.arc(70, 30, 10, 0, Math.PI * 2, true);
            context.stroke();
            };
        
            const body = () => {
            drawLine(70, 40, 70, 80);
            };
        
            const leftArm = () => {
            drawLine(70, 50, 50, 70);
            };
        
            const rightArm = () => {
            drawLine(70, 50, 90, 70);
            };
        
            const leftLeg = () => {
            drawLine(70, 80, 50, 110);
            };
        
            const rightLeg = () => {
            drawLine(70, 80, 90, 110);
            };
        
            //Keret
            const initialDrawing = () => {
            context.clearRect(0, 0, context.canvas.width, context.canvas.height);
            drawLine(10, 130, 130, 130);
            drawLine(10, 10, 10, 131);
            drawLine(10, 10, 70, 10);
            drawLine(70, 10, 70, 20);
            };
        
            return { initialDrawing, head, body, leftArm, rightArm, leftLeg, rightLeg };
        };

        //testrészek berajzolása
        const drawMan = (count) => {
            let { head, body, leftArm, rightArm, leftLeg, rightLeg } = canvasCreator();
            switch (count) {
            case 1:
                head();
                break;
            case 2:
                body();
                break;
            case 3:
                leftArm();
                break;
            case 4:
                rightArm();
                break;
            case 5:
                leftLeg();
                break;
            case 6:
                rightLeg();
                break;
            default:
                break;
            }
        };
        
        //Új játék
        newGameButton.addEventListener("click", initializer);
        window.onload = initializer;
    }
}
