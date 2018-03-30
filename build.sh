#!/bin/bash
cd src
npm install
mkdir ./output/node_modules
cp -a ./src/node_modules/* ./output/node_modules/
cp -r ./src/* ./output