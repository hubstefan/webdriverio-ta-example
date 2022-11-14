const BasePage = require('./basePage')

class Footer extends BasePage {

  get footer () {
    return $('footer')
  }

  get footerItems () {
    return this.footer.$$('span[role="listitem"]')
  }

}

module.exports = new Footer()