const BasePage = require('./basePage');

class CookieConsent extends BasePage {

  get cookieConsentPopup () {
    return $('[role="alertdialog"]');
  }

  get cookieAcceptButton () {
    return $('button=Accept');
  }

}

module.exports = new CookieConsent();