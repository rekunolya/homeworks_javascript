'use strict'
let container = document.createElement('div')
container.classList.add('container')
document.querySelector('#app').append(container)
function getFilm(film) {
  return `
   
    <div class="card">
    <a href = "${film.href}">
        <img src = "${film.image}">
        <div class="title">${film.title}</div>
        <div class="date">${film.date}</div>
        <div class="price">${film.price}</div>
        </a>
    </div>
  
    `
}

async function getDataFilm() {
  const response = await fetch('./src/data/movies.json')
  const data = await response.json()
  data.forEach((el) => {
    document
      .querySelector('.container')
      .insertAdjacentHTML('beforeend', getFilm(el))
  })
}
getDataFilm()
