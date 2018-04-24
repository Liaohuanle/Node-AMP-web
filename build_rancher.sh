#!/bin/bash

cd src
npm install
node ./_compile.js
cp -r ./node_modules ../
cd ../
rm -rf src
echo " =====> ls2:"
ls