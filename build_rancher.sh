#!/bin/bash
test -d output || mkdir output
cd src
npm install
node ./_compile.js


cd ../output
npm install

cd ../
rm -rf src