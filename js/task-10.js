// Напиши скрипт создания и очистки коллекции элементов. 
// Пользователь вводит количество элементов в input и нажимает кнопку
// Создать, после чего рендерится коллекция.При нажатии на кнопку
// Очистить, коллекция элементов очищается.
// Создай функцию createBoxes(amount), которая принимает один параметр - число. 
// Функция создает столько < div >, сколько указано в amount и добавляет их в div#boxes.

// Размеры самого первого <div> - 30px на 30px.
// Каждый элемент после первого, должен быть шире и выше предыдущего на 10px.
// Все элементы должены иметь случайный цвет фона в формате HEX.
// Используй готовую функцию getRandomHexColor для получения цвета.

// Создай функцию destroyBoxes(), которая очищает содержимое div#boxes,
//   тем самым удаляя все созданные элементы.

// const refs = {
//   createBtn: document.querySelector('[data-create]'),
//   destroyBtn: document.querySelector('[data-destroy]'),
//   numberInput: document.querySelector('number'),
//   divBox: document.querySelector('#boxes'),
// };
// console.log(refs.createBtn)
// let totalNummberInput = 30;
// refs.createBtn.addEventListener('click', createBoxes)

// refs.destroyBtn.addEventListener('click', destroyBoxes)

// function onNummberInput(event) {
//   totalNummberInput = event.currentTarget.value
// }
// function createBoxes(amount) {
//   amount = totalNummberInput
//   console.log(amount);

//   for (let i = 1; i <= amount; i += 1) {
//     const divEl = document.createElement('div');
//     divEl.style.cssText = `width: ${30 + (i - 1) * 10}px; higth: ${30 + (i - 1) * 10}px; backgroundColor: ${getRandomHexColor} `
//     refs.divBox.append(divEl);
//   }
// }
// function destroyBoxes() {
//   refs.divBox.querySelectorAll('div').forEach(element=>element.remove()) 
//  } 


// refs.numberInput.addEventListener('input', onNummberInput)

// function getRandomHexColor() {
//   return `#${Math.floor(Math.random() * 16777215).toString(16).padStart(6, 0)}`;
// }
