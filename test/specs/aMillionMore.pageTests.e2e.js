const aMillionMorePage = require('../pageobjects/aMillionMore.page')
const cookieConsent = require('../pageobjects/cookieConsent.component')
const navigationTopBar = require('../pageobjects/navigationTopBar.component')
const menuDrawer = require('../pageobjects/menuDrawer.component')
const footer = require('../pageobjects/footer.component')

describe('Page centric tests', () => {

  beforeEach(async () => {
    await aMillionMorePage.open()
    await cookieConsent.cookieAcceptButton.click()
  })

  it('should have a correct header', async () => {
    await expect(navigationTopBar.topBar).toBeExisting()
    await expect(navigationTopBar.menu).toBeDisplayed()
  })

  it('should access and have the correct list of links in the menu drawer', async () => {
    await navigationTopBar.menu.click()
    await expect(menuDrawer.linksMenu).toBeExisting()

    const list = await menuDrawer.listItems
    await expect(list.length).toBe(5)
    await expect(list[0]).toHaveText('Buy')
    await expect(list[1]).toHaveText('Own')
    await expect(list[2]).toHaveText('About Volvo')
    await expect(list[3]).toHaveText('Explore')
    await expect(list[4]).toHaveText('More')
  })

  it('should have a correct footer', async () => {
    await expect(footer.footer).toBeExisting()

    const list = await footer.footerItems
    await expect(list.length).toBe(5)
    await expect(list[0]).toHaveText('Cookies')
    await expect(list[1]).toHaveText('Legal')
    await expect(list[2]).toHaveText('Privacy')
    await expect(list[3]).toHaveText('Social Media')
    await expect(list[4]).toHaveText('Tell Us')

  })

  it('should have existing carousel arrows that are clickable', async () => {
    await aMillionMorePage.headingExploreModels.scrollIntoView({behavior: "smooth"})
    await expect(aMillionMorePage.carouselLeftArrow).toBeExisting()
    await expect(aMillionMorePage.carouselRightArrow).toBeExisting()

    /*
    Note: However I do it I could not get these tests stable when testing for items NOT visible. 
    If I check for "toBeDisplayedInViewport" everything will be regarded as "displayed" if the screen 
    is wide enough. To solve this I would need to reverse engineer what witdh to set the screen to. 
    I do not put time into that specific task right now. Would rather try to find a nother solution.
    */

    const carouselItemList = await aMillionMorePage.carouselItems

    await expect(carouselItemList[0]).toBeDisplayedInViewport()
    await aMillionMorePage.carouselRightArrow.click()

    // Item #0 is still in viewport regardless of screen width after one click even if it is not shown to the user
    await expect(carouselItemList[0]).toBeDisplayedInViewport()
    // Item 5, i.e. the 6th item is now in viewport regardless of screen width (even if it is not shown to the user)
    await expect(carouselItemList[5]).toBeDisplayedInViewport()

    // Just click around, not really verifying anything new
    await aMillionMorePage.carouselRightArrow.click()
    // Go back
    await aMillionMorePage.carouselLeftArrow.click()
    await aMillionMorePage.carouselLeftArrow.click()
    await expect(carouselItemList[0]).toBeDisplayedInViewport()
  })

  it('should have a video component', async () => {
    await expect(aMillionMorePage.video).toBeExisting()
    
  })

})








