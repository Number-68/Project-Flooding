#!/bin/bash

# Start ESBuild watcher
bin/rails javascript:build --watch &

# Start Rails server
bin/rails server
