import CONFIG from '../../../globals/config';
import restaurantItemStyle from './restaurant-item.style.css';
import restaurantItemTemplate from './restaurant-item.html';

class RestaurantItem extends HTMLElement {
  constructor() {
    super();
    this.shadowDOM = this.attachShadow({ mode: 'open' });
  }

  set restaurantData({
    id, pictureId, city, name, description,
  }) {
    this._id = id;
    this._pictureId = pictureId;
    this._city = city;
    this._name = name;
    this._description = description;
  }

  connectedCallback() {
    this.render();
  }

  render() {
    this.shadowDOM.innerHTML = `
        <style>
            ${restaurantItemStyle}
        </style>
        ${restaurantItemTemplate}
    `;

    const restaurantCity = this.shadowDOM.querySelector('#restaurant-city');
    const restaurantName = this.shadowDOM.querySelector('#restaurant-name');
    const restaurantThumbnail = this.shadowDOM.querySelector('#restaurant-thumbnail');
    const restaurantDetailLink = this.shadowDOM.querySelector('#restaurant-detail-link');
    const restaurantDescription = this.shadowDOM.querySelector('#restaurant-description');

    restaurantCity.innerHTML = this._city;
    restaurantName.innerHTML = this._name;
    restaurantThumbnail.alt = `Restoran ${this._name}`;
    restaurantThumbnail.src = `${CONFIG.BASE_IMAGE_URL}small/${this._pictureId}`;
    restaurantThumbnail.setAttribute('data-src', `${CONFIG.BASE_IMAGE_URL}small/${this._pictureId}`);
    restaurantDetailLink.href = `/#/detail/${this._id}`;
    restaurantDescription.innerHTML = this._description.slice(0, 80);
  }
}

customElements.define('restaurant-item', RestaurantItem);
