const inputEl = document.querySelector('#font-size-control');
const textIdEl = document.querySelector('#text')

console.log(inputEl)
console.log(textIdEl)
inputEl.addEventListener('input', onInputElChange)

function onInputElChange(event) {
    textIdEl.style.fontSize = inputEl.value +'px'
    
}