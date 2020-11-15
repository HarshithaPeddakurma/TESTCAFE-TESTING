import { Selector } from 'testcafe'
import Navbar from '../page-objects/components/Navbar'
import HamburgerMenu from '../page-objects/pages/HamburgerMenu'
import SearchResultsPage from '../page-objects/pages/SearchResultsPage'

const navbar = new Navbar()
const searchResultsPage = new SearchResultsPage()

// prettier-ignore
fixture `Number of links test`
    .page `https://start.duckduckgo.com/`

test('Number of links are equal to links of search result', async t => {
    await t.typeText(navbar.searchBox, 'Back to the future', {paste: true})
    await t.click(navbar.magnifyingGlass)
    await t.wait(3000)
    await t.expect(searchResultsPage.numberofLinks.count).eql(10)
})