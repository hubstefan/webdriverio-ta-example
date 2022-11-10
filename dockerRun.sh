#!/bin/sh

# Build the docker image
docker build -t wdiotest/volvocars .

# Start the container and run the tests
echo '\n*** Running tests ***'
docker run --network="host" --name="wdio-test-run-container" -t wdiotest/volvocars

# Remove the container
docker rm wdio-test-run-container
