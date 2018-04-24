#!/bin/bash

cd src
cp -r .* ./output
npm install
node ./_compile.js
cd ../
rm -rf src
cp -r ./dist/* ./
