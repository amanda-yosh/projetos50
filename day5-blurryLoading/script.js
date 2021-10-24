const loadText = document.querySelector('.loading-text')
const bg = document.querySelector('.bg')

let load = 0

let int = setInterval(blurring, 30) // 30 miliseconds

const scale = (num, in_min, in_max, out_min, out_max) => {
    return (num - in_min) * (out_max - out_min) / (in_max - in_min) + out_min;
}

function blurring() {
    load++
    // while (load < 100) {
    //     load++

    //     loadText.innerText = `${load}%`
    //     loadText.querySelector.opacity = scale(load, 0, 100, 1, 0)
    // }

    if (load > 99) {
        clearInterval(int)
    }

    loadText.innerText = `${load}%`
    loadText.style.opacity = scale(load, 0, 100, 1, 0)

    bg.style.filter = `blur(${scale(load, 0, 100, 50, 0)}px)`

    // console.log(load)
}