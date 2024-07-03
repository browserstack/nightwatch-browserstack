module.exports = {
  test_settings: {
    default: {},
    env1: {
      desiredCapabilities: {
        "browserName": "Chrome",
        "bstack:options" : {
          "browserVersion": "103.0",
          "os": "Windows",
          "osVersion": "11",
          "debug": true
        }
      }
    },
    env2: {
      desiredCapabilities: {
        "browserName": "Firefox",
        "bstack:options" : {
          "browserVersion": "102.0",
          "os": "Windows",
          "osVersion": "10",
          "debug": true
        }
      }
    },
    env3: {
      desiredCapabilities: {
        "browserName": "Safari",
        "bstack:options" : {
          "browserVersion": "14.1",
          "os": "OS X",
          "osVersion": "Big Sur",
          "debug": true
        }
      }
    }
  }
};
