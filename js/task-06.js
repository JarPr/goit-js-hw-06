const validationInput = document.querySelector('#validation-input');


const handler = event => {
    const inputValueLength = event.currentTarget.value.length;
    if (inputValueLength === Number(validationInput.dataset.length)) {
        validationInput.classList.add('valid');
        validationInput.classList.remove('invalid');
    }
    else {
        validationInput.classList.add('invalid');
        validationInput.classList.remove('valid');
    }
}

validationInput.addEventListener('blur', handler)


