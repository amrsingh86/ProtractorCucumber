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
Object.defineProperty(exports, "__esModule", { value: true });
const protractor_1 = require("protractor");
exports.config = {
    directConnect: false,
    seleniumAddress: 'http://localhost:4444/wd/hub',
    framework: 'custom',
    frameworkPath: require.resolve('protractor-cucumber-framework'),
    capabilities: {
        'browserName': 'chrome'
    },
    // multiCapabilities: [
    //   {     'browserName': 'chrome',   },   
    //   {     'browserName': 'firefox'   }
    // ],
    specs: ['../featureFiles/justEat.feature'],
    // suites:{
    //   justEatPostCode: 'stepsJustEat.js',
    //   justEatNoPostCode: 'stepsJustEatNoPostCode.js'
    // },
    cucumberOpts: {
        // require step definitions 
        require: [
            './stepDefinitions/*.js' // accepts a glob 
        ]
    },
    onPrepare: () => __awaiter(void 0, void 0, void 0, function* () {
        yield protractor_1.browser.waitForAngularEnabled(false);
        protractor_1.browser.driver.manage().window().maximize();
    }),
};
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY29uZmlndXJhdGlvbi5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uL2NvbmZpZ3VyYXRpb24udHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7QUFBQSwyQ0FBMkM7QUFFaEMsUUFBQSxNQUFNLEdBQVc7SUFFMUIsYUFBYSxFQUFFLEtBQUs7SUFDcEIsZUFBZSxFQUFFLDhCQUE4QjtJQUMvQyxTQUFTLEVBQUUsUUFBUTtJQUNuQixhQUFhLEVBQUUsT0FBTyxDQUFDLE9BQU8sQ0FBQywrQkFBK0IsQ0FBQztJQUMvRCxZQUFZLEVBQUU7UUFDWixhQUFhLEVBQUUsUUFBUTtLQUN4QjtJQUVELHVCQUF1QjtJQUN2QiwyQ0FBMkM7SUFDM0MsdUNBQXVDO0lBQ3ZDLEtBQUs7SUFFTCxLQUFLLEVBQUUsQ0FBQyxpQ0FBaUMsQ0FBQztJQUUxQyxXQUFXO0lBQ1gsd0NBQXdDO0lBQ3hDLG1EQUFtRDtJQUNuRCxLQUFLO0lBRUwsWUFBWSxFQUFFO1FBQ1osNEJBQTRCO1FBQzVCLE9BQU8sRUFBRTtZQUNQLHdCQUF3QixDQUFNLGtCQUFrQjtTQUNqRDtLQUNGO0lBRUMsU0FBUyxFQUFFLEdBQVMsRUFBRTtRQUNwQixNQUFNLG9CQUFPLENBQUMscUJBQXFCLENBQUMsS0FBSyxDQUFDLENBQUM7UUFDM0Msb0JBQU8sQ0FBQyxNQUFNLENBQUMsTUFBTSxFQUFFLENBQUMsTUFBTSxFQUFFLENBQUMsUUFBUSxFQUFFLENBQUM7SUFDOUMsQ0FBQyxDQUFBO0NBSUosQ0FBQyJ9