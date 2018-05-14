"use strict";
const data = require("./data");
const hindia = require("./hindia");
const config = require("../../_config");
const currentKey = 'india'
const moment = require('moment');


const callback = (req, res)=>{
  const dataList = {
    'india': hindia(moment()),
    'english': data(moment())
  }
  const { lang } = req.query
  const la = (lang||currentKey).toLocaleLowerCase()
  const renderData = {
    path: currentKey,
    data: dataList[la],
    cssSrc: `../${currentKey}/css`,
    containerSrc: `../../${currentKey}/index`,
    jsSrc: `../../${currentKey}/js`,
    title: `Musical.ly - ${currentKey}`,
  }
  res.render(config.layoutDir, renderData);
}

module.exports  = {
  path: currentKey,
  isOnline: true,
  callback
};
