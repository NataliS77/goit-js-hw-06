 const textInput = document.querySelector('#validation-input')


textInput.addEventListener('blur',  () =>{
    if (textInput.value.length == textInput.getAttribute('data-length')) {
        textInput.classList.add('valid');
        textInput.classList.remove('invalid');
    } else {
        textInput.classList.remove('valid');
        textInput.classList.add('invalid');
    }

});
// textInput.addEventListener('blur', function () {
//     if (textInput.textContent.length == textInput.dataset.length) {

//        return textInput.classList.add('valid');

//     }
//        return textInput.classList.add('invalid');

// });

console.log(textInput.classList)

