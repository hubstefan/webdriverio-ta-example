const BasePage = require('./basePage');

class CookieConsent extends BasePage {

  get cookieConsentPopup () {
    return $('div[role="alertdialog"]');
  }

  get cookieConsentPopupText () {
    return $('#onetrust-policy-text*=We use cookies');
  }

  get cookieAcceptButton () {
    return $('button=Accept');
  }

}

module.exports = new CookieConsent();