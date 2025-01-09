import RestaurantApiDicodingSource from '../../../data/restaurant-api-dicoding-source';
import homeStyle from './home.style.css';
import homeHTML from './home.html';

// Components
import '../../components/jumbotron/Jumbotron';
import '../../components/restaurant-item/RestaurantItem';

import(/* webpackPrefetch: true */ '../../components/update-button/UpdateButton');
import(/* webpackPrefetch: true */ '../../components/connection-alert/ConnectionAlert');

const Home = {
  async render() {
    return `<style>${homeStyle}</style>${homeHTML}`;
  },

  async afterRender() {
    const restaurants = await RestaurantApiDicodingSource.listRestaurants();

    const restaurantsContainer = document.querySelector('#restaurants-container');
    restaurants.forEach((restaurant) => {
      const restaurantItem = document.createElement('restaurant-item');
      restaurantItem.restaurantData = restaurant;
      restaurantsContainer.appendChild(restaurantItem);
    });

    window.dispatchEvent(new Event('page:rendered'));
  },
};

export default Home;
