let paper = document.getElementById("paper")
paper.addEventListener('click', paperOnClick);
let scissors =  document.getElementById("scissors")
scissors.addEventListener('click', scissorsOnClick);
let rock =  document.getElementById("rock")
rock.addEventListener('click', rockOnClick);
let winner = document.getElementById("winner")
let mySelect = document.getElementById("mySelect")
let computerSelect = document.getElementById("computerSelect")
let button = document.getElementById("button")
button.addEventListener('click', buttonOnClick);
let kidScore = document.getElementById("kidScore")
let computerScore = document.getElementById("computerScore")
let userdata = "" 
let computer = ""
let kidS = 0 
let computerS = 0 


function paperOnClick(userdata) {
    userdata = "paper"
    mySelect.innerHTML = "your choice: paper "
    computerChoice()
    winnerChoice(userdata , computer)
    return userdata
}

function scissorsOnClick(userdata) {
    userdata = "scissors"
    mySelect.innerHTML = "your choice: scissors "
    computerChoice()
    winnerChoice(userdata , computer)
    return userdata
}

function rockOnClick(userdata) {
    userdata = "rock"
    mySelect.innerHTML = "your choice: rock "
    computerChoice()
    winnerChoice(userdata , computer)
    return userdata
}

function buttonOnClick() {
    mySelect.innerHTML = "Your choice: ";
    computerSelect.innerHTML = "Computer choice: ";
    winner.innerHTML = "The winner: ";

    kidS = 0;
    computerS = 0;

    kidScore.innerHTML = kidS;
    computerScore.innerHTML = computerS;
}


function computerChoice() {
    const choices = ["paper", "rock", "scissors"];
    const randomIndex = Math.floor(Math.random() * choices.length);
    computerSelect.innerHTML = "computer choice: " + choices[randomIndex]
     computer = choices[randomIndex]
     winnerChoice(userdata , computer)
    return computer;
  }

  

  function winnerChoice(userdata, computer) {
     
    if (userdata == "rock" && computer == "scissors" || userdata == "paper" && computer == 'rock' || userdata == "scissors" && computer == "paper") {
        kidS++;
        kidScore.innerHTML = kidS;
        winner.innerHTML = "The winner: you ";
    }
    else if (computer == "rock" && userdata == "scissors" || computer == "paper" && userdata == 'rock' || computer == "scissors" && userdata == "paper") {
        computerS++;
        computerScore.innerHTML = computerS; 
        winner.innerHTML = "The winner: computer ";
    }
    else if (userdata == computer) {
        winner.innerHTML = "The winner: it's a tie ";
    }
}







