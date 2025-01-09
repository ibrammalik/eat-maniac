import FavoriteRestaurantIdb from '../../../data/favorite-restaurant-idb';
import favoriteStyle from './favorite.style.css';
import favoriteHTML from './favorite.html';

const Favorite = {
  async render() {
    return `<style>${favoriteStyle}</style>${favoriteHTML}`;
  },

  async afterRender() {
    const restaurants = await FavoriteRestaurantIdb.getAllRestaurants();
    const restaurantsContainer = document.querySelector('#restaurants-container');

    if (restaurants.length) {
      restaurants.forEach((restaurant) => {
        const restaurantItem = document.createElement('restaurant-item');
        restaurantItem.restaurantData = restaurant;
        restaurantsContainer.appendChild(restaurantItem);
      });
    } else {
      restaurantsContainer.innerHTML = this._getEmptyRestaurantTemplate();
    }

    window.dispatchEvent(new Event('page:rendered'));
  },

  _getEmptyRestaurantTemplate() {
    return '<div class="restaurant-item__not__found">Tidak ada restaurant untuk ditampilkan</div>';
  },
};

export default Favorite;
