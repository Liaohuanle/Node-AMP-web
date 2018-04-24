#!/bin/bash

# 切换node版本
source /etc/profile && nvm use 8 &&  echo 'node version is' && node -v

# 删除node_modules软链接
rm -rf node_modules

cd ./src

# 安装依赖
npm install --registry=http://npm.byted.org

node ./_compile.js

cd ../

#将代码移出
cp -r ./dist/* ./

rm -rf dist

rm -rf src

# 创建输出目录
DIR=`pwd`
OUTPUT="$DIR/output"
APP_PATH=$OUTPUT
mkdir -p $APP_PATH

# 拷贝文件
ls | grep -v output | xargs -I {} cp -rL {} output
