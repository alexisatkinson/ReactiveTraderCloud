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
const browser_manager_1 = require("../browser-manager");
const async_utils_1 = require("../utils/async.utils");
const main_page_1 = require("../pages/main.page");
let browser;
let mainPage;
// const workspaceComponent = new WorkspaceComponent(browser)
describe('UI Tests for Reactive Trader Cloud Web Application', () => __awaiter(this, void 0, void 0, function* () {
    beforeEach(() => __awaiter(this, void 0, void 0, function* () {
        browser = yield browser_manager_1.getBrowser();
        mainPage = new main_page_1.MainPage(browser);
    }));
    it('Verify page title', () => __awaiter(this, void 0, void 0, function* () {
        const title = yield browser.getTitle();
        expect(title).toBe('Reactive Trader Cloud');
    }));
    it('select currency workspace component', () => __awaiter(this, void 0, void 0, function* () {
        // const element = await browser.element(by.qa('status-button__toggle-button'))
        // expect(element.getText()).toContain('Connect')
        yield mainPage.workspace.selectCurrency('EUR');
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
        yield browser.close();
    }));
}));
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidHJhZGUuc3BlYy5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uL3Rlc3RzL3RyYWRlLnNwZWMudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7OztBQUVBLHdEQUErQztBQUMvQyxzREFBMkM7QUFFM0Msa0RBQTZDO0FBRTdDLElBQUksT0FBMEIsQ0FBQTtBQUM5QixJQUFJLFFBQWtCLENBQUE7QUFDdEIsNkRBQTZEO0FBRTdELFFBQVEsQ0FBQyxvREFBb0QsRUFBRSxHQUFRLEVBQUU7SUFFdkUsVUFBVSxDQUFDLEdBQVEsRUFBRTtRQUNuQixPQUFPLEdBQUcsTUFBTSw0QkFBVSxFQUFFLENBQUE7UUFDNUIsUUFBUSxHQUFHLElBQUksb0JBQVEsQ0FBQyxPQUFPLENBQUMsQ0FBQTtJQUNsQyxDQUFDLENBQUEsQ0FBQyxDQUFBO0lBRUYsRUFBRSxDQUFDLG1CQUFtQixFQUFFLEdBQVMsRUFBRTtRQUNqQyxNQUFNLEtBQUssR0FBRyxNQUFNLE9BQU8sQ0FBQyxRQUFRLEVBQUUsQ0FBQTtRQUN0QyxNQUFNLENBQUMsS0FBSyxDQUFDLENBQUMsSUFBSSxDQUFDLHVCQUF1QixDQUFDLENBQUE7SUFDN0MsQ0FBQyxDQUFBLENBQUMsQ0FBQTtJQUVGLEVBQUUsQ0FBQyxxQ0FBcUMsRUFBRSxHQUFTLEVBQUU7UUFDbkQsK0VBQStFO1FBQy9FLGlEQUFpRDtRQUVqRCxNQUFNLFFBQVEsQ0FBQyxTQUFTLENBQUMsY0FBYyxDQUFDLEtBQUssQ0FBQyxDQUFBO1FBQzlDLE1BQU0sa0JBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQTtJQUNsQixDQUFDLENBQUEsQ0FBQyxDQUFBO0lBVUYsMERBQTBEO0lBQzFELHNFQUFzRTtJQUN0RSxzQ0FBc0M7SUFDdEMsd0VBQXdFO0lBQ3hFLDhHQUE4RztJQUM5RyxLQUFLO0lBQ0wsRUFBRTtJQUNGLDJEQUEyRDtJQUMzRCxzQ0FBc0M7SUFDdEMsc0VBQXNFO0lBQ3RFLDZHQUE2RztJQUM3RyxLQUFLO0lBQ0wsRUFBRTtJQUNGLDJEQUEyRDtJQUMzRCxzQ0FBc0M7SUFDdEMsa0VBQWtFO0lBQ2xFLEtBQUs7SUFDTCxFQUFFO0lBQ0YsMkRBQTJEO0lBQzNELHNDQUFzQztJQUN0Qyw2REFBNkQ7SUFDN0Qsa0VBQWtFO0lBQ2xFLCtEQUErRDtJQUMvRCxxRUFBcUU7SUFDckUsS0FBSztJQUVMLFFBQVEsQ0FBQyxHQUFRLEVBQUU7UUFDZixNQUFNLE9BQU8sQ0FBQyxLQUFLLEVBQUUsQ0FBQTtJQUN6QixDQUFDLENBQUEsQ0FBQyxDQUFBO0FBRUosQ0FBQyxDQUFBLENBQUMsQ0FBQSJ9