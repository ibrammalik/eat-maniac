import updateButtonTemplate from './update-button.html';
import updateButtonStyle from './update-button.style.css';

class UpdateButton extends HTMLElement {
  connectedCallback() {
    this.render();
  }

  render() {
    this.innerHTML = `
        <style>${updateButtonStyle}</style>${updateButtonTemplate}
    `;
  }
}

customElements.define('update-button', UpdateButton);
