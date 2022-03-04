const bstackOptions = {
  'bstack:options' : {
      "os" : "OS X",
      "osVersion" : "Sierra",
      "buildName" : "Final-Snippet-Test",
      "sessionName" : "Selenium-4 Nodejs snippet test",
      "local" : "false",
      "seleniumVersion" : "4.0.0",
      userName: '${BROWSERSTACK_USER}',
      accessKey: '${BROWSERSTACK_KEY}',
  },
}

const browserStack = {
  webdriver: {
      start_process: false
    },

    selenium: {
      host: 'hub-cloud.browserstack.com',
      port: 443
    },

    desiredCapabilities: {
       browserName: 'chrome',
      ...bstackOptions
    }
}

module.exports = {
  src_folders: [],

  test_settings: {
    default: {
      launch_url: 'https://nightwatchjs.org'
    },

    browserstack:  {
        ...browserStack
    },

    "browserstack.chrome": {
      ...browserStack,
      desiredCapabilities:{
          browserName: 'chrome',
          ...bstackOptions
      }
    },
    "browserstack.firefox": {
      ...browserStack,
      desiredCapabilities:{
          browserName: 'firefox',
          ...bstackOptions
      }
    },
    "browserstack.edge": {
      ...browserStack,
      desiredCapabilities:{
          browserName: 'Edge',
          ...bstackOptions
      }
    },
    // capabilities to run local test on BrowserStack
    'browserstack.local': {
      ...browserStack,
      desiredCapabilities: {
       browserName: 'chrome',
          'bstack:options' : {
              "os" : "OS X",
              "osVersion" : "Sierra",
              "buildName" : "Final-Snippet-Test",
              "sessionName" : "Selenium-4 Nodejs snippet test",
              "local" : "true",
              "seleniumVersion" : "4.0.0",
              userName: '${BROWSERSTACK_USER}',
              accessKey: '${BROWSERSTACK_KEY}',
          },
    }
  }
  }
}