const images = document.querySelectorAll("img");

function computerPlay(){
    const array = ['paper', 'rock', 'scissors'];
    let random = Math.floor(Math.random() * 3);
    return array[random];
}

function giveValue(value){
    switch (value) {
        case "1":
            return "rock"
            break;
        case "2":
            return "scissors"
            break;
        case "3":
            return "paper"
            break;
        default:
            break;
    }
}

function compare(user, computer){
    if (user == computer){
        return 2;
    }
    else{
        if (user == 'scissors' && computer == 'paper' || user == 'paper' && computer == 'rock' || user == 'rock' && computer == 'scissors'){            
            playerCount+=1;
            return 1;
        }
        else{
            computerCount+=1;
            return 0;
        }
    }
}

function consoleLog(winner, resultColor, resultsDiv, resultsText){
    resultsDiv.style.cssText = resultColor;
    resultsText.textContent = winner;
    resultsDiv.appendChild(resultsText);
    return;
}

function consoleImg(userValue, compValue, resultsImages, playerImage, compImage){
    if (userValue == 99){
        resultsImages.removeChild(playerImage);
        resultsImages.removeChild(compImage);
    }
    else{
        playerImage.src = userValue+".png";
        compImage.src = compValue+".png";
        resultsImages.style.cssText = "margin-top: 10px;"
        resultsImages.appendChild(playerImage);
        resultsImages.appendChild(compImage);
    }
    return;
}

function counter(playerCountPara, playerCountDiv, computerCountPara, computerCountDiv){
    playerCountPara.textContent = playerCount.toString();
    computerCountPara.textContent = computerCount.toString();
    playerCountDiv.appendChild(playerCountPara);
    computerCountDiv.appendChild(computerCountPara);
}

function game(whoScore, userValue, compValue, resultsImages, playerImage, compImage, resultsDiv, resultsText, playerImage, compImage){
    let theWinnerIs;
    switch (whoScore) {
        case 2:
            resultColor = "background-color: #F4AC32";
            theWinnerIs = "Es un empate!";
            break;
        case 1:
            resultColor  = "background-color: #226F54"
            theWinnerIs = "Ganaste!";
            break;
        case 0:
            resultColor = "background-color: #ec4d4d"
            theWinnerIs = "Perdiste :(";
            break;
        default:
            break;
    }

    if (playerCount == 5 || computerCount == 5){
        userValue = 99;
        if (playerCount == 5){
            theWinnerIs = "Haz ganado! Vamos a jugar otra vez";
            resultColor = "background-color: rgb(175, 87, 28);"
            playerCount = 0;
            computerCount = 0;
        }
        else{
            theWinnerIs = "Perdiste :'( Vamos a jugar otra vez!";
            resultColor = "background-color: rgb(175, 87, 28);"
            playerCount = 0;
            computerCount = 0;
        }
    };   

    consoleLog(theWinnerIs, resultColor, resultsDiv, resultsText);
    consoleImg(userValue, compValue, resultsImages, playerImage, compImage);
}




const resultsImages = document.querySelector("#console-images");
const playerImage = document.createElement("img");
const compImage = document.createElement("img");
const resultsDiv = document.querySelector("#console-log");
const resultsText = document.createElement("h2");
const playerCountDiv = document.querySelector("#player");
const computerCountDiv = document.querySelector("#computer");
const playerCountPara = document.createElement("p");
const computerCountPara = document.createElement("p");
let playerCount = 0;
let computerCount = 0;

images.forEach((image) => {
    image.addEventListener('click', () => {
        let userValue = giveValue(image.id);
        let compValue = computerPlay();
        let whoScore = compare(userValue, compValue);
        
        game(whoScore, userValue, compValue, resultsImages, playerImage, compImage, resultsDiv, resultsText, playerImage, compImage);
        counter(playerCountPara, playerCountDiv, computerCountPara, computerCountDiv);
    });
});