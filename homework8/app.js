'use strict'

let auto = [
  {
    img: './img/opel.jpg',
    brand: 'Opel',
    model: 'Vectra',
    year: 2003,
    price: 4500,
    engine_voluem: 2.2,
    fuel: 'disel',
  },
  {
    img: 'https://masllo.com/wp-content/uploads/2017/11/honda-cr-v-02.jpg',
    brand: 'Honda',
    model: 'CR-V',
    year: 2013,
    price: 16000,
    engine_voluem: 2.4,
    fuel: 'petrol',
  },
  {
    img:
      'https://static.lada.ru/images_new/cars/about/vesta/v_sw_c/vesta-sw-cross-000.jpg',
    brand: 'Lada',
    model: 'Vesta',
    year: 2019,
    price: 17000,
    engine_voluem: 1.6,
    fuel: 'petrol',
  },
  {
    img:
      'https://cdn.riastatic.com/photosnew/auto/photo/Lexus_NX-200__272048962f.jpg',
    brand: 'Lexus',
    model: 'NX',
    year: 2020,
    price: 50000,
    engine_voluem: 2.0,
    fuel: 'petrol',
  },
  {
    img: 'https://wroom.ru/i/cars2/mercedesbenz_glecoupe_1.jpg',
    brand: 'Mercedes-Benz',
    model: 'Gle',
    year: 2015,
    price: 49000,
    engine_voluem: 3.0,
    fuel: 'disel',
  },
  {
    img:
      'https://auto.ironhorse.ru/wp-content/uploads/2012/05/toyota-rav4-2012.jpg',
    brand: 'Toyota',
    model: 'RAV4',
    year: 2012,
    price: 16000,
    engine_voluem: 2.2,
    fuel: 'disel',
  },
  {
    img:
      'https://cars-cars-cars.ru/upload/iblock/d65/d659dd70befc1ef357d49fc36b99f28a.jpg',
    brand: 'Seat',
    model: 'Toledo',
    year: 2000,
    price: 3200,
    engine_voluem: 1.9,
    fuel: 'disel',
  },
  {
    img: 'https://i.ytimg.com/vi/Vmgz50WZUqc/maxresdefault.jpg',
    brand: 'Hyundai',
    model: 'Santa Fe',
    year: 2019,
    price: 41500,
    engine_voluem: 2.2,
    fuel: 'disel',
  },
  {
    img: 'https://avtomarket.ru/stuff/upload/68/192230_1ohtqy39ut_13317507.jpg',
    brand: 'Kia',
    model: 'Rio',
    year: 2007,
    price: 3950,
    engine_voluem: 1.4,
    fuel: 'petrol',
  },
]
let bugetCars = auto.filter((el) => el.price <= 10000)
let middleCars = auto.filter((el) => el.price > 10000 && el.price < 40000)
let premiumCars = auto.filter((el) => el.price >= 40000)

function createCardHTML(arr, cls) {
  let cardContainer = document.createElement('div')
  cardContainer.className = 'cardContainer'
  cardContainer.classList.add(cls)

  arr.forEach((element) => {
    let card = document.createElement('div')
    let image = document.createElement('img')
    let brand = document.createElement('div')
    let model = document.createElement('div')
    let year = document.createElement('div')
    let price = document.createElement('div')
    let engine_voluem = document.createElement('div')
    let fuel = document.createElement('div')

    card.className = 'card'
    brand.className = 'card__name'
    price.className = 'card__price'

    image.src = element.img
    brand.innerHTML = element.brand
    model.innerHTML = element.model
    year.innerHTML = element.year
    price.innerHTML = element.price
    engine_voluem.innerHTML = element.engine_voluem
    fuel.innerHTML = element.fuel

    card.appendChild(image)
    card.appendChild(brand)
    card.appendChild(model)
    card.appendChild(year)
    card.appendChild(price)
    card.appendChild(engine_voluem)
    card.appendChild(fuel)

    cardContainer.appendChild(card)
    console.log(card)
  })
  return cardContainer
}
document.body.append(createCardHTML(bugetCars, 'bugetCars'))
document.body.append(createCardHTML(middleCars, 'middleCars'))
document.body.append(createCardHTML(premiumCars, 'premiumCars'))
