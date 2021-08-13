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
            return 1;
        }
        else{
            return 0;
        }
    }
}

function game(whoScore, userValue, compValue, resultsDiv, resultsText, resultsImages, playerImage, compImage){
    let theWinnerIs;
    switch (whoScore) {
        case 2:
            console.log("its a tie!");
            resultsDiv.style.cssText = "background-color: #F4AC32";
            theWinnerIs = "Es un empate!";
            break;
        case 1:
            console.log("You win!");
            resultsDiv.style.cssText = "background-color: #226F54"
            theWinnerIs = "Ganaste!";
            break;
        case 0:
            console.log("You lost!");
            resultsDiv.style.cssText = "background-color: #ec4d4d"
            theWinnerIs = "Perdiste :(";
            break;
        default:
            break;
    }
    resultsText.textContent = theWinnerIs;
    resultsDiv.appendChild(resultsText);
    playerImage.src = userValue+".png";
    compImage.src = compValue+".png";
    console.log(compImage);
    resultsImages.style.cssText = "margin-top: 10px;"
    resultsImages.appendChild(playerImage);
    resultsImages.appendChild(compImage);
}

const resultsDiv = document.querySelector("#console-log");
const resultsText = document.createElement("h2");
const resultsImages = document.querySelector("#console-images");
const playerImage = document.createElement("img");
const compImage = document.createElement("img");

images.forEach((image) => {
    image.addEventListener('click', () => {
        let userValue = giveValue(image.id);
        let compValue = computerPlay();
        let whoScore = compare(userValue, compValue);
        console.log("You:"+userValue+" Your rival:"+compValue);
        game(whoScore, userValue, compValue, resultsDiv, resultsText, resultsImages, playerImage, compImage);
    });
});