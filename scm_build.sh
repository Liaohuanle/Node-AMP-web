#!/bin/bash
#!/bin/bash

DIR=`pwd`
OUTPUT="$DIR/output"
RESOURCE="$DIR/output_resource"

rm -rf $OUTPUT
rm -rf $RESOURCE

mkdir $OUTPUT
mkdir $RESOURCE

if [ -f '/etc/profile' ]
then
  source /etc/profile
fi

# 使用node8构建
nvm use stable
 
./build.sh

mv output output_resource
ls
cd ./output
node index.js