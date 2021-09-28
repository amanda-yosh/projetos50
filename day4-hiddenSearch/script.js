const search = document.querySelector('.search');
const button = document.querySelector('.btn');
let input = document.querySelector('.input');

button.addEventListener('click', () => {
    search.classList.toggle('active');
    input.focus();
})
