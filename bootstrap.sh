#!/usr/bin/env bash

# 切换node版本
source /etc/profile && nvm use node 8 && echo 'node version is ' && node -v

INSTANCE_NAME="user-node-h5"
CURRENT_DIR="$(cd -P "$(dirname "${BASH_SOURCE[0]}")" && pwd)"
ROUTE_IP=`ip route|grep "default via"|awk -F " " '{print $3}'`
cd $CURRENT_DIR

# 服务默认端口号
PORT=3000

# 如果Docker容器的网络模式为Host，则从环境变量获取可用端口号
# if [ "$IS_HOST_NETWORK" == "1" ]; then
#      PORT=$PORT0
# fi

# 启动服务
sudo -u tiger -H sh -c "cd $CURRENT_DIR"
NODE_ENV=production ROUTE_IP=$ROUTE_IP NAME=$INSTANCE_NAME PORT=$PORT \
pm2 start ./index.js -n $INSTANCE_NAME --no-daemon
