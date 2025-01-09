import CONFIG from './config';

const API_ENDPOINT = {
  LIST_RESTAURANTS: `${CONFIG.BASE_URL}list`,
  DETAIL_RESTAURANT: (id) => `${CONFIG.BASE_URL}detail/${id}`,
  SEARCH_RESTAURANT: (query) => `${CONFIG.BASE_URL}search?q=${query}`,
  ADD_NEW_REVIEW_TO_RESTAURANT: `${CONFIG.BASE_URL}review`,
};

export default API_ENDPOINT;
