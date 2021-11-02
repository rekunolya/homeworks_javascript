//Задание 1
let a = 1;
let b = 2;
let c = " белых медведей";
let rezult = a+(b+c);
console.log (rezult);

//Задание 2
let a2 = 10;
let b2 = 2;
let c2 = 5;
let summ2 = a2+b2+c2;
alert (summ2);
console.log (summ2);

//задание 3
let num = 10;
num++;    //num = ++num;
num++;  //num = num++;
num--;    //num = num--;
alert(num);

//Задание 4
let a4 = 36;
let b4 = 4;
let c4 = 9;
let d4 = 23;
let e4 = 5;
if (a4 < b4) {
   a4 = b4;
}
if (a4 < c4) {
    a4 = c4;
}
if (a4 < d4) {
    a4 = d4;
}
if (a4 < e4) {
    a4 = e4;
}
console.log (a4);

//Задание5
let a5 = 5 % 3;
let b5 = 3 % 5;
let c5 = 5 + '3';
let d5 = '5'-3;
let e5 = 75 + 'кг';
alert (a5 + ',' +  b5 + ',' +  c5 + ',' +  d5 + ','+  e5);
//let rezult5 = [a5, b5, c5, d5, e5];
//alert (rezult5)
console.log (a5, b5, c5, d5, e5);

//Задание 6
let x = 55;
let y = 63;
if  (x<y) {
  alert (x)
    console.log (x)
} else {
   alert (y)
    console.log (y)
}

// Задание 7
//-   Напишите цикл от 0 до 15. И в каждой итерации цикла нужно проверить четное число или нечетное.
//-   И вывести в консоли, результат будет выглядеть примерно так:
//-   0 это четное
//-   1 это нечетное

for (let i=0; i<=15; i++) {
    if (i % 2 == 0) {
        console.log (i + ' это четное число')
    } else {
        console.log (i +  ' это нечетное число')
    }
}

//Задание 8
//-   Написать цикл, который будет итерироватся от 1 до 100.
//-   На каждой итерации цикла нужно проверить:
//-   если число кратное 3 - то вывести в консоль строку Fizz,
//-   если число кратное 5 - то вывести в консоль строку Buzz,
//-   если число кратное и 3 и 5 - то вывести FizzBuzz

for (let i = 0; i <= 100; i++){
   if (i % 3 == 0 && i % 5 == 0) {
        console.log ('FizzBuzz')
    } else if (i % 3 == 0) {
        console.log ('Fizz')
    } else if (i % 5 == 0) {
        console.log ('Buzz')
    }
}

//Задание 9
//-   Написать цикл от 0 до 1000. Высчитать сумму всех чисел кратных 4 
//и сумму всех чисел кратных 3.
let sum4 = 0;
let sum3 = 0;
for (let i = 0; i <= 1000; i++){
    if (i % 4 == 0) {
  sum4  = sum4 + i;
          } 
    if (i % 3 == 0) {
        sum3 = sum3 + i;
    }           
}
console.log (sum4 + ", " + sum3);

// Задание 10
let a10 = 23;
let b10 = -3;
let c10 = -36;
if (a10 < 0) {
   a10 = '-'
} else {
    a10 = '+'
}
if (b10 < 0) {
   b10 = '-'
} else {
    b10 = '+'
}
if (c10 < 0) {
    c10 = '-'
} else {
    c10 = '+'
}
alert (a10 + ', ' + b10 + ', ' + c10);
console.log (a10, b10, c10);

//Задание 11
let string = 'hello';
let number = 123;
let flag = true;
let txt = 'true';
console.log ('Какой тип переменной?', typeof string);
console.log ('Какой тип переменной?', typeof number);
console.log ('Какой тип переменной?', typeof flag);
console.log ('Какой тип переменной?', typeof txt);

//Задание 12
//Создайте переменные a1, a2, a3, a4, a5. 
//При помощи математических операторов найдите значения выражений:
//(5 + 3) * (5 - 3), 
//(10 - 6) * 200, 
//(534 * 132) / 18,
// 123 * 3 + 10, 
//12 * 13 * 14;
//Поместив результат каждого выражения в соответствующую переменную.
//Вывести все результаты через запятую используя alert или console.log
let a12 = (5+3) * (5-3);
let b12 = (10-6) * 200;
let c12 = (534*132) / 18;
let d12 = 123 * 3 + 10;
let e12 = 12 * 13 * 14;
alert (a12 + ', ' + b12 + ', ' + c12 + ', ' + d12 + ', ' + e12);
console.log (a12, b12, c12, d12, e12);

// Задание 13
//- С помощью диалогового окна prompt попросите пользователя ввести любое челое число.
// После чего отобразите alert, говорящий четное или не четное это число.
var z = prompt('Введите любое число', '')
if (z % 2 == 0) {
    alert ('Четное число');
} else {
    alert ('Нечетное число');
}

//Задание 14
//Даны размер кредита — 1 тыс.бел.руб,
//процентная ставка — 10%,
//количество лет — 5.
//Найти переплату по кредиту.

let kredit = 1000;
let percent = 10;
let month = 60;
let base_pay = kredit / month;
let percent_pay = 0;
for (let i = month; i >=0; i--) 
{
percent_pay= percent_pay + (kredit * percent / 100 /12);
kredit = kredit - base_pay;
}
console.log (percent_pay);

// Задание 15
// Создайте объект product со следующими свойствами: name, price, type, releaseDate, manufacturer, country, isGaranty. 
// Заполните их значениями, кажущимися вам подходящими. 
// И выведите значение каждого из свойств в консоль.
let product = {
   name: 'Xalva', 
    price: 123, 
    type: 'protuct', 
    releaseDate: '23/02/2020', 
    manufacturer: 'krasny', 
    country: 'Belarus', 
   isGaranty: true 
}
console.log (product.name);
console.log (product.price);
console.log (product.type);
console.log (product.releaseDate);
console.log (product.manufacturer);
console.log (product.country);
console.log (product.isGaranty);

//Задание 16
const under18 = []
const adult = []
const family = [
    {
       name: 'Iryna',
        age: 56
    },
    {
        name: 'Andrew',
        age: 50
    },
    {
       name: 'Nikolay',
        age: 5
    },
    {
        name: 'Elena',
        age: 25
    },
    {
        name: 'Viachaslau',
        age: 9
    },
    {
        name: 'Sviatlana',
        age: 54
    },
    {
        name: 'Anna',
        age: 6
    }
]
for (i = 0; i < family.length; i++){
if (family[i].age < 18) {
    under18.push(family[i])

} else {
    adult.push (family[i])
}
}
console.log(under18);
console.log(adult);

//Задание 17
let str1 = '';
for (let i = 1; i <= 5; i++) { 
        for (j = 0; j < i; j++){
       str1 += '#'
   }
    str1 +='\n';  
    // for (let i = 0; i <= 5; i++) {
    // str1 += '#'.repeat(i) + '\n'
    // }
}
console.log (str1)