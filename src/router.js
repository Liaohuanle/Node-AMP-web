"use strict";
const route_1 = require("./views/us/route");
const route_2 = require("./views/india/route");
const route_3 = require('./views/europe/router')
const api = require('./views/europe/rule-api')
const _config_1 = require("./_config");
const util = require('./util/util')
// const setTable = require('./db/db-connect');
// const geoip = require('geoip-lite')
const etag = require('etag')

const routerList = [...api, route_1.default, ...route_2.default, ...route_3];

// const set = (DATA) => new Promise((resolve, reject) => {
//   const tIP = setTable('isInfo')
//   try {
//     resolve(tIP(DATA))
//   } catch (error) {
//     reject(error)
//   }
// })

// const distuributePath = (item) => (req, res) => {
//   const ip = '93.123.23.2';
//   set(geoip.lookup(ip))
//   .then(() => {
//     res.setHeader('ETag', etag(body))
//     if (item.isApi) {
//       res.render(item.containerSrc);
//     }else {
//       res.render(_config_1.layoutDir, item);
//     }
//   })
//   .catch(err => {
//     res.render(err)
//   })
// };

const distuributePath = (item) => (req, res) => {
  res.setHeader('ETag', etag(''))
  if (item.isApi) {
    res.render(item.containerSrc);
  }else if(item.isRest){
    const { source, length } = req.query
    res.send(util.solveWinnerData(source, length))
  }else {
    res.render(_config_1.layoutDir, item);
  }
};

module.exports = (app) => {
    routerList
      .filter((item) => item.isOnline)
      .map((item) => app.get(`/act/${item.path}`, distuributePath(item)));

    app.get('/*', (req, res, next) => {
      res.status(404);
      res.render(_config_1.notFoundDir, { url: req.url });
    });
};
