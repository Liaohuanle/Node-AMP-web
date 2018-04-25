"use strict";
const logger = require('./util/logger')
var _toConsumableArray2 = require("babel-runtime/helpers/toConsumableArray");

var _toConsumableArray3 = _interopRequireDefault(_toConsumableArray2);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var route_1 = require("./views/us/route");
var route_2 = require("./views/india/route");
var route_3 = require('./views/europe/router');
var api = require('./views/europe/rule-api');
var _config_1 = require("./_config");
var DB = require('./db/db-connect');
var geoip = require('geoip-lite');

var routerList = [].concat((0, _toConsumableArray3.default)(api), [route_1.default], (0, _toConsumableArray3.default)(route_2.default), (0, _toConsumableArray3.default)(route_3));

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

var distuributePath = function distuributePath(item) {
  return function (req, res) {
    if (item.isApi) {
      logger.info('get api request from :', item.path)
      res.render(item.containerSrc);
    } else if (item.isRest) {
      item.callback && item.callback(req.query).then(function (r) {
        logger.info('get rest api request from :', item.path)
        return res.send(r);
      });
    } else {
      logger.info('get render request from :', item.path)
      res.render(_config_1.layoutDir, item);
    }
  };
};

module.exports = function (app) {
  routerList.filter(function (item) {
    return item.isOnline;
  }).map(function (item) {
    return app.get("/act/" + item.path, distuributePath(item));
  });

  app.get('/*', function (req, res, next) {
    logger.warn('get request 404 :', req.url)
    res.status(404);
    res.render(_config_1.notFoundDir, { url: req.url });
  });
};
//# sourceMappingURL=router.js.map