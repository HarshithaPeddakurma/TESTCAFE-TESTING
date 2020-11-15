import Navbar from '../page-objects/components/Navbar'

const navbar = new Navbar()

// prettier-ignore
fixture `Duckduckgo logo on the homepage test`
    .page `https://start.duckduckgo.com/`

test('Expect Duckduckgo logo on the homepage', async t => {
    await t.expect(navbar.homePage.exists).ok()
    await t.expect(navbar.duckDuckGoLogo.innerText).contains('DuckDuckGo')
})