import { by, ElementFinder, ProtractorBrowser } from 'protractor'
import { waitForElementToBeClickable, waitForElementToBeVisible } from '../utils/browser.utils'

export class WorkspaceComponent {
  linkAll: ElementFinder
  linkEUR: ElementFinder
  linkUSD: ElementFinder
  linkGBP: ElementFinder
  linkAUD: ElementFinder
  linkNZD: ElementFinder

  constructor(private browser: ProtractorBrowser, public root: ElementFinder) {
    this.linkAll = root.element(by.qaTag('currency-option-all'))
    this.linkEUR = root.element(by.qaTag('currency-option-eur'))
    this.linkUSD = root.element(by.qaTag('currency-option-usd'))
    this.linkGBP = root.element(by.qaTag('currency-option-gbp'))
    this.linkAUD = root.element(by.qaTag('currency-option-aud'))
    this.linkNZD = root.element(by.qaTag('currency-option-nzd'))
  }

  async selectCurrency(linkCurrency: String) {
    switch (linkCurrency) {
      case 'All': {
        await waitForElementToBeVisible(this.browser, this.linkAll)
        await this.linkAll.click()
        break
      }
      case 'EUR': {
        await waitForElementToBeVisible(this.browser, this.linkEUR)
        await this.linkEUR.click()
        break
      }
      case 'USD': {
        await waitForElementToBeVisible(this.browser, this.linkUSD)
        await this.linkUSD.click()
        break
      }
      case 'GBP': {
        await waitForElementToBeVisible(this.browser, this.linkGBP)
        await this.linkGBP.click()
        break
      }
      case 'AUD': {
        await waitForElementToBeVisible(this.browser, this.linkAUD)
        await this.linkAUD.click()
        break
      }
      case 'NZD': {
        await waitForElementToBeVisible(this.browser, this.linkNZD)
        await this.linkNZD.click()
        break
      }
    }
  }

  async isConnected() {
    const connectionElement = this.browser.element(by.qa('status-button__toggle-button'))
    return connectionElement.isPresent()
  }
}
