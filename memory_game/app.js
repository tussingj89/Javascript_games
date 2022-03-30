const grid = document.querySelector('#grid')
const result = document.querySelector('#result')

const cardArray = [
    {
        name: 'dog',
        img: 'images/dog.png',
    },
    {
        name: 'cat',
        img: 'images/cat.png',
    },
    {
        name: 'bird',
        img: 'images/bird.png',
    },
    {
        name: 'turtle',
        img: 'images/turtle.png',
    },
    {
        name: 'fish',
        img: 'images/fish.png',
    },
    {
        name: 'elephant',
        img: 'images/elephant.png',
    },
    {
        name: 'dog',
        img: 'images/dog.png',
    },
    {
        name: 'cat',
        img: 'images/cat.png',
    },
    {
        name: 'bird',
        img: 'images/bird.png',
    },
    {
        name: 'turtle',
        img: 'images/turtle.png',
    },
    {
        name: 'fish',
        img: 'images/fish.png',
    },
    {
        name: 'elephant',
        img: 'images/elephant.png',
    },
]
let cardChoice = []
let cardChoiceId = []
let cardswon = []

// sort array randomly
cardArray.sort(() => 0.5 - Math.random())

const createBoard = () => {
    for (let i = 0; i < cardArray.length; i++){
        const card = document.createElement('img')
        card.setAttribute('src', 'images/zoo.png')
        card.setAttribute('data-id', i)
        card.addEventListener('click', cardFlip)
        grid.appendChild(card)
    }
}
function checkMatch(){
    const cards = document.querySelectorAll('#grid img')
    const optionOne = cardChoiceId[0]
    const optionTwo = cardChoiceId[1]
    console.log(cards)
    console.log('you clicked the same image')
    if (optionOne == optionTwo){
        alert('Match found!')
    }
    if (cardChoice[0] == cardChoice[1]){
        alert('you found a match')
        cards[optionOne.setAttribute('src', 'images/x.png')]
        cards[optionTwo.setAttribute('src', 'images/x.png')]
        cards[optionOne.removeEventListener('click', cardFlip)]
        cards[optionTwo.removeEventListener('click', cardFlip)]
        cardswon.push(cardChoice)
    }
    else{
        cards[optionOne].setAttribute('src', 'images/zoo.png')
        cards[optionTwo].setAttribute('src', 'images/zoo.png')
        alert('sorry try again')
    }
    result.innerHTML = cardswon.length
    cardChoice = []
    cardChoiceId = []

    if(cardswon.length == cardArray.length/2){
        result.textContent = 'congratulations!'
    }
}

function cardFlip() {
    const cardId = this.getAttribute('data-id')
    cardChoice.push(cardArray[cardId].name)
    cardChoiceId.push(cardId)
    this.setAttribute('src', cardArray[cardId].img)
    if (cardChoice.length === 2) {
        setTimeout(checkMatch, 500)
    }
}
createBoard()