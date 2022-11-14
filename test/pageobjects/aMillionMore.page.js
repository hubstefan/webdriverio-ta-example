const BasePage = require('./basePage')

class AMillionMorePage extends BasePage {

    get video () {
        return $('video')
    }

    get headingExploreModels () {
        return $('h2=Explore our models')
    }

    get carouselItems () {
        return $$('[data-autoid="springCarouselPane:carouselItem"]')
    }

    get carouselLeftArrow () {
        return $('[data-autoid="springCarouselPreviousButton"]')
    }
    
    get carouselRightArrow () {
        return $('[data-autoid="springCarouselNextButton"]')
    }

    get safetyFeaturesSection () {
        return $('[data-autoid="IconCallouts"]')
    }
    
    get safetyFeaturesHeadingList () {
        return $$('[data-autoid="iconCallouts:iconTextItem"] em')
    }

    open () {
        return super.open('intl/v/car-safety/a-million-more')
    }
}

module.exports = new AMillionMorePage()