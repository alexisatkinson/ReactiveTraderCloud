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
const analytics_component_1 = require("./analytics.component");
const blotter_component_1 = require("./blotter.component");
const workspace_component_1 = require("./workspace.component");
const CONNECTED_REGEX = /^Connected to .*$/gi;
class MainPage {
    constructor(browser) {
        this.browser = browser;
        this.workspace = new workspace_component_1.WorkspaceComponent(browser, browser.element(protractor_1.by.qa('workspace__tiles-workspace')));
        this.analytics = new analytics_component_1.AnalyticsComponent(browser, browser.element(protractor_1.by.qa('shell-route__analytics-wrapper')));
        this.blotter = new blotter_component_1.BlotterComponent(browser, browser.element(protractor_1.by.qa('shell-route__blotter-wrapper')));
    }
    isConnected() {
        return __awaiter(this, void 0, void 0, function* () {
            const connectionElement = this.browser.element(protractor_1.by.qa('status-button__toggle-button'));
            return connectionElement.isPresent();
        });
    }
}
exports.MainPage = MainPage;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi5wYWdlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vcGFnZXMvbWFpbi5wYWdlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7QUFBQSwyQ0FBaUU7QUFDakUsK0RBQTBEO0FBQzFELDJEQUFzRDtBQUN0RCwrREFBMEQ7QUFFMUQsTUFBTSxlQUFlLEdBQUcscUJBQXFCLENBQUE7QUFFN0MsTUFBYSxRQUFRO0lBS25CLFlBQW9CLE9BQTBCO1FBQTFCLFlBQU8sR0FBUCxPQUFPLENBQW1CO1FBQzVDLElBQUksQ0FBQyxTQUFTLEdBQUcsSUFBSSx3Q0FBa0IsQ0FBQyxPQUFPLEVBQUUsT0FBTyxDQUFDLE9BQU8sQ0FBQyxlQUFFLENBQUMsRUFBRSxDQUFDLDRCQUE0QixDQUFDLENBQUMsQ0FBQyxDQUFBO1FBQ3RHLElBQUksQ0FBQyxTQUFTLEdBQUcsSUFBSSx3Q0FBa0IsQ0FBQyxPQUFPLEVBQUUsT0FBTyxDQUFDLE9BQU8sQ0FBQyxlQUFFLENBQUMsRUFBRSxDQUFDLGdDQUFnQyxDQUFDLENBQUMsQ0FBQyxDQUFBO1FBQzFHLElBQUksQ0FBQyxPQUFPLEdBQUcsSUFBSSxvQ0FBZ0IsQ0FBQyxPQUFPLEVBQUUsT0FBTyxDQUFDLE9BQU8sQ0FBQyxlQUFFLENBQUMsRUFBRSxDQUFDLDhCQUE4QixDQUFDLENBQUMsQ0FBQyxDQUFBO0lBQ3RHLENBQUM7SUFFSyxXQUFXOztZQUNmLE1BQU0saUJBQWlCLEdBQUcsSUFBSSxDQUFDLE9BQU8sQ0FBQyxPQUFPLENBQUMsZUFBRSxDQUFDLEVBQUUsQ0FBQyw4QkFBOEIsQ0FBQyxDQUFDLENBQUE7WUFDckYsT0FBTyxpQkFBaUIsQ0FBQyxTQUFTLEVBQUUsQ0FBQTtRQUN0QyxDQUFDO0tBQUE7Q0FDRjtBQWZELDRCQWVDIn0=