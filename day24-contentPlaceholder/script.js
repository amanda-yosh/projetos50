const header = document.getElementById('header')
const title = document.getElementById('title')
const excerpt = document.getElementById('excerpt')
const profile_img = document.getElementById('profile_img')
const name = document.getElementById('name')
const date = document.getElementById('date')

// Node Lists
const animated_bgs = document.querySelectorAll('.animated-bg')
const animated_bg_texts = document.querySelectorAll('.animated-bg-text')

setTimeout(getData, 2500) // after 2500s the function getData will be called

// defining the data that we wnat to insert
function getData() {
    header.innerHTML = `<img src="https://images.unsplash.com/photo-1632624011013-baf2251f5de0?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=729&q=80" alt="">`
    title.innerHTML = `Lorem ipsum dolor sit.`
    excerpt.innerHTML = `Lorem ipsum dolor sit, amet consectetur adipisicing elit. Earum eaque praesentium mollitia doloremque vero! At!`
    profile_img.innerHTML = `<img src="https://randomuser.me/api/portraits/men/45.jpg" alt="">`
    name.innerHTML = `John Doe`
    date.innerHTML = `Oct 08, 2020`

    animated_bgs.forEach(bg => bg.classList.remove('animated-bg'))
    animated_bg_texts.forEach(bg => bg.classList.remove('animated-bg-text'))
}