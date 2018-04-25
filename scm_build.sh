#!/bin/bash

# 切换node版本
source /etc/profile && nvm use 8 &&  echo 'node version is' && node -v

# 删除node_modules软链接
rm -rf node_modules
cd src

# 安装依赖
echo '====> npm install'
npm install --registry=http://npm.byted.org
node ./_compile.js

cd ../output
npm install
cd ../
rm -rf src

# 创建输出目录
DIR=`pwd`
OUTPUT="$DIR/output"
APP_PATH=$OUTPUT
mkdir -p $APP_PATH

# 拷贝文件
ls | grep -v output | xargs -I {} cp -rL {} output
