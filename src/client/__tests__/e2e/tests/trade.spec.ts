// Import required pages
import { ProtractorBrowser } from 'protractor'
import { getBrowser } from '../browser-manager'
import { wait } from '../utils/async.utils'
import { waitForElementToBeVisible } from '../utils/browser.utils'
import { MainPage } from '../pages/main.page'

let browser: ProtractorBrowser
let mainPage: MainPage

describe('UI Tests for Reactive Trader Cloud Web Application', async () => {

  beforeEach(async () => {
    browser = await getBrowser()
    mainPage = new MainPage(browser)
  })

  it('Verify page title', async () => {
    const title = await browser.getTitle()
    expect(title).toBe('Reactive Trader Cloud')
  })

  it('select currency workspace component', async () => {
    await mainPage.workspace.selectCurrency('EUR')
    await wait(3000)
  })

  afterAll(async () => {
    await browser.close()
  })

})
