# nightwatch-browserstack

[Nightwatch](http://nightwatchjs.org/) Integration with BrowserStack.

![BrowserStack Logo](https://d98b8t1nnulk5.cloudfront.net/production/images/layout/logo-header.png?1469004780)

<img src ="http://nightwatchjs.org/img/logo-nightwatch.png" height = "110">

## Setup

- Clone the repo
- Install dependencies `npm install`
- You can export the environment variables for the Username and Access Key of your BrowserStack account

  ```
  export BROWSERSTACK_USERNAME=<browserstack-username> &&
  export BROWSERSTACK_ACCESS_KEY=<browserstack-access-key>
  ```

## Running your tests

- To run a single test, run `npm run single`
- To run local tests, run `npm run local`
- To run parallel tests, run `npm run parallel`

Understand how many parallel sessions you need by using our [Parallel Test Calculator](https://www.browserstack.com/automate/parallel-calculator?ref=github)

## Notes

- You can view your test results on the [BrowserStack automate dashboard](https://automate.browserstack.com)
- To test on a different set of browsers, check out our [capabilities generator](https://www.browserstack.com/automate/capabilities)


## Connecting to BrowserStack via a proxy server

You can specify proxy settings in Nightwatch by adding the `proxy` key in your `*.conf.js`

```javascript
  test_settings: {
    default: {
      desiredCapabilities: {
        // Your capabilities
      },
      proxy: {
        "host": "",     // "127.0.0.1"
        "port": "",     // "8081"
        "protocol": ""  // "http"
      }
    }
  }
```

## Additional Resources

- [Documentation for writing automate test scripts in Node](https://www.browserstack.com/docs/automate/selenium/getting-started/nodejs)
- [Customizing your tests on BrowserStack](https://www.browserstack.com/automate/capabilities)
- [Browsers & mobile devices for selenium testing on BrowserStack](https://www.browserstack.com/list-of-browsers-and-platforms?product=automate)
- [Using REST API to access information about your tests via the command-line interface](https://www.browserstack.com/docs/automate/api-reference/selenium/introduction)
- [Example to update the Browserstack session status based on the test results](https://github.com/blueimp/nightwatch-browserstack)
