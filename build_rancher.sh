#!/bin/bash

cd src
cp -r .* ./output
npm install
node ./_compile.js
cd ../
echo " =====> ls1:"
ls
rm -rf src
echo " =====> ls2:"
ls
