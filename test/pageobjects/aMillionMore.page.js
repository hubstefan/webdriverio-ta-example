const BasePage = require('./basePage');

class AMillionMorePage extends BasePage {

    open () {
        return super.open('intl/v/car-safety/a-million-more');
    }
}

module.exports = new AMillionMorePage();