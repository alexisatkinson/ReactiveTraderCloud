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
const browser_utils_1 = require("../utils/browser.utils");
class WorkspaceComponent {
    constructor(browser, root) {
        this.browser = browser;
        this.root = root;
        this.linkAll = root.element(protractor_1.by.qaTag('currency-option-all'));
        this.linkEUR = root.element(protractor_1.by.qaTag('currency-option-eur'));
        this.linkUSD = root.element(protractor_1.by.qaTag('currency-option-usd'));
        this.linkGBP = root.element(protractor_1.by.qaTag('currency-option-gbp'));
        this.linkAUD = root.element(protractor_1.by.qaTag('currency-option-aud'));
        this.linkNZD = root.element(protractor_1.by.qaTag('currency-option-nzd'));
    }
    selectCurrency(linkCurrency) {
        return __awaiter(this, void 0, void 0, function* () {
            switch (linkCurrency) {
                case 'All': {
                    yield browser_utils_1.waitForElementToBeVisible(this.browser, this.linkAll);
                    yield this.linkAll.click();
                    break;
                }
                case 'EUR': {
                    yield browser_utils_1.waitForElementToBeVisible(this.browser, this.linkEUR);
                    yield this.linkEUR.click();
                    break;
                }
                case 'USD': {
                    yield browser_utils_1.waitForElementToBeVisible(this.browser, this.linkUSD);
                    yield this.linkUSD.click();
                    break;
                }
                case 'GBP': {
                    yield browser_utils_1.waitForElementToBeVisible(this.browser, this.linkGBP);
                    yield this.linkGBP.click();
                    break;
                }
                case 'AUD': {
                    yield browser_utils_1.waitForElementToBeVisible(this.browser, this.linkAUD);
                    yield this.linkAUD.click();
                    break;
                }
                case 'NZD': {
                    yield browser_utils_1.waitForElementToBeVisible(this.browser, this.linkNZD);
                    yield this.linkNZD.click();
                    break;
                }
            }
        });
    }
    isConnected() {
        return __awaiter(this, void 0, void 0, function* () {
            const connectionElement = this.browser.element(protractor_1.by.qa('status-button__toggle-button'));
            return connectionElement.isPresent();
        });
    }
}
exports.WorkspaceComponent = WorkspaceComponent;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoid29ya3NwYWNlLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uL3BhZ2VzL3dvcmtzcGFjZS5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7OztBQUFBLDJDQUFpRTtBQUNqRSwwREFBK0Y7QUFFL0YsTUFBYSxrQkFBa0I7SUFRN0IsWUFBb0IsT0FBMEIsRUFBUyxJQUFtQjtRQUF0RCxZQUFPLEdBQVAsT0FBTyxDQUFtQjtRQUFTLFNBQUksR0FBSixJQUFJLENBQWU7UUFDeEUsSUFBSSxDQUFDLE9BQU8sR0FBRyxJQUFJLENBQUMsT0FBTyxDQUFDLGVBQUUsQ0FBQyxLQUFLLENBQUMscUJBQXFCLENBQUMsQ0FBQyxDQUFBO1FBQzVELElBQUksQ0FBQyxPQUFPLEdBQUcsSUFBSSxDQUFDLE9BQU8sQ0FBQyxlQUFFLENBQUMsS0FBSyxDQUFDLHFCQUFxQixDQUFDLENBQUMsQ0FBQTtRQUM1RCxJQUFJLENBQUMsT0FBTyxHQUFHLElBQUksQ0FBQyxPQUFPLENBQUMsZUFBRSxDQUFDLEtBQUssQ0FBQyxxQkFBcUIsQ0FBQyxDQUFDLENBQUE7UUFDNUQsSUFBSSxDQUFDLE9BQU8sR0FBRyxJQUFJLENBQUMsT0FBTyxDQUFDLGVBQUUsQ0FBQyxLQUFLLENBQUMscUJBQXFCLENBQUMsQ0FBQyxDQUFBO1FBQzVELElBQUksQ0FBQyxPQUFPLEdBQUcsSUFBSSxDQUFDLE9BQU8sQ0FBQyxlQUFFLENBQUMsS0FBSyxDQUFDLHFCQUFxQixDQUFDLENBQUMsQ0FBQTtRQUM1RCxJQUFJLENBQUMsT0FBTyxHQUFHLElBQUksQ0FBQyxPQUFPLENBQUMsZUFBRSxDQUFDLEtBQUssQ0FBQyxxQkFBcUIsQ0FBQyxDQUFDLENBQUE7SUFDOUQsQ0FBQztJQUVLLGNBQWMsQ0FBQyxZQUFvQjs7WUFDdkMsUUFBUSxZQUFZLEVBQUU7Z0JBQ3BCLEtBQUssS0FBSyxDQUFDLENBQUM7b0JBQ1YsTUFBTSx5Q0FBeUIsQ0FBQyxJQUFJLENBQUMsT0FBTyxFQUFFLElBQUksQ0FBQyxPQUFPLENBQUMsQ0FBQTtvQkFDM0QsTUFBTSxJQUFJLENBQUMsT0FBTyxDQUFDLEtBQUssRUFBRSxDQUFBO29CQUMxQixNQUFLO2lCQUNOO2dCQUNELEtBQUssS0FBSyxDQUFDLENBQUM7b0JBQ1YsTUFBTSx5Q0FBeUIsQ0FBQyxJQUFJLENBQUMsT0FBTyxFQUFFLElBQUksQ0FBQyxPQUFPLENBQUMsQ0FBQTtvQkFDM0QsTUFBTSxJQUFJLENBQUMsT0FBTyxDQUFDLEtBQUssRUFBRSxDQUFBO29CQUMxQixNQUFLO2lCQUNOO2dCQUNELEtBQUssS0FBSyxDQUFDLENBQUM7b0JBQ1YsTUFBTSx5Q0FBeUIsQ0FBQyxJQUFJLENBQUMsT0FBTyxFQUFFLElBQUksQ0FBQyxPQUFPLENBQUMsQ0FBQTtvQkFDM0QsTUFBTSxJQUFJLENBQUMsT0FBTyxDQUFDLEtBQUssRUFBRSxDQUFBO29CQUMxQixNQUFLO2lCQUNOO2dCQUNELEtBQUssS0FBSyxDQUFDLENBQUM7b0JBQ1YsTUFBTSx5Q0FBeUIsQ0FBQyxJQUFJLENBQUMsT0FBTyxFQUFFLElBQUksQ0FBQyxPQUFPLENBQUMsQ0FBQTtvQkFDM0QsTUFBTSxJQUFJLENBQUMsT0FBTyxDQUFDLEtBQUssRUFBRSxDQUFBO29CQUMxQixNQUFLO2lCQUNOO2dCQUNELEtBQUssS0FBSyxDQUFDLENBQUM7b0JBQ1YsTUFBTSx5Q0FBeUIsQ0FBQyxJQUFJLENBQUMsT0FBTyxFQUFFLElBQUksQ0FBQyxPQUFPLENBQUMsQ0FBQTtvQkFDM0QsTUFBTSxJQUFJLENBQUMsT0FBTyxDQUFDLEtBQUssRUFBRSxDQUFBO29CQUMxQixNQUFLO2lCQUNOO2dCQUNELEtBQUssS0FBSyxDQUFDLENBQUM7b0JBQ1YsTUFBTSx5Q0FBeUIsQ0FBQyxJQUFJLENBQUMsT0FBTyxFQUFFLElBQUksQ0FBQyxPQUFPLENBQUMsQ0FBQTtvQkFDM0QsTUFBTSxJQUFJLENBQUMsT0FBTyxDQUFDLEtBQUssRUFBRSxDQUFBO29CQUMxQixNQUFLO2lCQUNOO2FBQ0Y7UUFDSCxDQUFDO0tBQUE7SUFFSyxXQUFXOztZQUNmLE1BQU0saUJBQWlCLEdBQUcsSUFBSSxDQUFDLE9BQU8sQ0FBQyxPQUFPLENBQUMsZUFBRSxDQUFDLEVBQUUsQ0FBQyw4QkFBOEIsQ0FBQyxDQUFDLENBQUE7WUFDckYsT0FBTyxpQkFBaUIsQ0FBQyxTQUFTLEVBQUUsQ0FBQTtRQUN0QyxDQUFDO0tBQUE7Q0FDRjtBQXhERCxnREF3REMifQ==