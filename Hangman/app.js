const hangman = document.querySelector('.hang-img')
const hidden = document.getElementById('hidden')
const button = document.getElementById('button')
const remaining = document.getElementById('guess-remain')

const words = ["apple","chair","python","ruby","javascript","variable","object","zepplin","ankh","sphynx","batman","comics","clover","dog","cat"]
const alphabet = ['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z']
const drawings = []
let guesses = 10;
let hiddenChoice = []

function randomword(){
    let choice = words[Math.floor(Math.random() * words.length)]
    for (let i = 0; i < choice.length; i++){
        const square = document.createElement('square')
        square.setAttribute('data-id', i)
        hidden.appendChild(square)

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
    console.log(this.id)
    console.log(hiddenChoice)
    for (let k = 0; k < hiddenChoice.length; k++){
        if (this.id === hiddenChoice[k]){

            console.log('you found a letter')
        }
        else {
            // guesses --
            console.log('guess again')
        }
    }
    // const card = document.querySelectorAll('hidden square')

}
function play(){
    randomword()
    generateLetters()
    remaining.innerHTML = guesses
}
play()