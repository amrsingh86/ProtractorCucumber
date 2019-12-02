import { ElementFinder, browser, by, element, protractor } from "protractor";
import { async } from "q";


 export class justEatObj {            
    enterPostCode: ElementFinder; 
    search: ElementFinder;
    getResult: ElementFinder;
    noPostCode: ElementFinder;
    invalidPostCode: ElementFinder;

    constructor() {
      //Search with Postal Code
        this.enterPostCode = element(by.name("postcode"));
        this.search = element(by.buttonText("Search"));
        this.getResult = element(by.css("h1.c-dishSearch-locationHeader-title"));

      //Validate empty postal code error message
        this.noPostCode = element(by.id("errorMessage"));

      //Validate invalid postal code error message
        this.invalidPostCode = element(by.id("errorMessage"));
     }
}