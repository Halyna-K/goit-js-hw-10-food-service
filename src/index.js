import menuList from '/menu.json';
import menuTemplates from './templates/libs.hbs';
import './styles.css';

// const imagesItemEl = document.createElement('li');
// imagesItemEl.classList.add('gallery__item');
// const imagesLinkEl = document.createElement('a');
// imagesLinkEl.classList.add('gallery__link');
// imagesLinkEl.href = `${galleryItem.original}`;
// imagesLinkEl.insertAdjacentHTML(
//   'afterbegin',
//   `<img class= "gallery__image" src = ${galleryItem.preview} data-source = ${galleryItem.original} alt = ${galleryItem.description} width = 100%>`,
// );

// console.log(menuTemplates);
const menu = document.querySelector('.menu');
const markup =
  // menuTemplates(menuList);
  menuList.map(menuTemplates).join('');
menu.insertAdjacentHTML('beforeend', markup);

// console.log(menu);
