# webdriverio-ta-example
Webdriver.io test automation example

## Introduction
In this version one single test has been developed in order to build up and test the minikube framework. 

The state of the minikube poc is that minikube can be run and the pods are brought up to speed. However I cannot reach the selenium hub from the dockerized test. I get ECONNREFUSED towards localhost:4444.

Therefore this version will be kept for reference only and I will develop another way of running the dockerized test.

The test can be run on local computer.

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
Install docker desktop.

Install minikube. I did it with inspiration from https://www.swtestacademy.com/selenium-kubernetes-scalable-parallel-tests/. I used a mac with homebrew. 
Another good resource is https://minikube.sigs.k8s.io/docs/start/.


## Controlling the minikube environment
### Starting the minikube environment
Run the following two helper scripts from a shell standing in the webdriverio-ta-example/ directory:

```
./scripts/startMinikube.sh
./scripts/startDeploy.sh
```
### Stopping the minikube environment
When needed run the following to completely stop the environment
```
./scripts/stopDeploy.sh
./scripts/stopMinikube.sh
```

### Inspecting the status of minikube

Check the Kubernetes service created by startMinikube.sh
```
kubectl describe service
```

Check the Selenium Hub deploy created by startDeploy.sh
```
kubectl describe deploy
```

Check status of the pods that are spun up by the replicaiton controllers created via startDeploy.sh
```
kubectl get pods
```
**Important!** There should be 7 pods, one for the selenium hub, 3 for chrome and 3 firefox pods. If all went well they are in status Running and the number of restarts are 0 or at least not increasing in number with time.

Other useful dashboards, will lock the terminal window:
```
minikube dashboard
minikube service selenium-srv
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
### Run dockerized test towards minikube environment
NOTE! This does not work in this version due to access problem on my mac towards port 4444 but is kept here for future reference.
Another candidate for what might be the problem is the environment variable HUB_PORT that is set in the replication controllers repchrome.yml and repff.yml

Execute the test:
```
npm run e2e:docker
```
