import menuList from './menu.json';
import menuTemplates from './templates/menu.hbs';
import { refs } from './js/refs.js';
import { setSavedValue, onChangeTheme } from './js/hundler.js';
import './styles.css';

const markup = menuList.map(menuTemplates).join('');
refs.menu.insertAdjacentHTML('beforeend', markup);

refs.switch.addEventListener('change', onChangeTheme);
setSavedValue(refs.switch);
