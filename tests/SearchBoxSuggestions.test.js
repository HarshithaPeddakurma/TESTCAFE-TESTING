import { Selector } from 'testcafe'
import Navbar from '../page-objects/components/Navbar'
import SearchResultsPage from '../page-objects/pages/SearchResultsPage'

const navbar = new Navbar()
const searchResultsPage = new SearchResultsPage()

// prettier-ignore
fixture `Get Suggestions for a input in search box test`
    .page `https://start.duckduckgo.com/`

test('Check the number of suggestions are equal for a input entered in search box', async t => {
    await t.typeText(searchResultsPage.searchBox, 'super', {paste: true, replace: true})
    await t.setTestSpeed(0.01)
    await t.expect(searchResultsPage.numberOfSuggestions.count).eql(8)
   
})