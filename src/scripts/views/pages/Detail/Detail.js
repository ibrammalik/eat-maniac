import RestaurantApiDicodingSource from '../../../data/restaurant-api-dicoding-source';
import CONFIG from '../../../globals/config';
import UrlParser from '../../../routes/url-parser';
import detailHTML from './detail.html';
import detailStyle from './detail.style.css';

// components
import '../../components/category/Category';
import '../../components/menu-item/MenuItem';
import '../../components/like-button/LikeButton';
import '../../components/review-form/ReviewForm';
import '../../components/customer-review/CustomerReview';

const Detail = {
  async render() {
    return `<style>${detailStyle}</style>${detailHTML}`;
  },

  async afterRender() {
    const restaurant = await this.getData();
    if (restaurant) {
      this.restaurant = restaurant;
      this.injectData();
      this.injectComponents();
      window.dispatchEvent(new Event('page:rendered'));
    }
  },

  async getData() {
    const url = UrlParser.parseActiveUrlWithoutCombiner();
    return RestaurantApiDicodingSource.detailRestaurant(url.id);
  },

  injectData() {
    const restaurantPoster = document.querySelector('#restaurant__poster');
    const restaurantTitle = document.querySelector('#restaurant__title');
    const restaurantCity = document.querySelector('#restaurant__city');
    const restaurantAddress = document.querySelector('#restaurant__address');
    const restaurantDescription = document.querySelector('#restaurant__description__text');
    const restaurantRating = document.querySelector('#restaurant__rating');

    restaurantPoster.src = `${CONFIG.BASE_IMAGE_URL}large/${this.restaurant.pictureId}`;
    restaurantPoster.alt = `Restoran ${this.restaurant.name}`;
    restaurantTitle.innerHTML = this.restaurant.name;
    restaurantCity.innerHTML = this.restaurant.city;
    restaurantAddress.innerHTML = this.restaurant.address;
    restaurantDescription.innerHTML = this.restaurant.description;
    restaurantRating.innerHTML = this.restaurant.rating;
  },

  injectComponents() {
    // Restaurant Categories Section
    const restaurantDetailCategoriesContainer = document.querySelector('#restaurant__detail__categories');
    this.restaurant.categories.forEach((category) => {
      const categoryElement = document.createElement('category-element');
      categoryElement.category = category;
      restaurantDetailCategoriesContainer.appendChild(categoryElement);
    });

    // Customer Reviews Section
    const customerReviewsContainer = document.querySelector('#customer-reviews-section');
    this.restaurant.customerReviews.forEach((customerReview) => {
      const customerReviewElement = document.createElement('customer-review');
      customerReviewElement.review = customerReview;
      customerReviewsContainer.appendChild(customerReviewElement);
    });

    // Restaurant Food Menus Section
    const restaurantFoodMenusContainer = document.querySelector('#restaurant-menus__foods__container');
    this.restaurant.menus.foods.forEach((food) => {
      const foodMenus = document.createElement('menu-item');
      foodMenus.menu = food;
      restaurantFoodMenusContainer.appendChild(foodMenus);
    });

    // Restaurant Drink Menus Section
    const restaurantDrinkMenusContainer = document.querySelector('#restaurant-menus__drinks__container');
    this.restaurant.menus.drinks.forEach((drink) => {
      const drinkMenus = document.createElement('menu-item');
      drinkMenus.menu = drink;
      restaurantDrinkMenusContainer.appendChild(drinkMenus);
    });

    // Like Button Initiate
    const restaurantHeader = document.querySelector('#restaurant__header');
    const likeButton = document.createElement('like-button');
    likeButton.restaurantData = this.restaurant;
    restaurantHeader.appendChild(likeButton);

    // Review Form Initiate
    const restaurantDetailContainer = document.querySelector('#restaurant-detail-container');
    const reviewForm = document.createElement('review-form');
    restaurantDetailContainer.appendChild(reviewForm);
  },
};

export default Detail;
