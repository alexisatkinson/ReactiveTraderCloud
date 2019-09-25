// Import required pages
import {browser, element, by, ElementFinder} from 'protractor'
import { TradePage } from '../pages/trade.page'
import { TradeMethod } from '../steps/trade.method'
import { wait } from '../utils/async.utils'

const tradePage = new TradePage()
const tradeMethod = new TradeMethod()

describe('UI Smoke Tests for Reactive Trader Cloud App', async() => {

  beforeEach(async() => {
    await browser.waitForAngularEnabled(false)
    await browser.get(browser.params.baseUrl)
  })

  it('User should be able to refine search', async () => {
    await wait(5000)
    const element = await browser.element(by.qaTag('currency-option-eur'))
    element.click()
    await wait(3000)
  });










  // it('should validate the GBP to USD trade', async() => {
  //   expect(await browser.getTitle()).toEqual('Reactive Trader Cloud')
  //   await tradeMethod.GBPToUSDTrade()
  //   await expect(tradePage.textTradeStatus().getText()).toEqual('Done')
  //   expect(tradePage.textBackGroundColour().getCssValue('background-color')).toEqual('rgba(40, 201, 136, 1)')
  // })
  //
  // it('should  validate the GBP to JPY trade', async() => {
  //   await tradeMethod.GBPToJPYTrade()
  //   expect(tradePage.textTradeStatus().getText()).toEqual('Rejected')
  //   expect(tradePage.textBackGroundColour().getCssValue('background-color')).toEqual('rgba(249, 76, 76, 1)')
  // })
  //
  // it('should  validate the EUR to JPY trade', async() => {
  //   await tradeMethod.EURToJPYTrade()
  //   expect(tradePage.textTradeStatus().getText()).toEqual('Done')
  // })
  //
  // it('should  validate the EUR to USD trade', async() => {
  //   await tradeMethod.EURToUSDTrade()
  //   expect(tradePage.textTradeId().isPresent()).toBeTruthy()
  //   expect(tradePage.textTradeStatus().getText()).toEqual('Done')
  //   expect(tradePage.textTradeDate().isPresent()).toBeTruthy()
  //   expect(tradePage.textTradeDirection().getText()).toEqual('Sell')
  // })

  afterAll(async() => {
      await browser.close()
  })

})
