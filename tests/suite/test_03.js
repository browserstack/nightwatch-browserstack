module.exports = {
  'Google\'s Search Functionality' : function (browser) {
    browser.url("https://www.google.com");
    browser.setValue("input[name=q]", ["BrowserStack 03", browser.Keys.ENTER]); // this submits on desktop browsers
    browser.pause(1000);
    browser.title((result) => {
      if (!/BrowserStack 03/i.test(result.value)) {
        browser.submitForm("input[name=q]"); // this helps in mobile browsers
      }
    });
    browser.expect.title().to.match(/BrowserStack 03/i);
    browser.end();
  }
};
