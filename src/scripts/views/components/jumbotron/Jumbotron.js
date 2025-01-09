import css from './jumbotron.style.css';
import html from './jumbotron.html';

class Jumbotron extends HTMLElement {
  constructor() {
    super();
    this.shadowDOM = this.attachShadow({ mode: 'open' });
  }

  connectedCallback() {
    this.render();
  }

  render() {
    this.shadowDOM.innerHTML = `
        <style>${css}</style>
        ${html}
    `;
  }
}

customElements.define('jumbotron-section', Jumbotron);
