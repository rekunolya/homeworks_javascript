'use strict'

//Задача 44
function sum(a) {
  return function someFunction(b) {
    return a + b
  }
}
let rezult = sum(9)(-2)
console.log(rezult)

//Задача 43
function summTo(n) {
  if (n > 1) {
    return n + summTo(n - 1)
  } else {
    return n
  }
}

console.log(summTo(100))


//Задача 42
/* - Создайте функцию-конструктор Calculator, который создаёт объекты 
с тремя методами:

- read() запрашивает два значения при помощи prompt и сохраняет их значение 
в свойствах объекта.
- sum() возвращает сумму введённых свойств.
- mul() возвращает произведение введённых свойств.

- Например
*/
function Calculator() {
  this.read = function () {
    this.number1 = +prompt ('Введите число1');
    this.number2 = +prompt ('Введите число2');
  }
  this.sum = function () {
    return this.number1 + this.number2
  }
  this.mul = function () {
    return this.number1 * this.number2
  }
}
let calculator = new Calculator();
calculator.read();

alert('Sum=' + calculator.sum());
alert('Mul=' + calculator.mul());