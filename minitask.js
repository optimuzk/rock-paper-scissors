function playerSelection(){
    let userInput = prompt('Your selection (rock, paper, scissors):');
    let fixed = userInput.toLowerCase();
    return fixed;
}

function computerPlay(){
    const array = ['paper', 'rock', 'scissors'];
    let random = Math.floor(Math.random() * 3);
    return array[random];
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

function game(){
    let contUser = 0;
    let contComp = 0;

    while(true){
        let user = playerSelection();
        let computer = computerPlay();
        console.log(user);
        console.log(computer);
        let value = compare(user, computer);

        switch (value) {
            case 1:
                contUser+=1;
                break;
            case 0:
                contComp+=1;
            case 2:
                console.log("It's a tie!");
            default:
                break;
        }

        console.log("Your score: ", contUser);
        console.log("Computer score: ", contComp);

        if (contUser > 4){
            return 1;
        }
        if (contComp > 4){
            return 0;
        }

    }
}

// programada

const ganador = game();

if (ganador == 1){
    console.log("You win!")
}
else{
    console.log("Good luck next time!")
}
