exports.config = {
  user: 'Your_BrowserStackUsername',
  key: 'Your_BrowserStackKey',

  updateJob: false,
  specs: [
    './tests/specs/single_test.js'
  ],
  exclude: [],

  capabilities: [{
    'browser': 'safari',
     'device': 'iPhone 8',
     'realMobile': 'true',
     'os_version': '11.2',
      build: 'EBay Login build'
  }],

  logLevel: 'verbose',
  coloredLogs: true,
  screenshotPath: './errorShots/',
  baseUrl: '',
  waitforTimeout: 10000,
  connectionRetryTimeout: 90000,
  connectionRetryCount: 3,
  host: 'hub.browserstack.com',
  
  framework: 'mocha',
  mochaOpts: {
      ui: 'bdd'
  }
}
