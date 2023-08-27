function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

const button = document.querySelector('.change-color');
const body = document.querySelector('body');
const color = document.querySelector('.color');

button.addEventListener('click', () => {
  let hexColor = getRandomHexColor();
  body.style.backgroundColor = hexColor;
  color.textContent = hexColor;
})

