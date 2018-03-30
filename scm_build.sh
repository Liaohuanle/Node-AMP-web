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

echo '#######'
ls
echo '####### start move *******'

mv ./src/* ../output/*

echo '####### end move *******'
ls
echo '#######'

cd ./output

npm install
