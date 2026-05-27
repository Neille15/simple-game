function getComputerChoice(cChoice){
    let n = Math.floor(Math.random() * 3) + 1;
    return cChoice = (n === 1) ?  "rock" : (n === 2) ? "paper" : "rock"; 
}

function getHumanChoice(hChoice){
    return hChoice = (hChoice === 1) ?  "rock" : (hChoice === 2) ? "paper" : "rock";
}

let humanChoice = parseInt(prompt("Enter a number 1-3: "));


