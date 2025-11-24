import './styles.css';
import homePage from './pages/home';
import menuPage from './pages/menu';
import aboutPage from './pages/about';
import contactPage from './pages/contact';
import { createButton } from './components/button';

let nav = document.querySelector('nav');
let contentWrapper = document.querySelector('.content');

let homeBtn = createButton({
  label: 'Home',
  onClick: loadHome,
  classes: ['btn'],
});
nav.appendChild(homeBtn);

let menuBtn = createButton({
  label: 'Menu',
  onClick: loadMenu,
  classes: ['btn'],
});
nav.appendChild(menuBtn);

let aboutBtn = createButton({
  label: 'About',
  onClick: loadAbout,
  classes: ['btn'],
});
nav.appendChild(aboutBtn);

let contactBtn = createButton({
  label: 'Contact',
  onClick: loadContact,
  classes: ['btn'],
});
nav.appendChild(contactBtn);

function loadHome() {
  contentWrapper.innerHTML = '';
  homePage();
}

function loadMenu() {
  contentWrapper.innerHTML = '';
  menuPage();
}

function loadAbout() {
  contentWrapper.innerHTML = '';
  aboutPage();
}

function loadContact() {
  contentWrapper.innerHTML = '';
  contactPage();
}

homePage();
