// Напиши скрипт, который изменяет цвета фона элемента <body> 
//через инлайн стиль при клике на button.change - color и выводит значение цвета в span.color.
//Для генерации случайного цвета используй функцию getRandomHexColor.



const bodyEl= document.querySelector('.js-color')
const colorSpan = document.querySelector('.color');
const btn = document.querySelector('.change-color')
console.log(bodyEl)
console.log(btn)

btn.addEventListener('click',onFormSubmit)

function onFormSubmit() {
  bodyEl.style.backgroundColor = getRandomHexColor();
  colorSpan.textContent = bodyEl.style.backgroundColor
}

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16).padStart(6, 0)}`;
}