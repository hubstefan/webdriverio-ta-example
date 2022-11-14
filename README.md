# webdriverio-ta-example
Webdriver.io test automation example

## Prerequisites

This testing framework has been developed in javascript using node version v18.12.0 and npm version 8.19.2.
Version of git has been 2.16.3 but any recent version should do.

A mac is used with docker desktop installed.

## Installation

In a directory of choice from a command prompt clone the repo:
```
git clone https://github.com/hubstefan/webdriverio-ta-example.git
```

Change directory to the newly cloned project:
```
cd webdriverio-ta-example
```

Install the npm packages:
```
npm install
```
### Install docker
Install docker desktop and docker-compose.

## Controlling the selenium grid environment
### Starting the environment
```
npm run env:start
```
### Stopping the environment
```
npm run env:stop
```

## Running the test

### Run on local computer

Run all tests in browser using the package.json script:
```
npm run e2e:headful:local
```

Run all tests in headless browser using the package.json script:
```
npm run e2e:headless:local
```
### Run dockerized test 

Execute the test:
```
npm run e2e:docker
```
### Clear old reports and screenshots 

```
npm run clear:reports
```

## Design decisions

### Choosing selenium grid environment
A first attempt to use minikube was done which is still present as a poc in a branch. Then due to time constraints reverted to using the simpler selenium grid solution.

### Choosing selectors
When possible - objects are found by role and then by using text content. As a last resort test data id's are used. This philosophy is inspired by https://kentcdodds.com/blog/making-your-ui-tests-resilient-to-change

### Page object pattern
The page object pattern is mainly used because it was suggested by the wdio biolerplate setup. It might, but might also not be neede in this particular case.

### Test files
I have chosen to divide the tests for the page itself into two files with the following separation of concerns:

**aMillionMore.pageTests.e2e.js**

This file contain tests that are of structural type for the page. Is the header there, does the page work technically?

**aMillionMoreLives.feature.e2e.js**

This file contain tests related to the feature, i.e. the intended impact on the user from a higher business perspective. E.g. are we listing the correct main security features? 
