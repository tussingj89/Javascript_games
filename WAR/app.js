const playCards = document.getElementById('playerCards');
const playerPoints = document.getElementById('playerPoints');
const player = document.getElementById('player');
const compCards = document.getElementById('compCards');
const compPoints = document.getElementById('compPoints');
const computer = document.getElementById('computer');
const results = document.getElementById('result');
const deal = document.getElementById('deal');

let playerArray = [];
let compArray = [];
let pPoints = 0;
let cPoints = 0;
let deck;

class Deck {
    constructor() {
        this.deck = [];

        const suits = ['Hearts', 'Spades', 'Clubs', 'Diamonds'];
        const names = [[2,2], [3,3], [4,4], [5,5], [6,6], [7,7], [8,8], [9,9], [10,10], ['Jack',11], ['Queen',12], ['King',13], ['Ace',14]];
  
    for (let suit in suits) {
        for (let name in names) {
            this.deck.push(`${names[name]}, ${suits[suit]}`);
        }
    }
    }
}
  const deck1 = new Deck();
  deck = deck1;

  deal.addEventListener('click', function(){
    let tempCard1 = playerArray[0].split(',');
    let tempCard2 = compArray[0].split(',');
     player.setAttribute('class', tempCard1[2])
     computer.setAttribute('class', tempCard2[2])
     player.innerHTML = tempCard1[0]
     computer.innerHTML = tempCard2[0]
     check(tempCard1, tempCard2)
    if(playerArray === 0 || compArray === 0){
        console.log('Game Over')
        results.innerHTML = 'Game Over'
        deal.removeEventListener('click')
    }

})

function check(tempCard1, tempCard2){
    console.log(tempCard1, tempCard2)

    if(parseInt(tempCard1[1]) > parseInt(tempCard2[1])){
        console.log('you win')
        results.innerHTML = 'You Win!'
        pPoints++
        playerPoints.innerHTML = pPoints
        playerArray.shift(1)
        compArray.shift(1)
        playerArray.push(playerArray[0], compArray[0])
        playCards.innerHTML = playerArray.length
        compCards.innerHTML = compArray.length
  

    }
    else if(parseInt(tempCard1[1]) === parseInt(tempCard2[1])){
        console.log('tie')
        results.innerHTML = 'Its a Tie'
        playerArray.shift(1)
        playerArray.push(playerArray[0])
        compArray.shift(1)
        compArray.push(compArray[0])
    }
    else{
        console.log('you lose')
        results.innerHTML = 'You Lose'
        cPoints++
        compPoints.innerHTML = cPoints
        playerArray.shift(1)
        compArray.shift(1)
        compArray.push(playerArray[0], compArray[0])
        playCards.innerHTML = playerArray.length
        compCards.innerHTML = compArray.length
    }
}
function shuffle(){
    deck.deck
    let set = 1;
    let shuffled = deck.deck.sort((a,b) => 0.5 - Math.random())
    for(let i = 0; i < shuffled.length ; i++) {
        let random = Math.floor(Math.random() * shuffled.length);
        if(set === 1) {
            playerArray.push(shuffled[i]);
            set++
        } else {
            compArray.push(shuffled[i]);
            set--
        }
    }
    return [playerArray, compArray];
   
}
function play(){
    shuffle()
    playCards.innerHTML = playerArray.length
    compCards.innerHTML = compArray.length
    playerPoints.innerHTML = pPoints
    compPoints.innerHTML = cPoints
}

play()
