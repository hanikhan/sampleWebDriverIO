var assert = require('assert');

describe('EBay\'s Login Functionality', function() {
  it('can login to EBay', function () {
    browser
      .url('https://signin.ebay.com/ws/eBayISAPI.dll?SignIn')
      .clearElement('*[id="userid"]')
      .setValue('*[id="userid"]','<your_username>')
      .clearElement('*[id="pass"]')
      .setValue('*[id="pass"]','<your_password>')
      .click('[id="sgnBt"]')
      .pause(10000);
    assert(browser.getTitle().match(/Electronics, Cars, Fashion, Collectibles, Coupons and More | eBay/i));
  });
});