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
exports.waitForElementToBePresent = createBrowserExpectationAwaiter(protractor_1.ExpectedConditions.presenceOf.name, finder => protractor_1.ExpectedConditions.presenceOf(finder));
exports.waitForElementToBeVisible = createBrowserExpectationAwaiter(protractor_1.ExpectedConditions.visibilityOf.name, finder => protractor_1.ExpectedConditions.visibilityOf(finder));
exports.waitForElementToBeInvisible = createBrowserExpectationAwaiter(protractor_1.ExpectedConditions.invisibilityOf.name, finder => protractor_1.ExpectedConditions.invisibilityOf(finder));
exports.waitForElementToBeClickable = createBrowserExpectationAwaiter(protractor_1.ExpectedConditions.elementToBeClickable.name, finder => protractor_1.ExpectedConditions.elementToBeClickable(finder));
function createBrowserExpectationAwaiter(expectationName, expectedConditions) {
    return (browser, finder, timeout = 5000) => __awaiter(this, void 0, void 0, function* () {
        try {
            yield browser.wait(expectedConditions(finder), timeout);
        }
        catch (error) {
            throw augmentErrorWithFinderDetails(error, expectationName, finder);
        }
    });
}
function augmentErrorWithFinderDetails(error, expectation, finder) {
    const selector = finder.locator().toString();
    const newError = new Error(`${error.message} while expecting ${expectation} ${selector}`);
    newError.name = error.name;
    newError.stack = error.stack;
    return newError;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYnJvd3Nlci51dGlscy5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uL3V0aWxzL2Jyb3dzZXIudXRpbHMudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7OztBQUFBLDJDQUF1RjtBQUUxRSxRQUFBLHlCQUF5QixHQUFHLCtCQUErQixDQUFDLCtCQUFFLENBQUMsVUFBVSxDQUFDLElBQUksRUFBRSxNQUFNLENBQUMsRUFBRSxDQUNwRywrQkFBRSxDQUFDLFVBQVUsQ0FBQyxNQUFNLENBQUMsQ0FDdEIsQ0FBQTtBQUNZLFFBQUEseUJBQXlCLEdBQUcsK0JBQStCLENBQUMsK0JBQUUsQ0FBQyxZQUFZLENBQUMsSUFBSSxFQUFFLE1BQU0sQ0FBQyxFQUFFLENBQ3RHLCtCQUFFLENBQUMsWUFBWSxDQUFDLE1BQU0sQ0FBQyxDQUN4QixDQUFBO0FBQ1ksUUFBQSwyQkFBMkIsR0FBRywrQkFBK0IsQ0FBQywrQkFBRSxDQUFDLGNBQWMsQ0FBQyxJQUFJLEVBQUUsTUFBTSxDQUFDLEVBQUUsQ0FDMUcsK0JBQUUsQ0FBQyxjQUFjLENBQUMsTUFBTSxDQUFDLENBQzFCLENBQUE7QUFDWSxRQUFBLDJCQUEyQixHQUFHLCtCQUErQixDQUFDLCtCQUFFLENBQUMsb0JBQW9CLENBQUMsSUFBSSxFQUFFLE1BQU0sQ0FBQyxFQUFFLENBQ2hILCtCQUFFLENBQUMsb0JBQW9CLENBQUMsTUFBTSxDQUFDLENBQ2hDLENBQUE7QUFFRCxTQUFTLCtCQUErQixDQUFDLGVBQXVCLEVBQUUsa0JBQWtEO0lBQ2xILE9BQU8sQ0FBTyxPQUEwQixFQUFFLE1BQXFCLEVBQUUsT0FBTyxHQUFHLElBQUksRUFBRSxFQUFFO1FBQ2pGLElBQUk7WUFDRixNQUFNLE9BQU8sQ0FBQyxJQUFJLENBQUMsa0JBQWtCLENBQUMsTUFBTSxDQUFDLEVBQUUsT0FBTyxDQUFDLENBQUE7U0FDeEQ7UUFBQyxPQUFPLEtBQUssRUFBRTtZQUNkLE1BQU0sNkJBQTZCLENBQUMsS0FBSyxFQUFFLGVBQWUsRUFBRSxNQUFNLENBQUMsQ0FBQTtTQUNwRTtJQUNILENBQUMsQ0FBQSxDQUFBO0FBQ0gsQ0FBQztBQUVELFNBQVMsNkJBQTZCLENBQUMsS0FBWSxFQUFFLFdBQW1CLEVBQUUsTUFBcUI7SUFDN0YsTUFBTSxRQUFRLEdBQUcsTUFBTSxDQUFDLE9BQU8sRUFBRSxDQUFDLFFBQVEsRUFBRSxDQUFBO0lBRTVDLE1BQU0sUUFBUSxHQUFHLElBQUksS0FBSyxDQUFDLEdBQUcsS0FBSyxDQUFDLE9BQU8sb0JBQW9CLFdBQVcsSUFBSSxRQUFRLEVBQUUsQ0FBQyxDQUFBO0lBQ3pGLFFBQVEsQ0FBQyxJQUFJLEdBQUcsS0FBSyxDQUFDLElBQUksQ0FBQTtJQUMxQixRQUFRLENBQUMsS0FBSyxHQUFHLEtBQUssQ0FBQyxLQUFLLENBQUE7SUFFNUIsT0FBTyxRQUFRLENBQUE7QUFDakIsQ0FBQyJ9