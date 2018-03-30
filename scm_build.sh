#!/bin/bash
#!/bin/bash

DIR=`pwd`
OUTPUT="$DIR/output"
RESOURCE="$DIR/output_resource"

rm -rf $OUTPUT
rm -rf $RESOURCE

mkdir ./output
mkdir ./output_resource

if [ -f '/etc/profile' ]
then
  source /etc/profile
fi

# 使用node8构建
nvm use stable
 
cd src

cp -r ./* ./output
npm install

cd ../output

mv output output_resource
node index.js