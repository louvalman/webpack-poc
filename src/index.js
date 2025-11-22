console.log('index.js loaded');
import './styles.css';
import homePage from './home';
import menuPage from './menu';
import aboutPage from './about';
import contactPage from './contact';

let contentWrapper = document.querySelector('.content');

let home = document.querySelector('.home');
let about = document.querySelector('.about');
let menu = document.querySelector('.menu');
let contact = document.querySelector('.contact');

homePage();

home.addEventListener('click', () => {
  contentWrapper.innerHTML = '';
  homePage();
});

menu.addEventListener('click', () => {
  contentWrapper.innerHTML = '';
  menuPage();
});

about.addEventListener('click', () => {
  contentWrapper.innerHTML = '';
  aboutPage();
});

contact.addEventListener('click', () => {
  contentWrapper.innerHTML = '';
  contactPage();
});
