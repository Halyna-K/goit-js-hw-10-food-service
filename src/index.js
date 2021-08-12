import menuList from './menu.json';
import menuTemplates from './templates/templatesMenu.hbs';
import './styles.css';

console.log(menuList);
console.log(menuTemplates);
const menu = document.querySelector('.js-menu');
const markup = menuList.map(menuTemplates).join('');
menu.insertAdjacentHTML('beforeend', markup);
