#!/bin/bash
test -d output || mkdir output
cd src
npm install
node ./_compile.js


cd ../output
npm install
cat ./views/europe/rule-api.js

cd ../
rm -rf src