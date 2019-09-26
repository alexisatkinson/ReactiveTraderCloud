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
        yield protractor_1.browser.get(protractor_1.browser.params.baseUrl, 10000);
        // Wait for first rendering, for good measure.
        yield async_utils_1.wait(5000);
        return protractor_1.browser;
    });
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYnJvd3Nlci1tYW5hZ2VyLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vYnJvd3Nlci1tYW5hZ2VyLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7QUFBQSwyQ0FBMkQ7QUFDM0QscURBQTBDO0FBRzFDLElBQUksYUFBZ0MsQ0FBQTtBQUVwQyxTQUFzQixVQUFVOztRQUM5QixJQUFJLENBQUMsYUFBYSxFQUFFO1lBQ2xCLE9BQU8sQ0FBQyxHQUFHLENBQUMsbUJBQW1CLENBQUMsQ0FBQTtZQUNoQyxhQUFhLEdBQUcsTUFBTSxjQUFjLEVBQUUsQ0FBQTtTQUN2QztRQUVELE9BQU8sYUFBYSxDQUFBO0lBQ3RCLENBQUM7Q0FBQTtBQVBELGdDQU9DO0FBRUQsU0FBZSxjQUFjOztRQUMzQixtRUFBbUU7UUFDbkUsTUFBTSxvQkFBTyxDQUFDLHFCQUFxQixDQUFDLEtBQUssQ0FBQyxDQUFBO1FBRTFDLE1BQU0sb0JBQU8sQ0FBQyxHQUFHLENBQUMsb0JBQU8sQ0FBQyxNQUFNLENBQUMsT0FBTyxFQUFFLEtBQUssQ0FBQyxDQUFBO1FBRWhELDhDQUE4QztRQUM5QyxNQUFNLGtCQUFJLENBQUMsSUFBSSxDQUFDLENBQUE7UUFFaEIsT0FBTyxvQkFBTyxDQUFBO0lBQ2hCLENBQUM7Q0FBQSJ9