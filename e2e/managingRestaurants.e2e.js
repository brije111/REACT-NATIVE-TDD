describe('Managing Restaurants', () => {
  beforeEach(async () => {
    await device.reloadReactNative();
  });

  it('should allow creating a restaurant', async () => {
    const restaurantName = 'Maharaja Fast Food';
    await element(by.id('newRestaurantButton')).tap();
    await element(by.id('newRestaurantTextField')).typeText(restaurantName);
    await element(by.id('saveRestaurantButton')).tap();

    await expect(element(by.label(restaurantName))).toBeVisible();
    await expect(element(by.id('newRestaurantTextField'))).toBeNotVisible();
    //click restaurant button
    //enter restaurant name
    //click save button
    //check to make sure newly added restaurant is in list
  });
});
