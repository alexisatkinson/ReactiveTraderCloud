import { browser, by, ProtractorBrowser } from 'protractor'
import { wait } from './utils/async.utils'
import { waitForElementToBePresent, waitForElementToBeVisible } from './utils/browser.utils'

let activeBrowser: ProtractorBrowser

export async function getBrowser() {
  if (!activeBrowser) {
    console.log('Preparing browser')
    activeBrowser = await prepareBrowser()
  }

  return activeBrowser
}

async function prepareBrowser(): Promise<ProtractorBrowser> {
  // We are testing a React project. We need to disable Angular sync.
  await browser.waitForAngularEnabled(false)

  await browser.get(browser.baseUrl, 10000)

  const rootElement = browser.element(by.qa('root'))
  const connectedStatusBar = browser.element(by.css(`[data-qa="status-bar"][data-mode="CONNECTED"]`))

  await waitForElementToBePresent(browser, rootElement)
  // await waitForElementToBeVisible(browser, connectedStatusBar, 10000)

  // Wait for first rendering, for good measure.
  await wait(1000)

  return browser
}
