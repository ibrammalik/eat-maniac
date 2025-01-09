import html from './review-form.html';
import css from './review-form.style.css';

class ReviewFrom extends HTMLElement {
  connectedCallback() {
    this._render();
  }

  _render() {
    this.innerHTML = `
            <style>${css}</style>${html}
        `;
  }
}

customElements.define('review-form', ReviewFrom);
