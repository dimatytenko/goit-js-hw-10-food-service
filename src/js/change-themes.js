import theme from './theme-list.js';
const inputEl = document.querySelector('.theme-switch__toggle');
const bodyEl = document.querySelector('body');

const { LIGHT, DARK } = theme;

abracadabra();

inputEl.addEventListener('change', onThemeChange);

function onThemeChange(event) {
  if (bodyEl.classList.contains(LIGHT)) {
    bodyEl.classList.replace(LIGHT, DARK);
    localStorage.setItem('theme', DARK);
  } else {
    bodyEl.classList.replace(DARK, LIGHT);
    localStorage.setItem('theme', LIGHT);
  }
}
function abracadabra() {
  const savedTheme = localStorage.getItem('theme');
  if (savedTheme === DARK) {
    bodyEl.classList.add(savedTheme);
    inputEl.checked = true;
  } else {
    bodyEl.classList.add(LIGHT);
  }
}
