'use strict'
function removeActiveClasses(arr, clsName) {
  arr.forEach((item) => {
    item.classList.remove(clsName)
  })
}

function initSlider(selector) {
  const slides = document.querySelectorAll(selector)
  slides.forEach((slide) => {
    slide.addEventListener('click', () => {
      removeActiveClasses(slides, 'active')
      slide.classList.add('active')
    })
  })
}

initSlider('#slider1 .slider__slide')
initSlider('#slider2 .slider__slide')
initSlider('#slider3 .slider__slide')
