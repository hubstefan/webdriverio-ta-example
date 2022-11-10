#!/bin/sh

# Build the docker image
docker build -t wdiotest/volvocars .

# Start the container and run the tests
echo '\n\x1b[32m\x1b[1m\x1b[4mRunning fuctional tests\x1b[0m'
docker run --network="host" --name="wdio-test-run-container" -t wdiotest/volvocars

# Remove the container
docker rm wdio-test-run-container
