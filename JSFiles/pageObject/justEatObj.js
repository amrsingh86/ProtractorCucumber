"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const protractor_1 = require("protractor");
class justEatObj {
    constructor() {
        //Search with Postal Code
        this.enterPostCode = protractor_1.element(protractor_1.by.name("postcode"));
        this.search = protractor_1.element(protractor_1.by.buttonText("Search"));
        this.getResult = protractor_1.element(protractor_1.by.css("h1.c-dishSearch-locationHeader-title"));
        //Validate empty postal code error message
        this.noPostCode = protractor_1.element(protractor_1.by.id("errorMessage"));
        //Validate invalid postal code error message
        this.invalidPostCode = protractor_1.element(protractor_1.by.id("errorMessage"));
    }
}
exports.justEatObj = justEatObj;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoianVzdEVhdE9iai5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uL3BhZ2VPYmplY3QvanVzdEVhdE9iai50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQUFBLDJDQUE2RTtBQUk1RSxNQUFhLFVBQVU7SUFPcEI7UUFDRSx5QkFBeUI7UUFDdkIsSUFBSSxDQUFDLGFBQWEsR0FBRyxvQkFBTyxDQUFDLGVBQUUsQ0FBQyxJQUFJLENBQUMsVUFBVSxDQUFDLENBQUMsQ0FBQztRQUNsRCxJQUFJLENBQUMsTUFBTSxHQUFHLG9CQUFPLENBQUMsZUFBRSxDQUFDLFVBQVUsQ0FBQyxRQUFRLENBQUMsQ0FBQyxDQUFDO1FBQy9DLElBQUksQ0FBQyxTQUFTLEdBQUcsb0JBQU8sQ0FBQyxlQUFFLENBQUMsR0FBRyxDQUFDLHNDQUFzQyxDQUFDLENBQUMsQ0FBQztRQUUzRSwwQ0FBMEM7UUFDeEMsSUFBSSxDQUFDLFVBQVUsR0FBRyxvQkFBTyxDQUFDLGVBQUUsQ0FBQyxFQUFFLENBQUMsY0FBYyxDQUFDLENBQUMsQ0FBQztRQUVuRCw0Q0FBNEM7UUFDMUMsSUFBSSxDQUFDLGVBQWUsR0FBRyxvQkFBTyxDQUFDLGVBQUUsQ0FBQyxFQUFFLENBQUMsY0FBYyxDQUFDLENBQUMsQ0FBQztJQUN6RCxDQUFDO0NBQ0w7QUFuQkEsZ0NBbUJBIn0=