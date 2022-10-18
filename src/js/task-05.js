const refs = {
    inputText: document.querySelector('#name-input'),
    spanText: document.querySelector('#name-output'),
    
};

refs.inputText.addEventListener('input', onInputChange)

function onInputChange(event) {
    console.log(event.currentTarget.value);
    refs.spanText.textContent = event.currentTarget.value;
    
}