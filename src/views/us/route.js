"use strict";

const config = require("../../_config");

const data_1 = require("./data");

const renderData = {
  path: 'us',
  data: data_1.default,
  cssSrc: '../us/css',
  containerSrc: '../../us/index',
  jsSrc: '../../us/js',
  title: 'Musical.ly - Unitd State',
}

const callback = (req, res)=>{
  res.render(config.layoutDir, renderData);
}

module.exports = {
    path: 'us',
    isOnline: true,
    callback,
};
