// import {browser, element, ExpectedConditions as EC, protractor, by} from 'protractor'
// import { TradePage } from '../pages/trade.page'
//
// const maxWaitTime = 10000;
// const tradePage = new TradePage()
//
// export class TradeMethod {
//
//   async fillNotional(newNotionalValue: string): Promise<boolean> {
//     await browser.wait(EC.visibilityOf(tradePage.textAmountThirdCell()), maxWaitTime)
//     const textNotional = await tradePage.textAmountThirdCell().getAttribute('value')
//     expect(textNotional).toEqual('1,000,000')
//     await tradePage.textAmountThirdCell().clear()
//     await tradePage.textAmountThirdCell().sendKeys(newNotionalValue)
//     return true
//   }
//
//   async GBPToUSDTrade(): Promise<boolean> {
//     await browser.wait(EC.visibilityOf(tradePage.linkAll()), maxWaitTime)
//     await tradePage.linkAll().click()
//     await this.fillNotional('1,111,111')
//     await browser.wait(EC.visibilityOf(tradePage.buttonSellThirdCell()), maxWaitTime)
//     await tradePage.buttonSellThirdCell().click()
//     await browser.sleep(2000)
//     await browser.wait(EC.visibilityOf(tradePage.tradeSuccessMessage()), maxWaitTime)
//     await expect(tradePage.tradeSuccessMessage().getText()).toBeTruthy()
//     expect(tradePage.tradeSuccessMessage().getText()).toContain('You sold')
//     await browser.wait(EC.visibilityOf(tradePage.buttonCloseTradeSuccess()), maxWaitTime)
//     await tradePage.buttonCloseTradeSuccess().click()
//     return true
//   }
//
//   async GBPToJPYTrade(): Promise<boolean> {
//     await browser.wait(EC.visibilityOf(tradePage.linkAll()), maxWaitTime)
//     await tradePage.linkAll().click()
//     await browser.wait(EC.visibilityOf(tradePage.buttonBuyFourthCell()), maxWaitTime)
//     await tradePage.buttonBuyFourthCell().click()
//     await browser.sleep(2000)
//     await browser.wait(EC.visibilityOf(tradePage.tradeRejectedMessage()), maxWaitTime)
//     expect(tradePage.tradeRejectedMessage().getText()).toEqual('Your trade has been rejected')
//     await browser.wait(EC.visibilityOf(tradePage.buttonCloseTradeRejected()), maxWaitTime)
//     await tradePage.buttonCloseTradeRejected().click()
//     return true
//   }
//
//   async EURToJPYTrade(): Promise<boolean> {
//     await browser.wait(EC.visibilityOf(tradePage.linkAll()), maxWaitTime)
//     await tradePage.linkAll().click()
//     await browser.wait(EC.visibilityOf(tradePage.buttonBuyFifthCell()), maxWaitTime)
//     await tradePage.buttonBuyFifthCell().click()
//     await browser.sleep(2000)
//     await browser.wait(EC.visibilityOf(tradePage.tradeExecutionTimeOutMessage()), maxWaitTime)
//     expect(tradePage.tradeExecutionTimeOutMessage().getText()).toEqual('Trade Execution taking longer then Expected')
//     await browser.wait(EC.visibilityOf(tradePage.tradeSuccessMessage()), maxWaitTime)
//     expect(tradePage.tradeSuccessMessage().getText()).toBeTruthy()
//     expect(tradePage.tradeSuccessMessage().getText()).toContain('You bought')
//     await browser.wait(EC.visibilityOf(tradePage.buttonCloseTradeSuccess()), maxWaitTime)
//     await tradePage.buttonCloseTradeSuccess().click()
//     return true
//   }
//
//   async EURToUSDTrade(): Promise<boolean> {
//     await browser.wait(EC.visibilityOf(tradePage.linkAll()), maxWaitTime)
//     await tradePage.linkAll().click()
//     await browser.wait(EC.visibilityOf(tradePage.buttonSellFirstCell()), maxWaitTime)
//     await tradePage.buttonSellFirstCell().click()
//     await browser.sleep(2000)
//     await browser.wait(EC.visibilityOf(tradePage.tradeSuccessMessage()), maxWaitTime)
//     expect(tradePage.tradeSuccessMessage().getText()).toBeTruthy()
//     expect(tradePage.tradeSuccessMessage().getText()).toContain('You sold')
//     await browser.wait(EC.visibilityOf(tradePage.buttonCloseTradeSuccess()), maxWaitTime)
//     await tradePage.buttonCloseTradeSuccess().click()
//     return true
//   }
// }
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidHJhZGUubWV0aG9kLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vc3RlcHMvdHJhZGUubWV0aG9kLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLHdGQUF3RjtBQUN4RixrREFBa0Q7QUFDbEQsRUFBRTtBQUNGLDZCQUE2QjtBQUM3QixvQ0FBb0M7QUFDcEMsRUFBRTtBQUNGLDZCQUE2QjtBQUM3QixFQUFFO0FBQ0YscUVBQXFFO0FBQ3JFLHdGQUF3RjtBQUN4Rix1RkFBdUY7QUFDdkYsZ0RBQWdEO0FBQ2hELG9EQUFvRDtBQUNwRCx1RUFBdUU7QUFDdkUsa0JBQWtCO0FBQ2xCLE1BQU07QUFDTixFQUFFO0FBQ0YsOENBQThDO0FBQzlDLDRFQUE0RTtBQUM1RSx3Q0FBd0M7QUFDeEMsMkNBQTJDO0FBQzNDLHdGQUF3RjtBQUN4RixvREFBb0Q7QUFDcEQsZ0NBQWdDO0FBQ2hDLHdGQUF3RjtBQUN4RiwyRUFBMkU7QUFDM0UsOEVBQThFO0FBQzlFLDRGQUE0RjtBQUM1Rix3REFBd0Q7QUFDeEQsa0JBQWtCO0FBQ2xCLE1BQU07QUFDTixFQUFFO0FBQ0YsOENBQThDO0FBQzlDLDRFQUE0RTtBQUM1RSx3Q0FBd0M7QUFDeEMsd0ZBQXdGO0FBQ3hGLG9EQUFvRDtBQUNwRCxnQ0FBZ0M7QUFDaEMseUZBQXlGO0FBQ3pGLGlHQUFpRztBQUNqRyw2RkFBNkY7QUFDN0YseURBQXlEO0FBQ3pELGtCQUFrQjtBQUNsQixNQUFNO0FBQ04sRUFBRTtBQUNGLDhDQUE4QztBQUM5Qyw0RUFBNEU7QUFDNUUsd0NBQXdDO0FBQ3hDLHVGQUF1RjtBQUN2RixtREFBbUQ7QUFDbkQsZ0NBQWdDO0FBQ2hDLGlHQUFpRztBQUNqRyx3SEFBd0g7QUFDeEgsd0ZBQXdGO0FBQ3hGLHFFQUFxRTtBQUNyRSxnRkFBZ0Y7QUFDaEYsNEZBQTRGO0FBQzVGLHdEQUF3RDtBQUN4RCxrQkFBa0I7QUFDbEIsTUFBTTtBQUNOLEVBQUU7QUFDRiw4Q0FBOEM7QUFDOUMsNEVBQTRFO0FBQzVFLHdDQUF3QztBQUN4Qyx3RkFBd0Y7QUFDeEYsb0RBQW9EO0FBQ3BELGdDQUFnQztBQUNoQyx3RkFBd0Y7QUFDeEYscUVBQXFFO0FBQ3JFLDhFQUE4RTtBQUM5RSw0RkFBNEY7QUFDNUYsd0RBQXdEO0FBQ3hELGtCQUFrQjtBQUNsQixNQUFNO0FBQ04sSUFBSSJ9