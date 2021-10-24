const boxes = document.querySelectorAll('.box')

window.addEventListener('scroll', checkBoxes) // quando ocorrer o evento de scroll na janela

checkBoxes() // quando a janela for carregada já chamará a função

function checkBoxes() {
    // console.log(window.innerHeight)
    const triggerBottom = window.innerHeight / 5 * 4

    boxes.forEach(box => {
        const boxTop = box.getBoundingClientRect().top

        if (boxTop < triggerBottom) {
            box.classList.add('show')
        } else {
            box.classList.remove('show')
        }
    })
}