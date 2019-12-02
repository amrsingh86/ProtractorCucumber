import { Given, When, Then } from "cucumber";
import { browser, element, by, protractor } from "protractor"; 
import { async } from "q";
import { justEatObj } from "../pageObject/justEatObj";
import chai from "chai";

var expect = chai.expect;
let eat = new justEatObj();

Given('User redirected to home page', async () => {
    await browser.navigate().back();
});

When('Enter empty postal code {string}', async (string)  => {   
    //can be further optimized using utils function and moved out from step definition to make it more readable and maintanable 
    var el = browser.findElement(by.name("postcode")); 
    const lengthOfWord = el.getAttribute('value').then(function (removeit) {
        for (let j = 0; j < removeit.length; j++) {
            el.sendKeys(protractor.Key.BACK_SPACE)
        }
    });
    await eat.enterPostCode.sendKeys(string);
});

Then('I should see error message for empty post code {string}', async (string) => {
    await eat.search.click();
    await eat.noPostCode.getText().then(text => {
        expect(text).to.equal(string);
      })
});