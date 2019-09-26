// Import required pages
import { ProtractorBrowser, by } from 'protractor'
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
    await mainPage.workspace.selectCurrency('NZD')
    const element = browser.element(by.qaTag('currency-option-nzd'))
    expect(element.getText()).toBe('NZD')
    await wait(3000)
  })

  afterAll(async () => {
    await browser.close()
  })

})
