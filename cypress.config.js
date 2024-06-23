const { defineConfig } = require("cypress");
module.exports = defineConfig({

  env:{
    application_URL: 'https://docs.google.com/forms/d/e/1FAIpQLScPfEbpaoUu3WVwSDM9wIFX5uo1XQ1xpuHNtP7cF_rkR-o8Zg/viewform'
  },
   
  //set the default viewport dimensions
  //viewportHeight: 760,
  //viewportWidth: 1100,

  //set the number of retries for failed tests
  retries:1, 

  video: true,
  videoCompression: true,

  // Configure the Mochawesome reporter for generating test reports
  reporter: 'cypress-mochawesome-reporter',
  reporterOptions: {
    reportDir: 'cypress/reports',
    charts: true,
    reportPageTitle: 'Health Survey UI Tests',
    embeddedScreenshots: true,
    inlineAssets: true,    
    overwrite: true,
    autoOpen: false,
    code: true,
    timestamp: 'longDate',
    showPassed: true,
    saveAllAttempts: false,
  },

  e2e: {
    setupNodeEvents(on, _config) {
      // implement node event listeners here
      require('cypress-mochawesome-reporter/plugin')(on);
    },
    
  },
});
