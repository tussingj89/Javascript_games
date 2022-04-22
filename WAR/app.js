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
//   console.log(deck1.deck);

deal.addEventListener('click', function(){
    let tempCard1 = playerArray[0].split(',');
    let tempCard2 = compArray[0].split(',');
     console.log(tempCard1);
     console.log(tempCard2);
     player.setAttribute('class', tempCard1[2])
     computer.setAttribute('class', tempCard2[2])
     player.innerHTML = tempCard1[0]
     computer.innerHTML = tempCard2[0]
    //  display them inside cards
    // trigger check function

})

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
// console.log(playerArray)
// console.log(compArray)
function play(){
    shuffle()
}
play()
