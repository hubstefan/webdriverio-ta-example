const aMillionMorePage = require('../pageobjects/aMillionMore.page');
const cookieConsent = require('../pageobjects/cookieConsent.component');

describe('Cookie consent tests', () => {
    it('should show cookie consent poupup and have it disappear after clicking accept', async () => {
      await aMillionMorePage.open();
      await expect(cookieConsent.cookieConsentPopup).toBeDisplayed();
      await expect(cookieConsent.cookieConsentPopupText).toBeDisplayed();      
      await cookieConsent.cookieAcceptButton.click();
      await expect(cookieConsent.cookieConsentPopup).not.toBeDisplayed();
    });

});
