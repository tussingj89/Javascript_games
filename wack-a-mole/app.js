const squares = document.querySelectorAll('.square')
const mole = document.querySelector('.mole')
const score = document.querySelector('#result')
const time = document.querySelector('#time-left')

let result = 0
let hitPosition
let currentTime = 60
let timerId = null

function randomMole() {
    squares.forEach(square => {
        square.classList.remove('mole')
    })
   
    let randomPosition = squares[Math.floor(Math.random() * 9)]
    randomPosition.classList.add('mole')
    
    hitPosition = randomPosition.id
}
squares.forEach(square => {
    square.addEventListener('mousedown', () => {
        if(square.id == hitPosition){
            result++ 
            score.textcontent = result
            hitPosition = null
        }
    })
})
function move(){
    timerId = setInterval(randomMole, 500)
    console.log('start')
}
move()

function CountDown(){
    currentTime--
    time.textcontent = currentTime

    if (currentTime == 0){
        clearInterval(countDownTimerId)
        clearInterval(timerId)
        alert('GAME OVER! your score = ' + result)
    }
}
let countDownTimerId = setInterval(CountDown, 1000)