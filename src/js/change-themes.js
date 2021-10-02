import { theme } from './theme-list.js';
import refs from './refs.js';

const { LIGHT, DARK } = theme;
const { inputEl, bodyEl } = refs;

setTheme();

inputEl.addEventListener('change', onThemeChange);

function onThemeChange(event) {
  console.log(event.target.checked);
  if (event.target.checked) {
    return changeTheme(LIGHT, DARK);
  }
  changeTheme(DARK, LIGHT);
}
function setTheme() {
  const savedTheme = localStorage.getItem('theme');
  if (savedTheme === DARK) {
    bodyEl.classList.add(savedTheme);
    inputEl.checked = true;
  } else {
    bodyEl.classList.add(LIGHT);
  }
}

function changeTheme(del, add) {
  bodyEl.classList.replace(del, add);
  localStorage.setItem('theme', add);
}
