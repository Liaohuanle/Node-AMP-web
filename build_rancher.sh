#!/bin/bash

cd src
cp -r .* ./output
npm install
node ./_compile.js
cd ../
echo " =====> ls1:"
ls
rm -rf src
cp -r ./dist/* ./
echo " =====> ls2:"
ls
