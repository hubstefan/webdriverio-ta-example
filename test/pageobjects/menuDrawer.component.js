const BasePage = require('./basePage')

class MenuDrawer extends BasePage {

  get linksMenu () {
    return $('[data-autoid="nav:sideNavLinksMenu"]')
  }

  get listItems () {
    return this.linksMenu.$$('div[role="listitem"]')
  }

}

module.exports = new MenuDrawer()