#!/bin/bash
cd ./
wget https://fastdl.mongodb.org/linux/mongodb-linux-x86_64-rhel62-3.2.7.tgz
tar -xvf mongodb-linux-x86_64-rhel62-3.2.7.tgz
mv mongodb-linux-x86_64-rhel62-3.2.7 mongodb
/etc/profile
export MONGODB_HOME=./mongodb
export PATH=$MONGODB_HOME/bin:$PATH
vim /etc/profile
source /etc/profile
mongod -v
mkdir -p ./data/mongodb
mkdir -p ./data/mongodb/log
touch ./data/mongodb/log/mongodb.log
vim /etc/mongodb.conf
dbpath=./data/mongodb
logpath=./data/mongodb/log/mongodb.log
logappend=true
port=27017
fork=true

cd ./mongodb/bin
./mongo

use IPDataBase
switched to db IPDataBase