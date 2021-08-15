import { refs, theme } from '../js/refs.js';

 export function onChangeTheme() {
   const themeChecked = refs.switch.checked;
   if (themeChecked) {
    document.body.classList.add(theme.DARK);
    document.body.classList.remove(theme.LIGHT);
    localStorage.setItem('theme', theme.DARK);
   } else {
    document.body.classList.add(theme.LIGHT);
    document.body.classList.remove(theme.DARK);
    localStorage.setItem('theme', theme.LIGHT);
   }
 }
