class SkipLink extends HTMLElement {
  connectedCallback() {
    this._render();
  }

  _render() {
    this.innerHTML = `
        <a href="#maincontent" class="skip-link">Menuju ke konten</a>
    `;
  }
}

customElements.define('skip-link', SkipLink);
