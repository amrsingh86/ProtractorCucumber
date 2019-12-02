import { Given, When, Then } from "cucumber";
import { browser, element, protractor } from "protractor"; 
import { async } from "q";
import { justEatObj } from "../pageObject/justEatObj";
import chai from "chai";

var expect = chai.expect;
let eat = new justEatObj();

Given('I want food in {string}', async (string) => {
    await browser.get("https://www.just-eat.co.uk/");
    await eat.enterPostCode.sendKeys(string); 
});

  When('I search for restaurants', async() => {
    await eat.search.click();
});

  Then('I should see information restautrants in {string}', async (string) => {
    await eat.getResult.getText().then(text => {
      expect(text).to.equal(string);
    })
});