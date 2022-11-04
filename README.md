# webdriverio-ta-example
Webdriver.io test automation example


## Prerequisites

This testing framework has been developed in javascript using node version v18.12.0 and npm version 8.19.2.
Version of git has been 2.16.3 but any recent version should do.

## Installation

In a directory of choice from a command prompt clone the repo:

>`git clone https://github.com/hubstefan/webdriverio-ta-example.git`

Change directory to the newly cloned project:
>`cd webdriverio-ta-example`

Install the npm packages:
>`npm install`

## Run on local computer

Run all tests using the package.json script:
>`npm run e2e:local`

Run all tests in local browser using wdio command directly:
>`npx wdio run ./wdio.conf.js`

Run a specific test, the only one presently existing:
>`npx wdio run ./wdio.conf.js --spec ./test/specs/cookieConsent.e2e.js`
