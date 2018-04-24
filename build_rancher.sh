#!/bin/bash

# cd src
# npm install
# node ./_compile.js
# cd ../
# rm -rf src
# echo " =====> ls2:"
# ls

cd src
cp -r .* ./output
npm install

echo " =====> ls2:"
ls
