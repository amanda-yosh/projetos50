// https://icanhazdadjoke.com/api

const jokeEl = document.getElementById('joke')
const jokeBtn = document.getElementById('jokeBtn')

generateJoke()
jokeBtn.addEventListener('click', generateJoke)

// function generateJoke() {
//     const config = {
//         headers: {
//             'Accept': 'application/json'
//         }
//     }

//     fetch('https://icanhazdadjoke.com', config)
//         .then(response => response.json())
//         .then(data => {
//             // console.log(data)
//             jokeEl.innerHTML = data.joke

//         })
// }

// Doing with assync await

async function generateJoke() {
    const config = {
        headers: {
            'Accept': 'application/json'
        }
    }

    const response = await fetch('https://icanhazdadjoke.com', config)

    const data = await response.json()

    jokeEl.innerHTML = data.joke
}