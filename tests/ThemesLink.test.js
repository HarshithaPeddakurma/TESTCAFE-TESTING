import { Selector } from 'testcafe'
import Navbar from '../page-objects/components/Navbar'
import HamburgerMenu from '../page-objects/pages/HamburgerMenu'

const navbar = new Navbar()
const hamburgerMenu = new HamburgerMenu()

// prettier-ignore
fixture `Navigate to themes link test`
    .page `https://start.duckduckgo.com/`

test('User should be able to see themes link on hamburger menu', async t => {
    await t.click(navbar.hamburgerMenu)
   await t.expect(hamburgerMenu.themesLink.innerText).contains('Themes')
   
})