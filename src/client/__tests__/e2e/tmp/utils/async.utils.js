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
function wait(ms) {
    return new Promise(resolve => {
        setTimeout(resolve, ms);
    });
}
exports.wait = wait;
function mapAsync(items, mapper) {
    return __awaiter(this, void 0, void 0, function* () {
        const results = [];
        for (let i = 0; i < items.length; i++) {
            const item = items[i];
            const result = yield mapper(item, i);
            results.push(result);
        }
        return results;
    });
}
exports.mapAsync = mapAsync;
function findAsync(items, predicate) {
    return __awaiter(this, void 0, void 0, function* () {
        for (let i = 0; i < items.length; i++) {
            const item = items[i];
            const matches = yield predicate(item, i);
            if (matches) {
                return item;
            }
        }
        return void 0;
    });
}
exports.findAsync = findAsync;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYXN5bmMudXRpbHMuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi91dGlscy9hc3luYy51dGlscy50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7O0FBQUEsU0FBZ0IsSUFBSSxDQUFDLEVBQVU7SUFDN0IsT0FBTyxJQUFJLE9BQU8sQ0FBQyxPQUFPLENBQUMsRUFBRTtRQUMzQixVQUFVLENBQUMsT0FBTyxFQUFFLEVBQUUsQ0FBQyxDQUFBO0lBQ3pCLENBQUMsQ0FBQyxDQUFBO0FBQ0osQ0FBQztBQUpELG9CQUlDO0FBRUQsU0FBc0IsUUFBUSxDQUM1QixLQUFZLEVBQ1osTUFBb0Q7O1FBRXBELE1BQU0sT0FBTyxHQUFXLEVBQUUsQ0FBQTtRQUUxQixLQUFLLElBQUksQ0FBQyxHQUFHLENBQUMsRUFBRSxDQUFDLEdBQUcsS0FBSyxDQUFDLE1BQU0sRUFBRSxDQUFDLEVBQUUsRUFBRTtZQUNyQyxNQUFNLElBQUksR0FBRyxLQUFLLENBQUMsQ0FBQyxDQUFDLENBQUE7WUFDckIsTUFBTSxNQUFNLEdBQUcsTUFBTSxNQUFNLENBQUMsSUFBSSxFQUFFLENBQUMsQ0FBQyxDQUFBO1lBQ3BDLE9BQU8sQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDLENBQUE7U0FDckI7UUFFRCxPQUFPLE9BQU8sQ0FBQTtJQUNoQixDQUFDO0NBQUE7QUFiRCw0QkFhQztBQUVELFNBQXNCLFNBQVMsQ0FBSSxLQUFVLEVBQUUsU0FBd0Q7O1FBQ3JHLEtBQUssSUFBSSxDQUFDLEdBQUcsQ0FBQyxFQUFFLENBQUMsR0FBRyxLQUFLLENBQUMsTUFBTSxFQUFFLENBQUMsRUFBRSxFQUFFO1lBQ3JDLE1BQU0sSUFBSSxHQUFHLEtBQUssQ0FBQyxDQUFDLENBQUMsQ0FBQTtZQUNyQixNQUFNLE9BQU8sR0FBRyxNQUFNLFNBQVMsQ0FBQyxJQUFJLEVBQUUsQ0FBQyxDQUFDLENBQUE7WUFFeEMsSUFBSSxPQUFPLEVBQUU7Z0JBQ1gsT0FBTyxJQUFJLENBQUE7YUFDWjtTQUNGO1FBRUQsT0FBTyxLQUFLLENBQUMsQ0FBQTtJQUNmLENBQUM7Q0FBQTtBQVhELDhCQVdDIn0=