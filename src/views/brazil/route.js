"use strict";
var data_1 = require("./data");
const config = require("../../_config");
const name = 'brazil'
module.exports = {
    path: name,
    isOnline: true,
    callback: (req, res) => {
      const renderData = {
        path: name,
        data: data_1,
        cssSrc: `../${name}/css`,
        containerSrc: `../../${name}/index`,
        jsSrc: `../../${name}/js`,
        title: `Musical.ly - ${name}`,
      }
      res.render(config.layoutDir, renderData);
    }
};
