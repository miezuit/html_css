document.getElementById('dreptunghi')
        .addEventListener('click', (event) => {
            document.getElementById('dreptunghi').classList.add('blink')
        })


document.getElementById('dreptunghi')
        .addEventListener('animationend', (event) => {
    document.getElementById('dreptunghi').classList.remove('blink')
})




