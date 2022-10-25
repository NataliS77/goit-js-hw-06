const inputEl = document.querySelector('#font-size-control');
const textIdEl = document.querySelector('#text')

console.log(inputEl)
console.log(textIdEl)
inputEl.addEventListener('input', onInputElChange)

function onInputElChange(event) {
    textIdEl.style.fontSize = inputEl.value +'px'
    
}
    // Напиши скрипт, который реагирует на изменение значения input#font-size-control 
    //(событие input) и изменяет инлайн - стиль span#text обновляя свойство font - size.
 //В результате при перетаскивании ползунка будет меняться размер текста.