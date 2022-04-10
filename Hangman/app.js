const hangman = document.querySelector('.hang-img')
const hidden = document.getElementById('hidden')
const button = document.getElementById('button')
const remaining = document.getElementById('guess-remain')
const reload = document.getElementById('reload')

const words = ["apple","chair","python","ruby","javascript","variable","object","zepplin","ankh","sphynx","batman","comics","clover","dog","cat"]
const alphabet = ['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z']
const drawings = []
let guesses = 10;
let hiddenChoice = []
let right = 0
let greenColor = []
let redColor = []

reload.addEventListener('click', function(){ window.location.reload() })
function green(){ document.getElementById(greenColor).style.backgroundColor = 'green'; }
function red(){ document.getElementById(redColor).style.backgroundColor = 'red'; }

function randomword(){
    let choice = words[Math.floor(Math.random() * words.length)]
    for (let i = 0; i < choice.length; i++){
        const square = document.createElement('square')
        square.setAttribute('id', i)
        hidden.appendChild(square)
        hiddenChoice = choice.split('')
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
    let correct
    for (let k = 0; k < hiddenChoice.length; k++){
        if (this.id === hiddenChoice[k]){
            console.log('you found a letter')
            greenColor = this.id
            document.getElementById(k).innerHTML = this.id
            green(greenColor)
            right++
            correct = true
        }
    }
    console.log('guess again')
    redColor = this.id
    if (correct != true){
    red(redColor)
    guesses-- }

        if(right === hiddenChoice.length){
        alert('congradulations you won')
        }
        if(guesses === 0){
        alert('sorry you lost the correct word was:  ' + hiddenChoice)
    }
    remaining.innerHTML = guesses
}

function play(){
    randomword()
    generateLetters()
    remaining.innerHTML = guesses
}
play()
