import FavoriteRestaurantIdb from '../../../data/favorite-restaurant-idb';
import likeButtonStyle from './like-button.style.css';
import likeButtonTemplate from './html/like-button.html';
import likedButtonTemplate from './html/liked-button.html';

class LikeButton extends HTMLElement {
  set restaurantData(restaurant) {
    this._restaurant = restaurant;
  }

  async connectedCallback() {
    await this._renderButton();
  }

  async _renderButton() {
    const { id } = this._restaurant;

    if (await this._isRestaurantExist(id)) {
      this._renderLiked();
    } else {
      this._renderLike();
    }
  }

  // eslint-disable-next-line class-methods-use-this
  async _isRestaurantExist(id) {
    const restaurant = await FavoriteRestaurantIdb.getRestaurant(id);
    return !!restaurant;
  }

  _renderLike() {
    this.innerHTML = `
      <style>${likeButtonStyle}</style>
      ${likeButtonTemplate}
    `;

    const likeButton = this.querySelector('#likeButton');
    likeButton.addEventListener('click', async () => {
      await FavoriteRestaurantIdb.putRestaurant(this._restaurant);
      this._renderButton();
    });
  }

  _renderLiked() {
    this.innerHTML = `
      <style>${likeButtonStyle}</style>
      ${likedButtonTemplate}
    `;

    const likeButton = this.querySelector('#likeButton');
    likeButton.addEventListener('click', async () => {
      await FavoriteRestaurantIdb.deleteRestaurant(this._restaurant.id);
      this._renderButton();
    });
  }
}

customElements.define('like-button', LikeButton);
