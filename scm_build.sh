#!/bin/bash
#!/bin/bash

DIR=`pwd`
OUTPUT="$DIR/output"
RESOURCE="$DIR/output_resource"

rm -rf $OUTPUT
rm -rf $RESOURCE

mkdir OUTPUT
mkdir RESOURCE

if [ -f '/etc/profile' ]
then
    source /etc/profile
fi

if [ -d './node_modules' ]
then
    echo "node_modules exist"
else
    mkdir node_modules
fi

# 使用node8构建
nvm use stable
 
./build.sh
./play.sh


mv output output_resource