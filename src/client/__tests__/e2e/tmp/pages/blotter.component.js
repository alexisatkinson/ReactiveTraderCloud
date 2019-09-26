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
const async_utils_1 = require("../utils/async.utils");
const browser_utils_1 = require("../utils/browser.utils");
class BlotterComponent {
    constructor(browser, root) {
        this.browser = browser;
        this.root = root;
    }
    getHeaders() {
        return __awaiter(this, void 0, void 0, function* () {
            const headerRow = this.root.element(protractor_1.by.css('.ag-header-viewport .ag-header-row'));
            yield browser_utils_1.waitForElementToBePresent(this.browser, headerRow);
            const headerCells = yield headerRow.all(protractor_1.by.css('.ag-header-cell'));
            return async_utils_1.mapAsync(headerCells, (cell) => __awaiter(this, void 0, void 0, function* () {
                return {
                    id: yield cell.getAttribute('col-id'),
                    label: yield cell.element(protractor_1.by.css('.ag-header-cell-text')).getAttribute('textContent'),
                };
            }));
        });
    }
}
exports.BlotterComponent = BlotterComponent;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYmxvdHRlci5jb21wb25lbnQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi9wYWdlcy9ibG90dGVyLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7O0FBQUEsMkNBQWlFO0FBQ2pFLHNEQUErQztBQUMvQywwREFBa0U7QUFPbEUsTUFBYSxnQkFBZ0I7SUFDM0IsWUFBb0IsT0FBMEIsRUFBUyxJQUFtQjtRQUF0RCxZQUFPLEdBQVAsT0FBTyxDQUFtQjtRQUFTLFNBQUksR0FBSixJQUFJLENBQWU7SUFBSSxDQUFDO0lBRXpFLFVBQVU7O1lBQ2QsTUFBTSxTQUFTLEdBQUcsSUFBSSxDQUFDLElBQUksQ0FBQyxPQUFPLENBQUMsZUFBRSxDQUFDLEdBQUcsQ0FBQyxvQ0FBb0MsQ0FBQyxDQUFDLENBQUE7WUFDakYsTUFBTSx5Q0FBeUIsQ0FBQyxJQUFJLENBQUMsT0FBTyxFQUFFLFNBQVMsQ0FBQyxDQUFBO1lBRXhELE1BQU0sV0FBVyxHQUFvQixNQUFNLFNBQVMsQ0FBQyxHQUFHLENBQUMsZUFBRSxDQUFDLEdBQUcsQ0FBQyxpQkFBaUIsQ0FBQyxDQUFDLENBQUE7WUFDbkYsT0FBTyxzQkFBUSxDQUNiLFdBQVcsRUFDWCxDQUFPLElBQUksRUFBMEIsRUFBRTtnQkFDckMsT0FBTztvQkFDTCxFQUFFLEVBQUUsTUFBTSxJQUFJLENBQUMsWUFBWSxDQUFDLFFBQVEsQ0FBQztvQkFDckMsS0FBSyxFQUFFLE1BQU0sSUFBSSxDQUFDLE9BQU8sQ0FBQyxlQUFFLENBQUMsR0FBRyxDQUFDLHNCQUFzQixDQUFDLENBQUMsQ0FBQyxZQUFZLENBQUMsYUFBYSxDQUFDO2lCQUN0RixDQUFBO1lBQ0gsQ0FBQyxDQUFBLENBQ0YsQ0FBQTtRQUNILENBQUM7S0FBQTtDQUNGO0FBbEJELDRDQWtCQyJ9