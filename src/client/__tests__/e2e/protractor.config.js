'use strict'

const { Config, browser } = require('protractor')
const { SpecReporter } = require('jasmine-spec-reporter')

exports.config = {
  allScriptsTimeout: 100000,
  framework: 'jasmine',
  directConnect: true,
  specs: ['tmp/*/*.js'],
  multiCapabilities: [{
    browserName: 'chrome',
    chromeOptions: {
      args: ['--start-maximized', '--disable-infobars', '--disable-notifications', '--no-sandbox']
    }
  }],
  jasmineNodeOpts: {
    isVerbose: true,
    realtimeFailure: true,
    showColors: true,
    includeStackTrace: true,
    defaultTimeoutInterval: 300000,
    print: () => {},
  },
  onPrepare: function() {
    setUpCustomLocators()
    jasmine.getEnv().addReporter(new SpecReporter({
      displayStacktrace: 'all',
      displaySuccessesSummary: false,
      displayFailuresSummary: true,
      displayPendingSummary: true,
      displaySuccessfulSpec: true,
      displayFailedSpec: true,
      displayPendingSpec: false,
      displaySpecDuration: false,
      displaySuiteNumber: false,
      colors: {
        success: 'green',
        failure: 'red',
        pending: 'yellow'
      },
      prefixes: {
        success: '✓ ',
        failure: '✗ ',
        pending: '* '
      },
      customProcessors: []
    }))
  },
  params: {
    baseUrl: 'http://localhost:3000/'
  }
}

function setUpCustomLocators() {
  by.addLocator('qaTag', (qaTag, parentElement) => {
      const parent = parentElement || document;
      return parent.querySelector(`[data-qa-id=${qaTag}]`);
  });
  by.addLocator('qaTagAll', (qaTag, parentElement) => {
    const parent = parentElement || document;
    return parent.querySelectorAll(`[data-qa-id=${qaTag}]`);
  });

  by.addLocator('qa', (qa, parentElement) => {
      const parent = parentElement || document;
      return parent.querySelector(`[data-qa=${qa}]`);
  });

  by.addLocator('qaAll', (qa, parentElement) => {
    const parent = parentElement || document;
    return parent.querySelectorAll(`[data-qa=${qa}]`);
  });
}
