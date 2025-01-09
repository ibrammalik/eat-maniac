/* eslint-disable no-await-in-loop */
/* eslint-disable no-plusplus */
/* eslint-disable no-undef */
const assert = require('assert');

Feature('Unfavoriting Restaurants');

Before(({ I }) => {
  I.amOnPage('/');
  I.wait(2); // wait 2 secs
});

Scenario('unfavoriting a restaurant', async ({ I }) => {
  I.seeElement('pierce/#restaurant-name');

  const firstRestaurantName = await I.grabTextFrom('pierce/#restaurant-name');

  I.click('pierce/#restaurant-name');

  I.seeElement('#likeButton');
  I.click('#likeButton');

  I.amOnPage('/#/favorite');
  I.wait(2); // wait 2 secs

  I.seeElement('pierce/#restaurant-name');

  const favoritedRestaurantName = await I.grabTextFrom('pierce/#restaurant-name');
  assert.strictEqual(firstRestaurantName, favoritedRestaurantName);

  I.click('pierce/#restaurant-name');

  I.seeElement('.unlike');
  I.click('.unlike');

  I.amOnPage('/#/favorite');
  I.wait(2); // wait 2 secs

  I.see('Tidak ada restaurant untuk ditampilkan', '.restaurant-item__not__found');
});
