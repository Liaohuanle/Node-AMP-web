
var geoip = require('geoip-lite')
const config = require("../../_config");

module.exports = {
  path: 'markdown/edit',
  isOnline: true,
  callback: (req, res) => {
    const ip = req.host
    const country = geoip.lookup(ip)
    if(country == 'CN' || country == 'localhost'){
      return res.send(false)
    }
    const data = {
      path: 'markdown/edit',
      data: {},
      title: 'Musical.ly - markdown',
      cssSrc: '../markdown/css',
      containerSrc: '../../markdown/index',
      jsSrc: '../../markdown/js'
    }
    res.render(config.layoutDir, data);
  }
};
