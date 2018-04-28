"use strict";
var data_1 = require("./data");
const config = require("../../../_config");
module.exports = {
    path: 'es',
    isOnline: true,
    callback: (req, res) => {
      const renderData = {
        path: 'es',
        data: data_1,
        cssSrc: '../europe/spain/css',
        containerSrc: '../../europe/spain/index',
        jsSrc: '../../europe/spain/js',
        title: 'Musical.ly - Spain',
      }
      res.render(config.layoutDir, renderData);
    }
};
