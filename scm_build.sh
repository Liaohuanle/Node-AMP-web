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

echo '####### start move 1 *******'
ls
echo '#######'

cp -r ./src/* ./output/*

echo '####### start move 2 *******'
ls
echo '#######'

rm -rf ./src

cd ./output

echo '####### start move 3 *******'
ls
echo '#######'

npm install
