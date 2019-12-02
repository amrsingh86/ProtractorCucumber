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
cucumber_1.Given('User redirected to home page', () => __awaiter(void 0, void 0, void 0, function* () {
    yield protractor_1.browser.navigate().back();
}));
cucumber_1.When('Enter empty postal code {string}', (string) => __awaiter(void 0, void 0, void 0, function* () {
    //can be further optimized using utils function and moved out from step definition to make it more readable and maintanable 
    var el = protractor_1.browser.findElement(protractor_1.by.name("postcode"));
    const lengthOfWord = el.getAttribute('value').then(function (removeit) {
        for (let j = 0; j < removeit.length; j++) {
            el.sendKeys(protractor_1.protractor.Key.BACK_SPACE);
        }
    });
    yield eat.enterPostCode.sendKeys(string);
}));
cucumber_1.Then('I should see error message for empty post code {string}', (string) => __awaiter(void 0, void 0, void 0, function* () {
    yield eat.search.click();
    yield eat.noPostCode.getText().then(text => {
        expect(text).to.equal(string);
    });
}));
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3RlcHNKdXN0RWF0Tm9Qb3N0Q29kZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uL3N0ZXBEZWZpbml0aW9ucy9zdGVwc0p1c3RFYXROb1Bvc3RDb2RlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7O0FBQUEsdUNBQTZDO0FBQzdDLDJDQUE4RDtBQUU5RCx5REFBc0Q7QUFDdEQsZ0RBQXdCO0FBRXhCLElBQUksTUFBTSxHQUFHLGNBQUksQ0FBQyxNQUFNLENBQUM7QUFDekIsSUFBSSxHQUFHLEdBQUcsSUFBSSx1QkFBVSxFQUFFLENBQUM7QUFFM0IsZ0JBQUssQ0FBQyw4QkFBOEIsRUFBRSxHQUFTLEVBQUU7SUFDN0MsTUFBTSxvQkFBTyxDQUFDLFFBQVEsRUFBRSxDQUFDLElBQUksRUFBRSxDQUFDO0FBQ3BDLENBQUMsQ0FBQSxDQUFDLENBQUM7QUFFSCxlQUFJLENBQUMsa0NBQWtDLEVBQUUsQ0FBTyxNQUFNLEVBQUcsRUFBRTtJQUN2RCw0SEFBNEg7SUFDNUgsSUFBSSxFQUFFLEdBQUcsb0JBQU8sQ0FBQyxXQUFXLENBQUMsZUFBRSxDQUFDLElBQUksQ0FBQyxVQUFVLENBQUMsQ0FBQyxDQUFDO0lBQ2xELE1BQU0sWUFBWSxHQUFHLEVBQUUsQ0FBQyxZQUFZLENBQUMsT0FBTyxDQUFDLENBQUMsSUFBSSxDQUFDLFVBQVUsUUFBUTtRQUNqRSxLQUFLLElBQUksQ0FBQyxHQUFHLENBQUMsRUFBRSxDQUFDLEdBQUcsUUFBUSxDQUFDLE1BQU0sRUFBRSxDQUFDLEVBQUUsRUFBRTtZQUN0QyxFQUFFLENBQUMsUUFBUSxDQUFDLHVCQUFVLENBQUMsR0FBRyxDQUFDLFVBQVUsQ0FBQyxDQUFBO1NBQ3pDO0lBQ0wsQ0FBQyxDQUFDLENBQUM7SUFDSCxNQUFNLEdBQUcsQ0FBQyxhQUFhLENBQUMsUUFBUSxDQUFDLE1BQU0sQ0FBQyxDQUFDO0FBQzdDLENBQUMsQ0FBQSxDQUFDLENBQUM7QUFFSCxlQUFJLENBQUMseURBQXlELEVBQUUsQ0FBTyxNQUFNLEVBQUUsRUFBRTtJQUM3RSxNQUFNLEdBQUcsQ0FBQyxNQUFNLENBQUMsS0FBSyxFQUFFLENBQUM7SUFDekIsTUFBTSxHQUFHLENBQUMsVUFBVSxDQUFDLE9BQU8sRUFBRSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsRUFBRTtRQUN2QyxNQUFNLENBQUMsSUFBSSxDQUFDLENBQUMsRUFBRSxDQUFDLEtBQUssQ0FBQyxNQUFNLENBQUMsQ0FBQztJQUNoQyxDQUFDLENBQUMsQ0FBQTtBQUNSLENBQUMsQ0FBQSxDQUFDLENBQUMifQ==