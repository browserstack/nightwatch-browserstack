module.exports = {
  'BrowserStack Local Testing' : function (browser) {
    browser
      .url('http://bs-local.com:45454')
      .getTitle(function(title) {
        this.assert.ok(title.toLowerCase().includes('browserstack'));
      })
  }
};
