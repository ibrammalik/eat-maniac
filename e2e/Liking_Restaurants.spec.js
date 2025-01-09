/* eslint-disable no-await-in-loop */
/* eslint-disable no-plusplus */
/* eslint-disable no-undef */
const assert = require('assert');

Feature('Liking Restaurants');

Before(({ I }) => {
  I.amOnPage('/#/favorite');
  I.wait(2); // wait 2 secs
});

Scenario('showing empty liked restaurants', ({ I }) => {
  I.see('Tidak ada restaurant untuk ditampilkan', '.restaurant-item__not__found');
});

Scenario('liking one restaurant', async ({ I }) => {
  I.see('Tidak ada restaurant untuk ditampilkan', '.restaurant-item__not__found');

  I.amOnPage('/');
  I.wait(2); // wait 2 secs

  I.seeElement('pierce/#restaurant-name');

  const firstRestaurantTitle = await I.grabTextFrom('pierce/#restaurant-name');
  I.click('pierce/#restaurant-name');

  I.seeElement('#likeButton');
  I.click('#likeButton');

  I.amOnPage('/#/favorite');
  I.wait(2); // wait 2 secs

  I.seeElement('pierce/#restaurant-name');
  const likedRestaurantTitle = await I.grabTextFrom('pierce/#restaurant-name');

  assert.strictEqual(firstRestaurantTitle, likedRestaurantTitle);
});
