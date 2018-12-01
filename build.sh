#!/bin/bash

# Clean up build directory
rm -Rf  ./build/*
mkdir -p ./build
mkdir -p ./build/client

# Build client
ng build --prod
cp -r ./dist/* ./build/client/

# Build server
cp -r ./server-src/* ./build/

