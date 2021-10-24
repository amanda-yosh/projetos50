const labels = document.querySelectorAll('.form-control label')

labels.forEach(label => {
    label.innerHTML = label.innerText
        .split('') //splits the letters into an array
        .map((letter, idx) => `<span style="transition-delay: ${idx * 50}ms">${letter}</span>`) // an array of span now
        .join('') // transform back to a string
})