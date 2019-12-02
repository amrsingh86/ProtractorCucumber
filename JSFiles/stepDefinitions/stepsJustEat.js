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
cucumber_1.Given('I want food in {string}', (string) => __awaiter(void 0, void 0, void 0, function* () {
    yield protractor_1.browser.get("https://www.just-eat.co.uk/");
    yield eat.enterPostCode.sendKeys(string);
}));
cucumber_1.When('I search for restaurants', () => __awaiter(void 0, void 0, void 0, function* () {
    yield eat.search.click();
}));
cucumber_1.Then('I should see information restautrants in {string}', (string) => __awaiter(void 0, void 0, void 0, function* () {
    yield eat.getResult.getText().then(text => {
        expect(text).to.equal(string);
    });
}));
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3RlcHNKdXN0RWF0LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vc3RlcERlZmluaXRpb25zL3N0ZXBzSnVzdEVhdC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7OztBQUFBLHVDQUE2QztBQUM3QywyQ0FBMEQ7QUFFMUQseURBQXNEO0FBQ3RELGdEQUF3QjtBQUV4QixJQUFJLE1BQU0sR0FBRyxjQUFJLENBQUMsTUFBTSxDQUFDO0FBQ3pCLElBQUksR0FBRyxHQUFHLElBQUksdUJBQVUsRUFBRSxDQUFDO0FBRTNCLGdCQUFLLENBQUMseUJBQXlCLEVBQUUsQ0FBTyxNQUFNLEVBQUUsRUFBRTtJQUM5QyxNQUFNLG9CQUFPLENBQUMsR0FBRyxDQUFDLDZCQUE2QixDQUFDLENBQUM7SUFDakQsTUFBTSxHQUFHLENBQUMsYUFBYSxDQUFDLFFBQVEsQ0FBQyxNQUFNLENBQUMsQ0FBQztBQUM3QyxDQUFDLENBQUEsQ0FBQyxDQUFDO0FBRUQsZUFBSSxDQUFDLDBCQUEwQixFQUFFLEdBQVEsRUFBRTtJQUN6QyxNQUFNLEdBQUcsQ0FBQyxNQUFNLENBQUMsS0FBSyxFQUFFLENBQUM7QUFDN0IsQ0FBQyxDQUFBLENBQUMsQ0FBQztBQUVELGVBQUksQ0FBQyxtREFBbUQsRUFBRSxDQUFPLE1BQU0sRUFBRSxFQUFFO0lBQ3pFLE1BQU0sR0FBRyxDQUFDLFNBQVMsQ0FBQyxPQUFPLEVBQUUsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLEVBQUU7UUFDeEMsTUFBTSxDQUFDLElBQUksQ0FBQyxDQUFDLEVBQUUsQ0FBQyxLQUFLLENBQUMsTUFBTSxDQUFDLENBQUM7SUFDaEMsQ0FBQyxDQUFDLENBQUE7QUFDTixDQUFDLENBQUEsQ0FBQyxDQUFDIn0=