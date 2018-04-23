"use strict";

var _promise = require('babel-runtime/core-js/promise');

var _promise2 = _interopRequireDefault(_promise);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var util = require('../../util/util');
var DB = require('../../db/db-connect');

module.exports = [{
  path: 'prize/rules',
  isOnline: true,
  isApi: true,
  data: {},
  cssSrc: '',
  containerSrc: './europe/component/rule/index',
  jsSrc: '',
  title: ''
}, {
  path: 'fetchWinnerList',
  isOnline: true,
  isApi: false,
  isRest: true,
  data: './util/util',
  cssSrc: '',
  containerSrc: '',
  jsSrc: '',
  title: '',
  callback: function callback(query) {
    var source = query.source,
        length = query.length;

    return new _promise2.default(function (resolve, reject) {
      resolve(util.solveWinnerData(source, length));
    });
  }
}, {
  path: 'fetchIpAddressList',
  isOnline: true,
  isApi: false,
  isRest: true,
  data: [],
  cssSrc: '',
  containerSrc: '',
  jsSrc: '',
  title: '',
  callback: function callback(query) {
    return DB.queryAllIP(query);
  }
}, {
  path: 'es/termofuse',
  isOnline: true,
  isApi: true,
  data: {},
  cssSrc: '',
  containerSrc: './components/termofuser/es-termofus',
  jsSrc: '',
  title: ''
}];