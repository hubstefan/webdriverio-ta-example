const BasePage = require('./basePage')

class NavigationTopBar extends BasePage {

  get topBar () {
    return $('#site-nav-topbar-wrapper')
  }

  get menu () {
    return this.topBar.$('button=Menu')
  }

}

module.exports = new NavigationTopBar()