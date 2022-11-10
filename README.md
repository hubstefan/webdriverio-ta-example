# webdriverio-ta-example
Webdriver.io test automation example

## Introduction



## Prerequisites

This testing framework has been developed in javascript using node version v18.12.0 and npm version 8.19.2.
Version of git has been 2.16.3 but any recent version should do.

A mac is used with docker installed.


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
### Install docker & minikube environment
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

## Design decisions

### Choosing selenium grid environment

### Choosing selectors

### Page object pattern

### Test files


