const sliderList = document.querySelectorAll('.slider');
// console.log(sliderList)
const btnLeft = document.getElementById('left');
const btnRight = document.getElementById('right');

let body = document.body;
let currentActive = 0;

btnRight.addEventListener('click', () => {
    currentActive++;

    if (currentActive == sliderList.length) {
        currentActive = 0;
        // console.log(currentActive);
    }

    update();
    setBgToBody();
})

btnLeft.addEventListener('click', () => {
    currentActive--;

    if (currentActive == -1) {
        currentActive = sliderList.length - 1;
        // console.log(currentActive)
    }

    update();
    setBgToBody();
})

function update() {
    sliderList.forEach(slider => slider.classList.remove('active'))
    sliderList[currentActive].classList.add('active');
}

function setBgToBody() {
    body.style.backgroundImage = sliderList[currentActive].style.backgroundImage;
}

setBgToBody();