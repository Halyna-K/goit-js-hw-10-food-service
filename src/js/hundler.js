import { refs, theme } from '../js/refs.js';

   export function onChangeTheme() {
       const themeChecked = refs.switch.checked;
      if (themeChecked) {
        document.body.classList.remove(theme.LIGHT);
        document.body.classList.add(theme.DARK);
        localStorage.setItem('theme', theme.DARK);
      } else {
        document.body.classList.remove(theme.DARK);
        document.body.classList.add(theme.LIGHT);
        localStorage.setItem('theme', theme.LIGHT);
      }
    }

 export function setSavedValue(e){
     if (localStorage.getItem('theme') === null) {
       e.checked = true;
       localStorage.setItem('theme', theme.DARK);
     } else{
       e.checked = localStorage.getItem('theme') == theme.DARK;
       document.body.classList = localStorage.getItem('theme');
     }
   }
