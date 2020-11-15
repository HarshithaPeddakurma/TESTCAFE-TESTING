import { Selector, t } from 'testcafe'

class HamburgerMenu {
    constructor(){
        
        this.themesLink = Selector('.clear')
        this.darkMode = Selector('label').withAttribute(
            'data-theme-id',
            'd'
        )
        this.themeChanged = Selector('.js-notification-text')
        
    }
    
    
}

export default HamburgerMenu