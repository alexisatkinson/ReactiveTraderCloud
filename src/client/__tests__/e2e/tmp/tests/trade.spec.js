"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
// Import required pages
const protractor_1 = require("protractor");
const trade_page_1 = require("../pages/trade.page");
const trade_method_1 = require("../steps/trade.method");
const async_utils_1 = require("../utils/async.utils");
const tradePage = new trade_page_1.TradePage();
const tradeMethod = new trade_method_1.TradeMethod();
describe('UI Smoke Tests for Reactive Trader Cloud App', () => __awaiter(this, void 0, void 0, function* () {
    beforeEach(() => __awaiter(this, void 0, void 0, function* () {
        yield protractor_1.browser.waitForAngularEnabled(false);
        yield protractor_1.browser.get(protractor_1.browser.params.baseUrl);
    }));
    it('User should be able to refine search', () => __awaiter(this, void 0, void 0, function* () {
        yield async_utils_1.wait(10000);
        console.log("am i here!");
    }));
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
    afterAll(() => __awaiter(this, void 0, void 0, function* () {
        yield protractor_1.browser.close();
    }));
}));
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidHJhZGUuc3BlYy5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uL3Rlc3RzL3RyYWRlLnNwZWMudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7OztBQUFBLHdCQUF3QjtBQUN4QiwyQ0FBOEQ7QUFDOUQsb0RBQStDO0FBQy9DLHdEQUFtRDtBQUNuRCxzREFBMkM7QUFFM0MsTUFBTSxTQUFTLEdBQUcsSUFBSSxzQkFBUyxFQUFFLENBQUE7QUFDakMsTUFBTSxXQUFXLEdBQUcsSUFBSSwwQkFBVyxFQUFFLENBQUE7QUFFckMsUUFBUSxDQUFDLDhDQUE4QyxFQUFFLEdBQVEsRUFBRTtJQUVqRSxVQUFVLENBQUMsR0FBUSxFQUFFO1FBQ25CLE1BQU0sb0JBQU8sQ0FBQyxxQkFBcUIsQ0FBQyxLQUFLLENBQUMsQ0FBQTtRQUMxQyxNQUFNLG9CQUFPLENBQUMsR0FBRyxDQUFDLG9CQUFPLENBQUMsTUFBTSxDQUFDLE9BQU8sQ0FBQyxDQUFBO0lBQzNDLENBQUMsQ0FBQSxDQUFDLENBQUE7SUFFRixFQUFFLENBQUMsc0NBQXNDLEVBQUUsR0FBUyxFQUFFO1FBQ3BELE1BQU0sa0JBQUksQ0FBQyxLQUFLLENBQUMsQ0FBQTtRQUNqQixPQUFPLENBQUMsR0FBRyxDQUFDLFlBQVksQ0FBQyxDQUFBO0lBQzNCLENBQUMsQ0FBQSxDQUFDLENBQUM7SUFVSCwwREFBMEQ7SUFDMUQsc0VBQXNFO0lBQ3RFLHNDQUFzQztJQUN0Qyx3RUFBd0U7SUFDeEUsOEdBQThHO0lBQzlHLEtBQUs7SUFDTCxFQUFFO0lBQ0YsMkRBQTJEO0lBQzNELHNDQUFzQztJQUN0QyxzRUFBc0U7SUFDdEUsNkdBQTZHO0lBQzdHLEtBQUs7SUFDTCxFQUFFO0lBQ0YsMkRBQTJEO0lBQzNELHNDQUFzQztJQUN0QyxrRUFBa0U7SUFDbEUsS0FBSztJQUNMLEVBQUU7SUFDRiwyREFBMkQ7SUFDM0Qsc0NBQXNDO0lBQ3RDLDZEQUE2RDtJQUM3RCxrRUFBa0U7SUFDbEUsK0RBQStEO0lBQy9ELHFFQUFxRTtJQUNyRSxLQUFLO0lBRUwsUUFBUSxDQUFDLEdBQVEsRUFBRTtRQUNmLE1BQU0sb0JBQU8sQ0FBQyxLQUFLLEVBQUUsQ0FBQTtJQUN6QixDQUFDLENBQUEsQ0FBQyxDQUFBO0FBRUosQ0FBQyxDQUFBLENBQUMsQ0FBQSJ9