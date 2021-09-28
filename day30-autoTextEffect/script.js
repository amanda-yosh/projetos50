const textElement = document.getElementById('text')
const speedElement = document.getElementById('speed')
const input = document.querySelector('input')
const text = 'We love programming!'

let index = 1;
let speed = 300 / speedElement.value

writeText()

function writeText() {
    textElement.innerHTML = text.slice(0, index)
    index++

    // para continuar escrevendo
    if (index > text.length) {
        index = 1
    }

    setTimeout(writeText, speed)
}

speedElement.addEventListener('input', (e) => {
    speed = 300 / e.target.value
})