import cards from './menu.json';
import itemsTemplate from './gallery-items.hbs';

const galleryRef = document.querySelector('.js-menu');

const markup = itemsTemplate(cards);
galleryRef.insertAdjacentHTML('beforeend', markup);
