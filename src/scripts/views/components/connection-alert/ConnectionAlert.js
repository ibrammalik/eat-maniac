import css from './connection-alert.style.css';
import html from './connection-alert.html';

class ConnectionAlert extends HTMLElement {
  connectedCallback() {
    this.render();
  }

  render() {
    this.innerHTML = `
        <style>${css}</style>
        ${html}
    `;

    window.addEventListener('offline', () => {
      const online = document.getElementById('online');
      const offline = document.getElementById('offline');
      const mainContent = document.getElementById('main-content');
      mainContent.style.marginTop = '6.7rem';
      online.style.display = 'none';
      offline.style.display = 'block';
    });

    window.addEventListener('online', () => {
      const online = document.getElementById('online');
      const offline = document.getElementById('offline');
      const mainContent = document.getElementById('main-content');
      mainContent.style.marginTop = '6.7rem';
      online.style.display = 'block';
      offline.style.display = 'none';
      setTimeout(async () => {
        mainContent.removeAttribute('style');
        online.style.display = 'none';
      }, 5000);
    });
  }
}

customElements.define('connection-alert', ConnectionAlert);
