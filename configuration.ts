import {Config, browser} from 'protractor';

export let config: Config = {
  
  directConnect: false,
  seleniumAddress: 'http://localhost:4444/wd/hub',
  framework: 'custom',
  frameworkPath: require.resolve('protractor-cucumber-framework'), // path relative to the current config file 
  capabilities: {
    'browserName': 'chrome'
  },

  // multiCapabilities: [
  //   {     'browserName': 'chrome',   },   
  //   {     'browserName': 'firefox'   }
  // ],

  specs: ['../featureFiles/justEat.feature'],   //Path for FEATURE file 
  
  // suites:{
  //   justEatPostCode: 'stepsJustEat.js',
  //   justEatNoPostCode: 'stepsJustEatNoPostCode.js'
  // },

  cucumberOpts: { 
    // require step definitions 
    require: [
      './stepDefinitions/*.js'      // accepts a glob 
    ] 
  },

    onPrepare: async () => {
      await browser.waitForAngularEnabled(false);    // Non Angular website
      browser.driver.manage().window().maximize();
    },
  // // You could set no globals to true to avoid jQuery '$' and protractor '$'
  // // collisions on the global namespace.
  // noGlobals: true
};