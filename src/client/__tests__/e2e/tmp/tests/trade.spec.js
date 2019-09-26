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
const browser_manager_1 = require("../browser-manager");
const async_utils_1 = require("../utils/async.utils");
const main_page_1 = require("../pages/main.page");
let browser;
let mainPage;
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
        yield mainPage.workspace.selectCurrency('NZD');
        const element = browser.element(protractor_1.by.qaTag('currency-option-nzd'));
        expect(element.getText()).toBe('NZD0');
        yield async_utils_1.wait(3000);
    }));
    afterAll(() => __awaiter(this, void 0, void 0, function* () {
        yield browser.close();
    }));
}));
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidHJhZGUuc3BlYy5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uL3Rlc3RzL3RyYWRlLnNwZWMudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7OztBQUFBLHdCQUF3QjtBQUN4QiwyQ0FBa0Q7QUFDbEQsd0RBQStDO0FBQy9DLHNEQUEyQztBQUUzQyxrREFBNkM7QUFFN0MsSUFBSSxPQUEwQixDQUFBO0FBQzlCLElBQUksUUFBa0IsQ0FBQTtBQUV0QixRQUFRLENBQUMsb0RBQW9ELEVBQUUsR0FBUyxFQUFFO0lBRXhFLFVBQVUsQ0FBQyxHQUFTLEVBQUU7UUFDcEIsT0FBTyxHQUFHLE1BQU0sNEJBQVUsRUFBRSxDQUFBO1FBQzVCLFFBQVEsR0FBRyxJQUFJLG9CQUFRLENBQUMsT0FBTyxDQUFDLENBQUE7SUFDbEMsQ0FBQyxDQUFBLENBQUMsQ0FBQTtJQUVGLEVBQUUsQ0FBQyxtQkFBbUIsRUFBRSxHQUFTLEVBQUU7UUFDakMsTUFBTSxLQUFLLEdBQUcsTUFBTSxPQUFPLENBQUMsUUFBUSxFQUFFLENBQUE7UUFDdEMsTUFBTSxDQUFDLEtBQUssQ0FBQyxDQUFDLElBQUksQ0FBQyx1QkFBdUIsQ0FBQyxDQUFBO0lBQzdDLENBQUMsQ0FBQSxDQUFDLENBQUE7SUFFRixFQUFFLENBQUMscUNBQXFDLEVBQUUsR0FBUyxFQUFFO1FBQ25ELE1BQU0sUUFBUSxDQUFDLFNBQVMsQ0FBQyxjQUFjLENBQUMsS0FBSyxDQUFDLENBQUE7UUFDOUMsTUFBTSxPQUFPLEdBQUcsT0FBTyxDQUFDLE9BQU8sQ0FBQyxlQUFFLENBQUMsS0FBSyxDQUFDLHFCQUFxQixDQUFDLENBQUMsQ0FBQTtRQUNoRSxNQUFNLENBQUMsT0FBTyxDQUFDLE9BQU8sRUFBRSxDQUFDLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxDQUFBO1FBQ3RDLE1BQU0sa0JBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQTtJQUNsQixDQUFDLENBQUEsQ0FBQyxDQUFBO0lBRUYsUUFBUSxDQUFDLEdBQVMsRUFBRTtRQUNsQixNQUFNLE9BQU8sQ0FBQyxLQUFLLEVBQUUsQ0FBQTtJQUN2QixDQUFDLENBQUEsQ0FBQyxDQUFBO0FBRUosQ0FBQyxDQUFBLENBQUMsQ0FBQSJ9