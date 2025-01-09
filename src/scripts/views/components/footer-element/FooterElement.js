class FooterElement extends HTMLElement {
  connectedCallback() {
    this._render();
  }

  _render() {
    this.innerHTML = `
        <footer>
            <p tabindex="0">Copyright <span>&#169;</span> 2023 - Eat Maniac</p>
        </footer>`;
  }
}

customElements.define('footer-element', FooterElement);
