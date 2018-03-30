#!/bin/bash
cd src
npm install
mkdir output/node_modules
cp -a ./src/node_modules/* ./output/node_modules/
cp -r ./src/routes ./output
cp -r ./src/views ./output
cp -r ./src/public ./output
cp ./src/index.js ./output
cp ./src/package.json ./output