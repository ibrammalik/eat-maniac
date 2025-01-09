import html from './category.html';
import css from './category.style.css';

class Category extends HTMLElement {
  constructor() {
    super();
    this.shadowDOM = this.attachShadow({ mode: 'open' });
  }

  set category({ name }) {
    this._name = name;
  }

  connectedCallback() {
    this.render();
  }

  render() {
    this.shadowDOM.innerHTML = `
        <style>${css}</style>
        ${html}
    `;

    const categoryItem = this.shadowDOM.querySelector('#category-item');

    categoryItem.innerHTML = this._name;
  }
}

customElements.define('category-element', Category);
