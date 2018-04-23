#!/bin/bash

DIR=`pwd`
DIST="$DIR/dist"
SOURCE="$DIR/src"

rm -rf "$SOURCE/node_modules"
mv -r "$SOURCE/*" "$DIST/*"

npx babel */*.js -o {name}.js