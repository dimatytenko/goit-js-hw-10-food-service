const inputEl = document.querySelector('.theme-switch__toggle');
const bodyEl = document.querySelector('body');
const Theme = {
  LIGHT: 'light-theme',
  DARK: 'dark-theme',
};
const { LIGHT, DARK } = Theme;

bodyEl.classList.add(LIGHT);
localStorage.setItem('theme', LIGHT);

inputEl.addEventListener('change', onThemeChange);

function onThemeChange(event) {
  bodyEl.classList.toggle(LIGHT);
  bodyEl.classList.toggle(DARK);
}
