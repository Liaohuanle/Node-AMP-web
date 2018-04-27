"use strict";
const logger = require('./util/logger')
const _toConsumableArray2 = require("babel-runtime/helpers/toConsumableArray");
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
const _toConsumableArray3 = _interopRequireDefault(_toConsumableArray2);

const route_1 = require("./views/us/route");
const route_2 = require("./views/india/route");
const route_3 = require('./views/europe/router');
const api = require('./views/europe/rule-api');
const mailRouter = require('./views/mail/route')
const markdown = require('./views/markdown/route')

const markDownAPI = require('./routers/index')

const config = require("./_config");
// const DB = require('./db/db-connect');
const geoip = require('geoip-lite');

const routerList =[ ...markDownAPI, route_1, route_2, ...route_3, ...api, markdown, mailRouter]

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
//       res.render(config.layoutDir, item);
//     }
//   })
//   .catch(err => {
//     res.render(err)
//   })
// };

function getLanguageCode(countryCode){
  return config.countryList[countryCode] || 'default'
}

const distuributePath = (item) => (req, res) => {
  const ip = req.host
  const country = geoip.lookup(ip)
  const lang = getLanguageCode(country)
  logger.info('get request from :', item.path, country)
  if(!item.authority || !item.authority(req)){
    return
  }
  if (item.isApi) {
    res.render(item.containerSrc);
  } else if (item.isRest) {
    item.callback &&
    item
    .callback(req)
    .then(r => res.send(r))
    .catch(err => res.send(err));
  } else {
    const dataSet = Object.assign({},item)
    dataSet.data = item.data(lang)
    res.render(config.layoutDir, dataSet);
  }
};
module.exports = function (app) {
  routerList
  .filter( item => item.isOnline)
  .forEach(item => app[item.method || 'get']("/act/" + item.path, distuributePath(item)));

  app.get('/*', function (req, res, next) {
    logger.warn('get request 404 :', req.url)
    res.status(404);
    res.render(config.notFoundDir, { url: req.url });
  });
};
//# sourceMappingURL=router.js.map