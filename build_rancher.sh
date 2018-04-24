#!/bin/bash

cd src
cp -r .* ./output
npm install
node ./_compile.js
ls
cd ../
echo " =====> ls:"
rm -rf src
cp -r ./dist/* ./
echo " =====> ls:"
