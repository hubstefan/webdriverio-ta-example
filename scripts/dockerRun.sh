#!/bin/sh

# Remove old reports
npm run clear:reports

# Build
docker build -t wdiotest/volvocars .

# Start container, run the tests
echo '\n*** Running tests ***'
docker run --network="host" --name="wdio-test-run-container" -t wdiotest/volvocars

# Copy reports
docker cp wdio-test-run-container:app/reports ./

# Remove container
docker rm wdio-test-run-container
