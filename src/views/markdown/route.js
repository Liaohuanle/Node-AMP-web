
var geoip = require('geoip-lite')
module.exports = {
    title: 'Musical.ly - markdown',
    path: 'markdown/edit',
    isApi: false,
    isOnline: true,
    data: () => {},
    authority: req => {
      const ip = req.host
      const country = geoip.lookup(ip)
      if(country == 'CN' || 'localhost'){
        return true
      }
      return false
    },
    cssSrc: '../markdown/css',
    containerSrc: '../../markdown/index',
    jsSrc: '../../markdown/js'
};
