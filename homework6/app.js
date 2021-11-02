'use strict'
//Задача 35
let array = [23, 59, 61, 14, 78]
let newArray = array.reverse()
console.log('Перевернутый массив:', newArray)

//Задача 36
let array36 = [
  1,
  2,
  3,
  4,
  5,
  6,
  7,
  8,
  9,
  10,
  11,
  12,
  13,
  14,
  15,
  16,
  17,
  18,
  19,
  20,
]
let sumArray36 = array36.reduce((a, b) => a + b)
console.log('Сумма массива:', sumArray36)

//Задача 37
let object = {
  name: 'b',
  language: 'd',
  country: 'f',
}
function convertObject(object) {
  let reverseObject = {}
  let keys = Object.keys(object)
  keys.forEach((key) => {
    let value = object[key]
    reverseObject[value] = key
  })
  return reverseObject
}
let rezultObject = convertObject(object) // => { b: 'a', d: 'c' }
console.log(rezultObject)

//Задача39
let gender = [
  {
    name: 'Ira',
    isMale: false,
  },
  {
    name: 'Slava',
    isMale: true,
  },
  {
    name: 'Sema',
    isMale: true,
  },
  {
    name: 'Anna',
    isMale: false,
  },
  {
    name: 'Sofia',
    isMale: false,
  },
  {
    name: 'Misha',
    isMale: true,
  },
  {
    name: 'Vasya',
    isMale: true,
  },
  {
    name: 'Lena',
    isMale: false,
  },
]
let male = []
let female = []

function findOutGender(a, b) {
  if (b.isMale) {
    male.push(b.name)
  } else {
    female.push(b.name)
  }
  return gender
}
gender.reduce(findOutGender, 0)
console.log(male)
console.log(female)

//Задача 40
let array40 = [
  'Slava',
  9,
  'Anna',
  undefined,
  'Ira',
  null,
  'Kate',
  0,
  89,
  '',
  'Sema',
  false,
]
function clearArray(array40) {
  let newArray40 = []
  array40.forEach((element) => {
    if (element) {
      newArray40.push(element)
    }
  })
  return newArray40
}
let rezultNewArray = clearArray(array40)
console.log(array40)
console.log(rezultNewArray)

//Задача 38
let calculate = [
  { x: 1, z: 2, y: 3 },
  { x: 10, z: 21, y: 4 },
  { x: 2, z: 3, y: 4 },
  { a: 1, b: 2 },
]

function calculatedArray(arr) {
  let calcArray = {}
  arr.forEach((elemarr) => {
    for (let elem in elemarr) {
      if (calcArray[elem] != undefined) {
        calcArray[elem] = calcArray[elem] + elemarr[elem]
      } else {
        calcArray[elem] = elemarr[elem]
      }
    }
  })
  return calcArray
}

let rezultCalculatedArray = calculatedArray(calculate)
console.log(rezultCalculatedArray)

//Задача 41
let array41 = [23, 56, 34, 97, 61, 17, 29]
function splitArray(arr, size) {
  let smallArray = []
  for (let i = 0; i < arr.length; i = i + size) {
    smallArray.push(array41.slice(i, i + size))
  }
  return smallArray
}
let newArray41 = splitArray(array41, 3)
console.log(newArray41)
