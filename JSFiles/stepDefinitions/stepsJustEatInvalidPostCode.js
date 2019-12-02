"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const cucumber_1 = require("cucumber");
const protractor_1 = require("protractor");
const justEatObj_1 = require("../pageObject/justEatObj");
const chai_1 = __importDefault(require("chai"));
var expect = chai_1.default.expect;
let eat = new justEatObj_1.justEatObj();
cucumber_1.Given('I am on home page {string}', (string) => __awaiter(void 0, void 0, void 0, function* () {
    yield protractor_1.browser.getCurrentUrl().then(text => {
        expect(text).to.equal(string);
    });
}));
cucumber_1.When('Enter wrong postal code {string}', (string) => __awaiter(void 0, void 0, void 0, function* () {
    yield eat.enterPostCode.sendKeys(string);
}));
cucumber_1.Then('I should see error message to enter valid code {string}', (string) => __awaiter(void 0, void 0, void 0, function* () {
    yield eat.search.click();
    yield eat.invalidPostCode.getText().then(text => {
        expect(text).to.equal(string);
    });
}));
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3RlcHNKdXN0RWF0SW52YWxpZFBvc3RDb2RlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vc3RlcERlZmluaXRpb25zL3N0ZXBzSnVzdEVhdEludmFsaWRQb3N0Q29kZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7OztBQUFBLHVDQUE2QztBQUM3QywyQ0FBOEQ7QUFFOUQseURBQXNEO0FBQ3RELGdEQUF3QjtBQUV4QixJQUFJLE1BQU0sR0FBRyxjQUFJLENBQUMsTUFBTSxDQUFDO0FBQ3pCLElBQUksR0FBRyxHQUFHLElBQUksdUJBQVUsRUFBRSxDQUFDO0FBRTNCLGdCQUFLLENBQUMsNEJBQTRCLEVBQUUsQ0FBTyxNQUFNLEVBQUUsRUFBRTtJQUNqRCxNQUFNLG9CQUFPLENBQUMsYUFBYSxFQUFFLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxFQUFFO1FBQ3RDLE1BQU0sQ0FBQyxJQUFJLENBQUMsQ0FBQyxFQUFFLENBQUMsS0FBSyxDQUFDLE1BQU0sQ0FBQyxDQUFDO0lBQ2hDLENBQUMsQ0FBQyxDQUFBO0FBQ1IsQ0FBQyxDQUFBLENBQUMsQ0FBQztBQUVILGVBQUksQ0FBQyxrQ0FBa0MsRUFBRSxDQUFPLE1BQU0sRUFBRyxFQUFFO0lBQ3ZELE1BQU0sR0FBRyxDQUFDLGFBQWEsQ0FBQyxRQUFRLENBQUMsTUFBTSxDQUFDLENBQUM7QUFDN0MsQ0FBQyxDQUFBLENBQUMsQ0FBQztBQUVILGVBQUksQ0FBQyx5REFBeUQsRUFBRSxDQUFPLE1BQU0sRUFBRSxFQUFFO0lBQzdFLE1BQU0sR0FBRyxDQUFDLE1BQU0sQ0FBQyxLQUFLLEVBQUUsQ0FBQztJQUN6QixNQUFNLEdBQUcsQ0FBQyxlQUFlLENBQUMsT0FBTyxFQUFFLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxFQUFFO1FBQzVDLE1BQU0sQ0FBQyxJQUFJLENBQUMsQ0FBQyxFQUFFLENBQUMsS0FBSyxDQUFDLE1BQU0sQ0FBQyxDQUFDO0lBQ2hDLENBQUMsQ0FBQyxDQUFBO0FBQ1IsQ0FBQyxDQUFBLENBQUMsQ0FBQyJ9