const hangman = document.querySelector('.hang-img')
const hidden = document.getElementById('hidden')
const button = document.getElementById('button')
const remaining = document.getElementById('guess-remain')

const words = ["apple","chair","python","ruby","javascript","variable","object","zepplin","ankh","sphynx","batman","comics","clover","dog","cat"]
const alphabet = ['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z']
const drawings = []
let guesses = 10;
let hiddenChoice = []
let right
let greenColor = []
let redColor = []

function green(){ document.getElementById(greenColor).style.backgroundColor = 'green'; }
function red(){ document.getElementById(redColor).style.backgroundColor = 'red'; }

function randomword(){
    let choice = words[Math.floor(Math.random() * words.length)]
    for (let i = 0; i < choice.length; i++){
        const square = document.createElement('square')
        square.setAttribute('data-id', i)
        hidden.appendChild(square)
        console.log(choice)
        hiddenChoice = choice
    }
}
function generateLetters(){
    for ( let j = 0; j < alphabet.length; j++){
    const letters = document.createElement('letters')
    letters.setAttribute('class', 'letters')
    letters.id = alphabet[j]
    letters.addEventListener('click', checkMatch)
    button.appendChild(letters)
    letters.innerHTML = letters.id
    



    }
}
function checkMatch(){
    for (let k = 0; k < hiddenChoice.length; k++){
        if (this.id === hiddenChoice[k]){
            console.log('you found a letter')
            greenColor = this.id
            green(greenColor)
            right++
            break; 
        }
        else {
            console.log('guess again')
            console.log(guesses)
            redColor = this.id
            red(redColor)
            guesses--
            break;
            
        }
    }
    if(right === hiddenChoice.length){
        alert('congradulations you won')
    }
    else if(guesses === 0){
        alert('sorry you lost')
    }
    remaining.innerHTML = guesses

}

function play(){
    randomword()
    generateLetters()
    
}
play()
remaining.innerHTML = guesses
