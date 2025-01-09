import API_ENDPOINT from '../globals/api-endpoint';
import HTTPError from '../exceptions/HTTPError';
import NetworkError from '../exceptions/NetworkError';
import ErrorPage from '../views/pages/Error/Error';

class RestaurantApiDicodingSource {
  static checkResponse(response) {
    if (!response.ok) {
      throw new HTTPError({
        status: response.status,
        text: response.statusText,
        message: `"${response.status} - ${response.statusText}"`,
      });
    }
  }

  static async listRestaurants() {
    const response = await fetch(API_ENDPOINT.LIST_RESTAURANTS);
    const responseJson = await response.json();
    return responseJson.restaurants;
  }

  static async detailRestaurant(id) {
    try {
      const response = await fetch(API_ENDPOINT.DETAIL_RESTAURANT(id));
      RestaurantApiDicodingSource.checkResponse(response);
      const responseJson = await response.json();
      return responseJson.restaurant;
    } catch (errorObject) {
      if (errorObject instanceof HTTPError) {
        ErrorPage.setErrorData = errorObject;
        return false;
      }

      const networkErrorObject = new NetworkError({
        title: 'Ooopppss Ada Masalah dengan Koneksi Internet Kamu.....',
        message: `Silahkan Periksa Koneksi Internet Kamu dan Coba Segarkan Halaman Ini. "${errorObject.message}"`,
      });
      ErrorPage.setErrorData = networkErrorObject;
      return false;
    }
  }
}

export default RestaurantApiDicodingSource;
