#!/bin/sh

# Build
docker build -t wdiotest/volvocars .

# Start container, run the tests
echo '\n*** Running tests ***'
docker run --network="host" --name="wdio-test-run-container" -t wdiotest/volvocars

# Remove container
docker rm wdio-test-run-container
