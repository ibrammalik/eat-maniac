import html from './menu-item.html';
import css from './menu-item.style.css';

class MenuItem extends HTMLElement {
  constructor() {
    super();
    this.shadowDOM = this.attachShadow({ mode: 'open' });
  }

  set menu(menu) {
    this._menu = menu;
  }

  connectedCallback() {
    this.render();
  }

  render() {
    this.shadowDOM.innerHTML = `
        <style>
            ${css}
        </style>
        ${html}
    `;

    const menuThumbnail = this.shadowDOM.querySelector('#menu-thumbnail');
    const menuTitle = this.shadowDOM.querySelector('#menu-title');

    menuThumbnail.alt = this._menu.name;
    menuTitle.innerHTML = this._menu.name;
  }
}

customElements.define('menu-item', MenuItem);
