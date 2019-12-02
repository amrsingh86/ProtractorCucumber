import { Given, When, Then } from "cucumber";
import { browser, element, by, protractor } from "protractor"; 
import { async } from "q";
import { justEatObj } from "../pageObject/justEatObj";
import chai from "chai";

var expect = chai.expect;
let eat = new justEatObj();

Given('I am on home page {string}', async (string) => {
    await browser.getCurrentUrl().then(text => {
        expect(text).to.equal(string);
      })
});

When('Enter wrong postal code {string}', async (string)  => {   
    await eat.enterPostCode.sendKeys(string);
});

Then('I should see error message to enter valid code {string}', async (string) => {
    await eat.search.click();
    await eat.invalidPostCode.getText().then(text => {
        expect(text).to.equal(string);
      })
});