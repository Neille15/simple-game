function getcomputerChoice(cChoice){
    let n = Math.floor(Math.random() * 3) + 1;
    return cChoice = (n === 1) ?  "rock" : (n === 2) ? "paper" : "scissors"; 
}

function getHumanChoice(hChoice){
    hChoice = prompt("Enter a rock, paper, scissors: ");
    let choice = hChoice.toLowerCase();
    return choice;
}

let humanScore = 0;
let botScore = 0;

function playRound(humanChoice,computerChoice){
    let result = ""; 

    if (humanChoice === computerChoice){
        result = "Result: tied";
    }
    else if ((humanChoice === "rock" && computerChoice === "scissors") || (humanChoice === "paper" && computerChoice === "rock") || (humanChoice === "scissors" && computerChoice === "paper" )){
        result = "Result: human wins";
        humanScore += 1;
    }
    else {
        result = "computer wins";
        botScore += 1;
    }
    let message = "Result: Human: " + humanChoice + " vs " + "Computer: " + computerChoice + "\n" + result + "\n" + "human: " + humanScore + "\n" + "Computer: " + botScore ;
    
    return message;

}

function playGame(){
    let counter = 0;
    while(humanScore < 3 && botScore < 3){
        console.log(`Round ${counter + 1}:\n`);
        let human = getHumanChoice();
        let bot = getcomputerChoice();

        console.log(playRound(human,bot));
        counter++;
        
    }
    let message = (humanScore > botScore) ? console.log("Game Over!!! \nChampion: Human") : console.log("Game Over!!! \nChampion: Computer");
}



playGame();


