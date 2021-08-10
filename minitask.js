function playerSelection(){
    userInput = prompt('Your selection (rock, paper, scissors):');
    fixed = userInput.toLowerCase();
    return fixed;
}

function computerPlay(){
    array = ['paper', 'rock', 'scissors'];
    random = Math.floor(Math.random() * 3);
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
    contUser = 0;
    contComp = 0;

    while(true){
        user = playerSelection();
        computer = computerPlay();
        console.log(user);
        console.log(computer);
        value = compare(user, computer);

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

let ganador = game();

if (ganador == 1){
    console.log("You win!")
}
else{
    console.log("Good luck next time!")
}
