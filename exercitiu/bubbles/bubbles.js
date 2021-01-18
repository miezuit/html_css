var times = 10;
for(var i=0; i < times; i++){
    newBubble();
}

function newBubble() {
    let bubble = document.createElement('div')
    bubble.classList.add('bubble')
    x = randomNumber(100)
    delay = randomNumber(2000)
    size = randomNumber(4)
    bubble.style.left = `${x}vw`
    bubble.style.height = bubble.style.width = `${size}em`
    bubble.style.animationDelay = `${delay}ms`
    document.querySelector('body').appendChild(bubble)
}

function randomNumber(max) {
    return Math.floor(Math.random() * max)
}