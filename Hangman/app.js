const canvas = document.querySelector('.hang-img')
const context = canvas.getContext('2d')
const hidden = document.getElementById('hidden')
const button = document.getElementById('button')
const remaining = document.getElementById('guess-remain')
const reload = document.getElementById('reload')

const words = ["apple","absurd","askew","topaz","unknown","onyx","vixen","gossip","haiku","avenue","chair","python","ruby","javascript","variable","object","zepplin","ankh","sphynx","batman","comics","clover","dog","cat"]
const alphabet = ['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z']
const drawings = ['gallows1', 'gallows2', 'head', 'body', 'rightArm', 'leftArm', 'rightLeg', 'leftLeg', 'rightFoot', 'leftFoot']
let guesses = 10;
let hiddenChoice = []
let right = 0
let greenColor = []
let redColor = []
let step = 0;

reload.addEventListener('click', function(){ window.location.reload() })
function green(){ document.getElementById(greenColor).style.backgroundColor = 'green'; }
function red(){ document.getElementById(redColor).style.backgroundColor = 'red'; }

function draw(part) {
    switch (part) {
        case 'gallows1' :
            context.strokeStyle = '#444';
            context.lineWidth = 10; 
            context.beginPath();
            context.moveTo(0, 150);
            context.lineTo(250, 150);
            context.moveTo(40, 225);
            context.stroke()
            break
        
        case 'gallows2' :
            context.lineTo(25, 5);
            context.lineTo(100, 5);
            context.lineTo(100, 25);
            context.stroke();
            break;
  
        case 'head':
            context.lineWidth = 5;
            context.beginPath();
            context.arc(100, 45, 17, 0, Math.PI*2, true);
            context.closePath();
            context.stroke();
            break;
        
        case 'body':
            context.beginPath();
            context.moveTo(100, 60);
            context.lineTo(100, 100);
            context.stroke();
            break;
  
        case 'rightArm':
            context.beginPath();
            context.moveTo(100, 65);
            context.lineTo(60, 80);
            context.stroke();
            break;
  
        case 'leftArm':
            context.beginPath();
            context.moveTo(100, 65);
            context.lineTo(140, 80);
            context.stroke();
            break;
  
        case 'rightLeg':
            context.beginPath();
            context.moveTo(100, 100);
            context.lineTo(80, 120);
            context.stroke();
            break;
  
        case 'rightFoot':
            context.beginPath();
            context.moveTo(82, 120);
            context.lineTo(70, 110);
            context.stroke();
        break;
  
        case 'leftLeg':
            context.beginPath();
            context.moveTo(100, 100);
            context.lineTo(125, 120);
            context.stroke();
            break;
  
        case 'leftFoot':
            context.beginPath();
            context.moveTo(122, 120);
            context.lineTo(135, 110);
            context.stroke();
            break;
        } 
  }
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
    draw(drawings[step++])
    guesses-- }

        if(right === hiddenChoice.length){
            setTimeout(() => {
        alert('congratulations you won');
        }, 1000);}

        if(guesses === 0){
        alert('sorry you lost the correct word was:  ' + hiddenChoice.toString(''))
    }
    remaining.innerHTML = guesses
}

function play(){
    randomword()
    generateLetters()
    remaining.innerHTML = guesses
}
play()



