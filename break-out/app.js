const grid =document.querySelector('.grid')
// const block = document.createElement('div')
const blockwidth = 100
const blockHeight = 20

// create block individual
class Block {
    constructor(xAxis, yAxis){
        this.bottomLeft = [xAxis, yAxis]
        this.bottomRight = [xAxis + blockwidth, yAxis]
        this.topleft = [xAxis, yAxis + blockHeight]
        this.topRight = [xAxis +blockwidth, yAxis + blockHeight]
    }
}
const blocks = [
    new block(10,270)
]
console.log(block[0])
// creates block
function addBlocks(){

    for (let i = 0; i < blocks.length; i++){
        const block = document.createElement('div')
        block.classList.add('block')
        block.style.left = blocks[i].bottomLeft[0]
        block.style.bottom = '50px'
        grid.appendChild(block)
    }
}

addBlocks()