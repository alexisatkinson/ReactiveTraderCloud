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
const protractor_1 = require("protractor");
const async_utils_1 = require("./utils/async.utils");
const browser_utils_1 = require("./utils/browser.utils");
let activeBrowser;
function getBrowser() {
    return __awaiter(this, void 0, void 0, function* () {
        if (!activeBrowser) {
            console.log('Preparing browser');
            activeBrowser = yield prepareBrowser();
        }
        return activeBrowser;
    });
}
exports.getBrowser = getBrowser;
function prepareBrowser() {
    return __awaiter(this, void 0, void 0, function* () {
        // We are testing a React project. We need to disable Angular sync.
        yield protractor_1.browser.waitForAngularEnabled(false);
        yield protractor_1.browser.get(protractor_1.browser.baseUrl, 10000);
        const rootElement = protractor_1.browser.element(protractor_1.by.qa('root'));
        const connectedStatusBar = protractor_1.browser.element(protractor_1.by.css(`[data-qa="status-bar"][data-mode="CONNECTED"]`));
        yield browser_utils_1.waitForElementToBePresent(protractor_1.browser, rootElement);
        // await waitForElementToBeVisible(browser, connectedStatusBar, 10000)
        // Wait for first rendering, for good measure.
        yield async_utils_1.wait(1000);
        return protractor_1.browser;
    });
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYnJvd3Nlci1tYW5hZ2VyLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vYnJvd3Nlci1tYW5hZ2VyLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7QUFBQSwyQ0FBMkQ7QUFDM0QscURBQTBDO0FBQzFDLHlEQUE0RjtBQUU1RixJQUFJLGFBQWdDLENBQUE7QUFFcEMsU0FBc0IsVUFBVTs7UUFDOUIsSUFBSSxDQUFDLGFBQWEsRUFBRTtZQUNsQixPQUFPLENBQUMsR0FBRyxDQUFDLG1CQUFtQixDQUFDLENBQUE7WUFDaEMsYUFBYSxHQUFHLE1BQU0sY0FBYyxFQUFFLENBQUE7U0FDdkM7UUFFRCxPQUFPLGFBQWEsQ0FBQTtJQUN0QixDQUFDO0NBQUE7QUFQRCxnQ0FPQztBQUVELFNBQWUsY0FBYzs7UUFDM0IsbUVBQW1FO1FBQ25FLE1BQU0sb0JBQU8sQ0FBQyxxQkFBcUIsQ0FBQyxLQUFLLENBQUMsQ0FBQTtRQUUxQyxNQUFNLG9CQUFPLENBQUMsR0FBRyxDQUFDLG9CQUFPLENBQUMsT0FBTyxFQUFFLEtBQUssQ0FBQyxDQUFBO1FBRXpDLE1BQU0sV0FBVyxHQUFHLG9CQUFPLENBQUMsT0FBTyxDQUFDLGVBQUUsQ0FBQyxFQUFFLENBQUMsTUFBTSxDQUFDLENBQUMsQ0FBQTtRQUNsRCxNQUFNLGtCQUFrQixHQUFHLG9CQUFPLENBQUMsT0FBTyxDQUFDLGVBQUUsQ0FBQyxHQUFHLENBQUMsK0NBQStDLENBQUMsQ0FBQyxDQUFBO1FBRW5HLE1BQU0seUNBQXlCLENBQUMsb0JBQU8sRUFBRSxXQUFXLENBQUMsQ0FBQTtRQUNyRCxzRUFBc0U7UUFFdEUsOENBQThDO1FBQzlDLE1BQU0sa0JBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQTtRQUVoQixPQUFPLG9CQUFPLENBQUE7SUFDaEIsQ0FBQztDQUFBIn0=