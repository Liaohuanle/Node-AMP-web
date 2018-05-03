"use strict";
const english = require("./default");
const italy = require("./itali");
const french = require("./french");
const poland = require("./poland");
const config = require("../../../_config");
const geoip = require('geoip-lite');


const dataList = {
  english,
  italy,
  french,
  poland
}

function getLanguageCode(countryCode){
  return config.countryList[countryCode] || 'english'
}

const callback = (req, res)=>{
  const { lang } = req.query
  const ip = req.host
  const countryIp = geoip.lookup(ip)
  const country = getLanguageCode(countryIp)
  const currentKey = (lang || country || 'english').toLocaleLowerCase()
  const data = dataList[currentKey]
  const renderData = {
    path: 'eu',
    data,
    cssSrc: '../europe/england/css',
    containerSrc: '../../europe/england/index',
    jsSrc: '../../europe/england/js',
    title: `Musical.ly - ${currentKey}`,
  }
  res.render(config.layoutDir, renderData);
}

module.exports  = {
  path: 'eu',
  isOnline: true,
  callback
};
