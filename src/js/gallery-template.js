import galleryItems from '../templates/gallery-items.hbs';
import menu from '../menu.json';

const Themes = {
  LIGHT: 'light-theme',
  DARK: 'dark-theme',
};

const defaultTheme = Themes.LIGHT;
const THEME_KEY = 'current-theme';
const getCurrentTheme = () => localStorage.getItem(THEME_KEY);
const loadTheme = theme => {
  localStorage.setItem(THEME_KEY, theme);
  document.body.classList.add(theme);

  if (theme === Themes.DARK) {
    checkbox.checked = true;
  }
}; 

// Checkbox click handler
const checkbox = document.querySelector('#theme-switch-toggle');
if (checkbox) {
  checkbox.addEventListener('change', () => {
    const currentTheme = getCurrentTheme();

    if (currentTheme) {
      document.body.classList.remove(currentTheme);

      if (currentTheme === Themes.LIGHT) {
        loadTheme(Themes.DARK);
      } else {
        loadTheme(Themes.LIGHT);
      }
    }
  });
}

loadTheme(getCurrentTheme() || defaultTheme);

const markup = galleryItems({ items: menu });

const menuBlock = document.querySelector('ul.menu');

if (menuBlock) {
  menuBlock.insertAdjacentHTML('beforeend', markup);
}
