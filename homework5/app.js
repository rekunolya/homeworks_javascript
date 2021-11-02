'use strict'
//Задание 33
let fruits = [
    'banan',
    'orange',
    'apple',
    'orange',
    'lemon',
    'apple',
    'orange',
    'lemon',
    'watermelon'
  ]

function countFruit(fruits) {
  
  let countedFruit = {}
  for (let i = 0; i < fruits.length; i++) {
    let a = fruits[i]
    if (countedFruit[a] != undefined) {
      countedFruit[a] = countedFruit[a]+1 //++countedFruit[a]
    } else {
      countedFruit[a] = 1
    }
  }
  return countedFruit
}
let rezultFruit = countFruit(fruits)
console.log(rezultFruit)

// Задание 34
let object = {
    a: 'b',
    c: 'd',
    e: 'f',
  }
//let reverseObject = {}
function convertObject(object) {
  let reverseObject = {}
  let keys = Object.keys(object)
  let value = Object.values(object)
  for (let i = 0; i < keys.length; i++) {
    reverseObject[value[i]] = keys[i]
  }
  return reverseObject
}
let rezultObject = convertObject(object) // => { b: 'a', d: 'c' }
console.log(rezultObject)
