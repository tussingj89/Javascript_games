const playCards = document.getElementById('playerCards')
const playerPoints = document.getElementById('playerPoints')
const player = document.getElementById('player')
const compCards = document.getElementById('compCards')
const compPoints = document.getElementById('compPoints')
const computer = document.getElementById('computer')
const results = document.getElementById('result')
const deal = getElementById('deal')

let playerArray = []
let compArray = []
let pPoints = 0
let cPoints = 0
// make deck a object with a sub class of suit and a sub class of 1-13 ask andrew if this will work
class Suit{
    constructor(image){
    this.Image = image
    this.cards = [2,3,4,5,6,7,8,9,10,11,12,13,14]
    }
}
const hearts = new Suit('./images/heart.png')
const diamond = new Suit('./images/diamond.png')
const clubs = new Suit('./images/clubs.png')
const spade = new Suit('./images/spade.png')

deal.addEventListener('click', war())

function war(){
    // deal card to player and computer
}
function check(){
    // checks which players card was higher
}
function shuffle(){
    // on page load random devides 52 "cards" into playerArray and compArray

}
function play(){
    shuffle()
}
play()



