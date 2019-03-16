var browserstack = require('browserstack-local');

nightwatch_config = {
  src_folders : [ "tests/local" ],

  webdriver: {
    "start_process" : false,
    "host" : "hub-cloud.browserstack.com",
    "port" : 80
  },

  common_capabilities: {
    'build': 'nightwatch-browserstack',
    'browserstack.user': process.env.BROWSERSTACK_USERNAME || 'BROWSERSTACK_USERNAME',
    'browserstack.key': process.env.BROWSERSTACK_ACCESS_KEY || 'BROWSERSTACK_ACCESS_KEY',
    'browserstack.debug': true,
    'browserstack.local': true
  },

  test_settings: {
    default: {},
    chrome: {
      desiredCapabilities: {
        browser: "chrome"
      }
    },
    // disabling firefox because of
    // https://github.com/nightwatchjs/nightwatch/issues/2046
    // firefox: {
    //   desiredCapabilities: {
    //     browser: "firefox"
    //   }
    // },
    safari: {
      desiredCapabilities: {
        browser: "safari"
      }
    }
  }
};

// Code to support common capabilites
for(var i in nightwatch_config.test_settings){
  var config = nightwatch_config.test_settings[i];
  config['selenium_host'] = nightwatch_config.webdriver.host;
  config['selenium_port'] = nightwatch_config.webdriver.port;
  config['desiredCapabilities'] = config['desiredCapabilities'] || {};
  for(var j in nightwatch_config.common_capabilities){
    config['desiredCapabilities'][j] = config['desiredCapabilities'][j] || nightwatch_config.common_capabilities[j];
  }
}

module.exports = nightwatch_config;
