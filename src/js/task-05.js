const inputField = document.querySelector('#name-input');
const outputName = document.querySelector('#name-output');

inputField.addEventListener('input', inputChange);

function inputChange(event) {
    const inputValue = event.currentTarget.value;
    outputName.textContent = inputValue === '' ? 'Anonymous' : inputValue;
}
