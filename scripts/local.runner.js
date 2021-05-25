#!/usr/bin/env node

var Nightwatch = require('nightwatch');
var browserstack = require('browserstack-local');
var localConf = require('../conf/local.conf.js');

var bs_local;

try {

  process.mainModule.filename = "./node_modules/nightwatch/bin/nightwatch"
  // Code to start browserstack local before start of test
  console.log('Connecting local');
  Nightwatch.bs_local = bs_local = new browserstack.Local();

  var localOptions = {
    'key': localConf['test_settings']['default']['desiredCapabilities']['browserstack.key']
  };

  /**
   * If the network requires proxy configuration for outbound connections,
   * set those here.
   */
  var proxySettings = localConf['proxy'] || {};

  for (var key in proxySettings) {
    var value = proxySettings[key];

    switch (key) {
      case 'host':
        if (value) localOptions['proxyHost'] = value;
        break;

      case 'port':
        if (value) localOptions['proxyPort'] = value;
        break;

      case 'user':
        if (value) localOptions['proxyUser'] = value;
        break;

      case 'pass':
        if (value) localOptions['proxyPass'] = value;
        break;
    }
  }

  console.log('Local options: \n', localOptions);

  bs_local.start(localOptions, function(error) {
    if (error) throw error;

    console.log('Connected. Now testing...');
    Nightwatch.cli(function(argv) {
      Nightwatch.CliRunner(argv)
        .setup(null, function(){
          // Code to stop browserstack local after end of parallel test
          bs_local.stop(function(){});
        })
        .runTests(function(){
          // Code to stop browserstack local after end of single test
          bs_local.stop(function(){});
        });
    });
  });
} catch (ex) {
  console.log('There was an error while starting the test runner:\n\n');
  process.stderr.write(ex.stack + '\n');
  process.exit(2);
}
