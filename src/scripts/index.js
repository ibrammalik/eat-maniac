// initial AppShell Components
import './views/components/skip-link/SkipLink';
import './views/components/app-bar/AppBar';
import './views/components/footer-element/FooterElement';

import 'regenerator-runtime';
import '../styles/style.css';
import App from './views/app';
import swRegister from './utils/sw-register';
import scrollToTop from './utils/scroll-to-top';

const skipLinkEl = document.querySelector('.skip-link');
skipLinkEl.addEventListener('click', (event) => {
  event.preventDefault();
  document.querySelector('#main-content').focus();
});

const app = new App({
  button: document.querySelector('#hamburger-button'),
  drawer: document.querySelector('#navigation-drawer'),
  content: document.querySelector('#main-content'),
});

window.addEventListener('hashchange', () => {
  app.renderPage();
  scrollToTop();
});

window.addEventListener('DOMContentLoaded', () => {
  app.renderPage();
});

window.addEventListener('page:rendered', () => {
  swRegister();
});
