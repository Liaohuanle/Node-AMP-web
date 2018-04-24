#!/bin/bash

cd src
cp -r .* ./output
npm install
node ./_compile.js
cp ./node_modules ../
cd ../
rm -rf src
echo " =====> ls2:"
ls