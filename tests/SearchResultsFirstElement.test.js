import { Selector } from 'testcafe'
import Navbar from '../page-objects/components/Navbar'
import SearchResultsPage from '../page-objects/pages/SearchResultsPage'

const navbar = new Navbar()
const searchResultsPage = new SearchResultsPage()

// prettier-ignore
fixture `Get First Element in the Suggestions of search box test`
    .page `https://start.duckduckgo.com/`

test('Check the first element in the suggestions is equal to supercalifragilisticexpialidocious', async t => {
    
    await t.typeText(searchResultsPage.searchBox, 'supercalafragalistic', {paste: true, replace: true})
    await t.expect(searchResultsPage.firstElement.innerText).eql('supercalifragilisticexpialidocious')
    
})