import appBarTemplate from './app-bar.html';

class AppBar extends HTMLElement {
  connectedCallback() {
    this._render();
  }

  _render() {
    this.innerHTML = `${appBarTemplate}`;
  }
}

customElements.define('app-bar', AppBar);
