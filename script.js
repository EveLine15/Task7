// Задание 1
// Описать в html тег input и тег ul. По нажатию на клавишу в инпуте в список ul должен добавляться элемент li. Содержимое li - нажатая клавиша.

// const input = document.querySelector('input');
// const ul = document.querySelector('ul');

// input.addEventListener('keydown', (event) => {
//     const li = document.createElement('li');
//     li.innerText = event.key;
//     ul.appendChild(li);
// });


// Задание 2
// Вставить в html тег input (просто предусмотреть в разметке).
// Обрабатывая событие keyup на теге input, выводить в консоль введенный текст каждый раз, как только клиент вписывает любой символ в
// поле (или стирает любой символ из поля). Вам понадобится считывать значение поля, это input.value

// const input = document.querySelector('input');

// input.addEventListener('keyup', (event) => {
//     console.log(event.value);
// });


// Задание 3
// Создать в html форму с инпутом и кнопкой. Также добавить в html тег ul. Когда форма отправляется, добавлять в список тег li. Его содержимое - введенный
// текст (input.value). После отправки формы инпут должен быть очищен (проставить пустую строку в value).

// const form = document.querySelector('form');
// const input = document.querySelector('input');
// const ul = document.querySelector('ul');

// form.addEventListener('submit', () => {
//     const li = document.createElement('li');
//     li.innerText = input.value;
//     ul.appendChild(li);
//     input.value = '';
// });


// Задание 4
// Калькулятор. 
// Создать в html форму с текстовым input, тегом select, вторым текстовым input и кнопкой. Добавить в html div. Внутри select будут options - арифметические знаки.
// В оба инпута пользователь вводит число. Когда пользователь отправляет форму (событие submit), над двумя числами выполняется действие, выбранное в select 
// (чтобы получить выбранный пользователем option, мы "забираем" значение  select.value). Результат отображается в div.
// 1) решить с помощью if
// 2) решить с помощью evel (https://developer.mozilla.org/...)

//1)
const number1 = document.querySelector('#number1');
const number2 = document.querySelector('#number2');
const sign = document.querySelector('#signs')
const result = document.querySelector('#result');
const form = document.querySelector('form');
const button = document.querySelector('button');

form.addEventListener('submit', (event) => {
    event.preventDefault();
    let answer = 0;
    // if(sign.value == '+') answer = +number1.value + +number2.value;
    // if(sign.value == '-') answer = +number1.value - +number2.value;
    // if(sign.value == '/') answer = (+number1.value / +number2.value).toFixed(3);
    // if(sign.value == '*') answer = +number1.value * +number2.value;

    sign.value == '/' ? answer = eval(`${number1.value} ${sign.value} ${number2.value}`).toFixed(3) : answer = eval(`${number1.value} ${sign.value} ${number2.value}`);
    result.textContent = answer;
});


// Задание 5
// Вставить в разметку html тег button без js (просто предусмотреть в разметке). При наведении на кнопку изменять ее цвет каждый раз рандомным цветом.
// При выведении мышки за пределы кнопки поворачивать кнопку на рандомный угол от -180 до 180 градусов. Использовать обработку событий mouseenter, mouseleave на этой кнопке.

// const button = document.querySelector('button');

// function getRandomColor() {
//     return Math.floor(Math.random() * 256);
//   }

//   function getRandomAngle() {
//     return Math.floor(Math.random() * (181 - -180) + -180); 
//   }

// button.addEventListener('mouseenter', () => {
//     button.style.backgroundColor = `rgb(${getRandomColor()}, ${getRandomColor()}, ${getRandomColor()})`;
// });

// button.addEventListener('mouseleave', () => {
//     button.style.rotate = `${getRandomAngle()}deg`;
// });