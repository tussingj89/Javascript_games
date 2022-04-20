const playCards = document.getElementById('playerCards')
const playerPoints = document.getElementById('playerPoints')
const player = document.getElementById('player')
const compCards = document.getElementById('compCards')
const compPoints = document.getElementById('compPoints')
const computer = document.getElementById('computer')
const results = document.getElementById('result')
// const deal = getElementById('deal')

let playerArray = []
let compArray = []
let pPoints = 0
let cPoints = 0
let deck;

class Deck {
    constructor() {
      this.deck = [];
  
      const suits = ['Hearts', 'Spades', 'Clubs', 'Diamonds'];
      const values = [2, 3, 4, 5, 6, 7, 8, 9, 10, 'Jack', 'Queen', 'King', 'Ace'];
  
      for (let suit in suits) {
        for (let value in values) {
          this.deck.push(`${values[value]}, ${suits[suit]}`);
        }
      }
    }
  }
  
  const deck1 = new Deck();
  deck = deck1;
//   console.log(deck1.deck);

deal.addEventListener('click', war())

function war(){
    // deal card to player and computer
}
function check(){
    // checks which players card was higher
}
function shuffle(){
    deck.deck
    let set = 1;
    // console.log(deck.deck)
    let shuffled = deck.deck.sort((a,b) => 0.5 - Math.random())
    // console.log(shuffled)
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
console.log(playerArray)
console.log(compArray)
function play(){
    shuffle()
}
play()
