import { theme } from './theme-list.js';
import refs from './refs.js';

const { LIGHT, DARK } = theme;
const { inputEl, bodyEl } = refs;

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
