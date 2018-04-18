"use strict";
const route_1 = require("./views/us/route");
const route_2 = require("./views/india/route");
const route_3 = require('./views/europe/router')
const api = require('./views/europe/rule-api')
const _config_1 = require("./_config");
const DB = require('./db/db-connect');
const geoip = require('geoip-lite')

const routerList = [...api, route_1.default, ...route_2.default, ...route_3];

// const set = (DATA) => new Promise((resolve, reject) => {
//   try {
//     resolve(DB.setTable(DATA))
//   } catch (error) {
//     reject(error)
//   }
// })

// const distuributePath = (item) => (req, res) => {
//   const ip = req.host
//   set(geoip.lookup(ip))
//   .then(() => {
//     if (item.isApi) {
//       res.render(item.containerSrc);
//     }else if(item.isRest){
//       item.callback &&
//       item
//       .callback(req.query)
//       .then(r => res.send(r))
//     }else {
//       res.render(_config_1.layoutDir, item);
//     }
//   })
//   .catch(err => {
//     res.render(err)
//   })
// };

const distuributePath = (item) => (req, res) => {
  if (item.isApi) {
    res.render(item.containerSrc);
  }else if(item.isRest){
    item.callback &&
    item
    .callback(req.query)
    .then(r => res.send(r))
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
