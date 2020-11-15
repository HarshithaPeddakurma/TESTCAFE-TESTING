import Navbar from '../page-objects/components/Navbar'
import HamburgerMenu from '../page-objects/pages/HamburgerMenu'

const navbar = new Navbar()
const hamburgerMenu = new HamburgerMenu()

// prettier-ignore
fixture `Background color change test`
    .page `https://start.duckduckgo.com/`

test('User should be able to see change in the background color on clicking dark mode', async t => {

      
    await t.click(navbar.hamburgerMenu)
    await t.click(hamburgerMenu.themesLink)
    await t.setTestSpeed(0.01)
    await t.click(hamburgerMenu.darkMode)
    await t.expect(hamburgerMenu.themeChanged.innerText).eql('Theme Changed')
})