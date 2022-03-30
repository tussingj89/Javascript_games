// collects document elements for use in javascript
const wins = document.getElementById('wins')
const reset = document.getElementById('reset')
const compwins = document.getElementById('compwins')
const computerChoiceDisplay = document.getElementById('computer-choice')
const userChoiceDisplay = document.getElementById('user-choice')
const results = document.getElementById('results')
const possibleChoices = document.querySelectorAll('button')
let userChoice
let computerChoice
let result
let win = 0;
let compwin = 0;

reset.addEventListener('click', function(){
    window.location.reload()
})

possibleChoices.forEach(possibleChoice => possibleChoice.addEventListener('click', (e) => {
   userChoice = e.target.id
   userChoiceDisplay.innerHTML = userChoice
   genearateComputerChoice()
   getResults()
}))

const genearateComputerChoice = () => {
    const randomNumber = Math.floor(Math.random() * possibleChoices.length)
    console.log(randomNumber)

    switch(randomNumber){
    case 1:
        computerChoice = "rock"
        break;
    case 2:
        computerChoice = "paper"
        break
    case 3:
        computerChoice = "scissors"
        break
    }
    console.log(computerChoice)
    computerChoiceDisplay.innerHTML = computerChoice

}
const getResults = () => {
    if (computerChoice === userChoice){
        result = 'its a draw!'
        win ++
        compwin ++
    }
    else if (computerChoice === 'rock' && userChoice === 'paper' || computerChoice === 'paper' && userChoice === 'Scissors' 
    || computerChoice === 'scissors' && userChoice === 'rock'){
        result = 'you win'
        win ++
        
    }
    else{
        result = 'you lose'
        compwin ++   
    }
    wins.innerHTML = win
    compwins.innerHTML = compwin
    results.innerHTML = result
    // console.log(result)
    // console.log(win  + ' user wins')
    // console.log(compwin + ' computer wins')
}
