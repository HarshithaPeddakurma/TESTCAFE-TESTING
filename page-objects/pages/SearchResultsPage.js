import { Selector, t } from 'testcafe'

class SearchResultsPage {
    constructor(){
        this.numberofLinks = Selector('.result--url-above-snippet')
        this.searchBox = Selector('#search_form_homepage')
        this.numberOfSuggestions = Selector('.acp')
        this.firstElement = Selector('div').withAttribute(
            'data-index',
            '0'
        )
    }
    
}

export default SearchResultsPage