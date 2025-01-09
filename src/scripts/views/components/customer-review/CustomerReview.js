import html from './customer-review.html';
import css from './customer-review.style.css';

class CustomerReview extends HTMLElement {
  constructor() {
    super();
    this.shadowDOM = this.attachShadow({ mode: 'open' });
  }

  set review({ name, review, date }) {
    this._name = name;
    this._review = review;
    this._date = date;
  }

  connectedCallback() {
    this.render();
  }

  render() {
    this.shadowDOM.innerHTML = `
        <style>${css}</style>
        ${html}
    `;

    const usernameElement = this.shadowDOM.querySelector('#username');
    const reviewDateElement = this.shadowDOM.querySelector('#review-date');
    const reviewTextElement = this.shadowDOM.querySelector('#review-text');

    usernameElement.innerHTML = this._name;
    reviewDateElement.innerHTML = this._date;
    reviewTextElement.innerHTML = this._review;
  }
}

customElements.define('customer-review', CustomerReview);
