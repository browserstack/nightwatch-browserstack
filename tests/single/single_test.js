module.exports = {
  "Bstack Demo": async function (browser) {
    browser.url('https://www.bstackdemo.com/');

    // Get the product text on the page
    const productText = await browser.useXpath().getText('//*[@id="1"]/p', function(result) {
      return Promise.resolve(result.value);
    });

    //Check of button present for add to cart
    browser.useXpath().expect.element('//*[@id="1"]/div[4]').to.be.present;

    //click on add to cart
    browser.useXpath().click('//*[@id="1"]/div[4]');

    // Check if cart os opened 
    browser.useXpath().expect.element('//*[@class="float-cart__content"]').to.be.present;

    // Check if product in cart is equal to the product we selected
    browser.useXpath().expect.element('//*[@id="__next"]/div/div/div[2]/div[2]/div[2]/div/div[3]/p[1]').text.to.equal(productText.value);
  }
};
