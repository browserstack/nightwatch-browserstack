#!/usr/bin/env node

const Nightwatch = require('nightwatch');
const os = require('os');
const browserstack = require('browserstack-local');
let bs_local;


const generateLocalIdentifier = () => {
  const formattedDate = new Intl.DateTimeFormat('en-GB', {
    month: 'short',
    day: 'numeric',
    hour: 'numeric',
    minute: 'numeric',
    hour12: false})
    .format(new Date())
    .replace(/ |, /g, '_')
    .replace(':', '');
  const hostname = os.hostname();
  const randomChars = Math.random().toString(36).slice(2, 6);
  return `${formattedDate}_${hostname}_${randomChars}`;
}

let localIdentifier = null;

exports.getLocalIdentifier = () => {
  if (!localIdentifier) {
    localIdentifier = generateLocalIdentifier();
  }
  return localIdentifier;
}

try {
  require.main.filename = './node_modules/.bin/nightwatch';
  // Code to start browserstack local before start of test
  console.log('Connecting local');
  Nightwatch.bs_local = bs_local = new browserstack.Local();
  bs_local.start({ key: process.env.BROWSERSTACK_ACCESS_KEY, localIdentifier: this.getLocalIdentifier() }, function (error) {
    if (error) throw error;

    console.log('Connected. Now testing...');
    Nightwatch.cli(function (argv) {
      Nightwatch.CliRunner(argv)
        .setup()
        .runTests()
        .catch((err) => {
          throw err;
        })
        .finally(() => {
          // Code to stop browserstack local after end of single test
          bs_local.stop(function () {});
        });
    });
  });
} catch (ex) {
  console.log('There was an error while starting the test runner:\n\n');
  process.stderr.write(ex.stack + '\n');
  process.exit(2);
}
