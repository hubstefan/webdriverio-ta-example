const aMillionMorePage = require('../pageobjects/aMillionMore.page')
const cookieConsent = require('../pageobjects/cookieConsent.component')

describe('Feature centric tests for: A million more lives - ', () => {

  beforeEach(async () => {
    await aMillionMorePage.open()
    await cookieConsent.cookieAcceptButton.click()
  })

  it('should display correct list of key features', async () => {
    await expect (aMillionMorePage.safetyFeaturesSection).toBeDisplayed()
    const list = await aMillionMorePage.safetyFeaturesHeadingList
    await expect(list[0]).toHaveText('Speed cap')
    await expect(list[1]).toHaveText('Highway pilot')
    await expect(list[2]).toHaveText('Driver monitoring cameras')
    await expect(list[3]).toHaveText('Care Key')  
  })

})

