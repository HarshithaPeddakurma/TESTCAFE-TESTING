import { Selector, t } from 'testcafe'

class Navbar {
    constructor(){
        this.homePage = Selector('#content_homepage')
        this.duckDuckGoLogo = Selector('#logo_homepage_link')
        this.hamburgerMenu = Selector('.js-side-menu-open')
        this.searchBox = Selector('#search_form_input_homepage')
        this.magnifyingGlass = Selector('#search_button_homepage')
    }
    
}

export default Navbar