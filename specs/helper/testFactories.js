import '../../src/scripts/views/components/like-button/LikeButton';

const createLikeButtonPresenterWithRestaurant = async (restaurant) => {
  const likeButton = document.createElement('like-button');
  likeButton.restaurantData = restaurant;

  const likeButtonContainer = document.querySelector('#likeButtonContainer');
  likeButtonContainer.appendChild(likeButton);

  await likeButton._renderButton();
};

// eslint-disable-next-line import/prefer-default-export
export { createLikeButtonPresenterWithRestaurant };
