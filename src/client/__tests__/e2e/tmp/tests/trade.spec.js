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
        yield async_utils_1.wait(5000);
        const element = yield protractor_1.browser.element(protractor_1.by.qaTag('currency-option-eur'));
        element.click();
        yield async_utils_1.wait(3000);
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidHJhZGUuc3BlYy5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uL3Rlc3RzL3RyYWRlLnNwZWMudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7OztBQUFBLHdCQUF3QjtBQUN4QiwyQ0FBOEQ7QUFDOUQsb0RBQStDO0FBQy9DLHdEQUFtRDtBQUNuRCxzREFBMkM7QUFFM0MsTUFBTSxTQUFTLEdBQUcsSUFBSSxzQkFBUyxFQUFFLENBQUE7QUFDakMsTUFBTSxXQUFXLEdBQUcsSUFBSSwwQkFBVyxFQUFFLENBQUE7QUFFckMsUUFBUSxDQUFDLDhDQUE4QyxFQUFFLEdBQVEsRUFBRTtJQUVqRSxVQUFVLENBQUMsR0FBUSxFQUFFO1FBQ25CLE1BQU0sb0JBQU8sQ0FBQyxxQkFBcUIsQ0FBQyxLQUFLLENBQUMsQ0FBQTtRQUMxQyxNQUFNLG9CQUFPLENBQUMsR0FBRyxDQUFDLG9CQUFPLENBQUMsTUFBTSxDQUFDLE9BQU8sQ0FBQyxDQUFBO0lBQzNDLENBQUMsQ0FBQSxDQUFDLENBQUE7SUFFRixFQUFFLENBQUMsc0NBQXNDLEVBQUUsR0FBUyxFQUFFO1FBQ3BELE1BQU0sa0JBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQTtRQUNoQixNQUFNLE9BQU8sR0FBRyxNQUFNLG9CQUFPLENBQUMsT0FBTyxDQUFDLGVBQUUsQ0FBQyxLQUFLLENBQUMscUJBQXFCLENBQUMsQ0FBQyxDQUFBO1FBQ3RFLE9BQU8sQ0FBQyxLQUFLLEVBQUUsQ0FBQTtRQUNmLE1BQU0sa0JBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQTtJQUNsQixDQUFDLENBQUEsQ0FBQyxDQUFDO0lBV0gsMERBQTBEO0lBQzFELHNFQUFzRTtJQUN0RSxzQ0FBc0M7SUFDdEMsd0VBQXdFO0lBQ3hFLDhHQUE4RztJQUM5RyxLQUFLO0lBQ0wsRUFBRTtJQUNGLDJEQUEyRDtJQUMzRCxzQ0FBc0M7SUFDdEMsc0VBQXNFO0lBQ3RFLDZHQUE2RztJQUM3RyxLQUFLO0lBQ0wsRUFBRTtJQUNGLDJEQUEyRDtJQUMzRCxzQ0FBc0M7SUFDdEMsa0VBQWtFO0lBQ2xFLEtBQUs7SUFDTCxFQUFFO0lBQ0YsMkRBQTJEO0lBQzNELHNDQUFzQztJQUN0Qyw2REFBNkQ7SUFDN0Qsa0VBQWtFO0lBQ2xFLCtEQUErRDtJQUMvRCxxRUFBcUU7SUFDckUsS0FBSztJQUVMLFFBQVEsQ0FBQyxHQUFRLEVBQUU7UUFDZixNQUFNLG9CQUFPLENBQUMsS0FBSyxFQUFFLENBQUE7SUFDekIsQ0FBQyxDQUFBLENBQUMsQ0FBQTtBQUVKLENBQUMsQ0FBQSxDQUFDLENBQUEifQ==